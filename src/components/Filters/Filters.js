// @flow
// node_modules
import React, { Component } from 'react';
import ReactSVG from 'react-svg';

// redux
import {connect} from 'react-redux';
import * as actions from './Filters.action';
import store from '../../store';

// sub-components
import categoriesJSON from './categories.json';
import Map from '../Map/Map';
import {Social} from '../Social/Social';
import {FilterToggle} from './subcomponents/FilterToggle';
import {FilterOptions} from './subcomponents/FilterOptions';
import {FilterMap} from './subcomponents/FilterMap';

// assets
import FaClose from 'react-icons/lib/fa/close';

// types
type Props = {
  location: 'string',
  mobileDrawerVisibility: boolean
};

type State = {
  animate: '' | 'animate',
  togglePosition: 'uk' | 'london',
  categories: Array<{
    name: string, 
    sub: Array<{
      name: string,
      selected: boolean
    }>,
    selected: boolean
  }>
};

// class
class Filters extends Component<Props, State> {
  constructor() {
    super();

    this.state = {
      animate: '',
      togglePosition: 'uk',
      categories: categoriesJSON
    };
  }

  handleToggle = (e: SyntheticEvent<HTMLButtonElement>) => {
    this.setState({
      togglePosition: this.state.togglePosition === 'uk' 
        ? 'london' : 'uk' // simple toggle
    }, () => {
      this.setMobileDrawerVisibility(false);
      this.setSelection('location', this.state.togglePosition)
    });
  }

  handleCategorySelect = (index: number) => {
    let { categories } = this.state;
    
    this.setState({
      categories: categories.map((a, i) => {
        return i === index 
          ? Object.assign({}, a, { selected: !a.selected })
          : a
        })
    }, () => this.setSelection('category', categories[index].name));
  }

  handleSubCategorySelect = (i: number, j: number) => {
    let { categories } = this.state;
    
    let sub = Object
      .assign({}, this.state.categories[i])
      .sub
      .map((s, jIndex) => {
        return jIndex === j
          ? Object.assign({}, s, { selected: !s.selected })
          : s
      })

      this.setState({
        categories: categories.map((a, iIndex) => {
          return iIndex === i 
            ? Object.assign({}, a, { sub })
            : a
          })
      }, () => {
        this.setMobileDrawerVisibility(false);
        this.setSelection('subcategory', categories[i].sub[j].name)
      });
  }

  setSelection = (key: string, value: string) => {
    store.dispatch(actions.setSelection(key, value));
  }

  setMobileDrawerVisibility = (isVisible: boolean) => {
    store.dispatch(actions.setMobileDrawerVisibility(isVisible))
  }
  
  render() {
    process.env.REACT_APP_RENDER_DEBUG === 'true' 
      ? console.log('rendering', this) : null;
    
    const { location, mobileDrawerVisibility } = this.props;
    const { animate, togglePosition, categories } = this.state;

    let mobileToggleClass = mobileDrawerVisibility 
      ? '--mobile-drawer-open' : '';

    let map = <FilterMap 
      location={location}
      animate={animate}/>

    let toggle = <FilterToggle
      animate={animate} 
      togglePosition={togglePosition}
      handleToggle={this.handleToggle}/>

    let filters = <FilterOptions
      animate={animate} 
      categories={this.state.categories} 
      handleCategorySelect={this.handleCategorySelect}
      handleSubCategorySelect={this.handleSubCategorySelect}/>

    let social = <Social />

    let mobileClose = <div className={`Filters__mobile-close-container`}>
      <FaClose onClick={() => this.setMobileDrawerVisibility(false)}/>
    </div>

    return (
      <div className={`Filters ${mobileToggleClass}`}>
        {mobileClose}
        {map}
        {toggle}
        {filters}
        {social}
      </div>
    );
  }
}

const storeToProps = (store) => {
  return {
    location: store.FiltersReducer.location,
    mobileDrawerVisibility: store.FiltersReducer.mobileDrawerVisibility
  }
}

export default connect(storeToProps)(Filters);