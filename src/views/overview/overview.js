// @flow
// node_modules
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// redux
import {connect} from 'react-redux';
import store from '../../store';
import * as IntroActions from '../../components/Intro/Intro.action';
import * as FiltersActions from '../../components/Filters/Filters.action';

// sub-components
import Card from '../../components/Card/Card';
import Filters from '../../components/Filters/Filters';
import Modal from '../../components/Modal/Modal';
import {FilterMap} from '../../components/Filters/subcomponents/FilterMap';

// assets
import FaBars from 'react-icons/lib/fa/bars';

// types
type Props = {
  data?: Array<Object>,
  location: 'london' | 'uk',
  filtering: boolean,
  mobileDrawerVisibility: boolean
};

type State = {};

// class
export class Overview extends Component<Props, State> {
  constructor() {
    super();

    this.state = {};
  }

  componentWillMount() {
    store.dispatch(IntroActions.fetchData());
  }

  setMobileDrawerVisibility = (isVisible: boolean) => {
    store.dispatch(FiltersActions.setMobileDrawerVisibility(isVisible))
  }

  render() {
    process.env.REACT_APP_RENDER_DEBUG === 'true' 
      ? console.log('rendering', this) : null;
    
    const { data, location, filtering, mobileDrawerVisibility } = this.props;
    //const {} = this.state;
    
    let cities = data 
      ? <div className={`Overview__card-container`}>
        {data
          .filter(x => x.datatype === location)
          .map((city, index) => 
          <Card
            key={`${index}-card`} 
            index={index}
            size={`small`}
            city={{...city}}/>)
        }
      </div>
      : [];

    let mobileToggleClass = mobileDrawerVisibility 
      ? '--mobile-drawer-open' : '';

    let filters = <div className={`Overview__filters-container ${mobileToggleClass}`}>
      <Filters />
    </div>

    let modal = <Modal />

    let blurb = location === 'uk'
      ? 'The UK\'s safest places to live'
      : 'London\'s safest places to live'

    let mobileHeader = <div className={`mobile-header`}>
      <p>{blurb}</p>
      <FaBars onClick={() => this.setMobileDrawerVisibility(true)}/>
    </div>

    return (
      <div className="Overview">
        {mobileHeader}
        {cities}
        {filters}
        {modal}
      </div>
    );
  }
}

const storeToProps = (store) => {
  return {
    mobileDrawerVisibility: store.FiltersReducer.mobileDrawerVisibility,
    location: store.FiltersReducer.location,
    data: store.FiltersReducer.filteredData.length === 0
      ? store.IntroReducer.data : store.FiltersReducer.filteredData
  }
}

export default connect(storeToProps)(Overview);