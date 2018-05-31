// @flow
// node_modules
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// redux
import {connect} from 'react-redux';
import store from '../../store';

// sub-components
import Card from '../../components/Card/Card';
import {Filters} from '../../components/Filters/Filters';

// assets

// types
type Props = {
  data?: Array<Object>,
  location: 'london' | 'uk',
  filtering: boolean
};

type State = {};

// class
export class Overview extends Component<Props, State> {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    process.env.REACT_APP_RENDER_DEBUG === 'true' 
      ? console.log('rendering', this) : null;
    
    const { data, location, filtering } = this.props;
    //const {} = this.state;
    
    let cities = data 
      ? <div className={`Overview__card-container`}>
        {data
          .filter(x => x.DataType === location)
          .map((city, index) => 
          <Card
            key={`${index}-card`} 
            index={index}
            size={`small`}
            city={{...city}}/>)
        }
      </div>
      : [];

      let filters = <div className={`Overview__filters-container`}>
        <Filters />
      </div>

    return (
      <div className="Overview">
        {cities}
        {filters}
      </div>
    );
  }
}

const storeToProps = (store) => {
  return {
    location: store.FiltersReducer.location,
    data: store.FiltersReducer.filteredData.length === 0
      ? store.IntroReducer.data : store.FiltersReducer.filteredData
  }
}

export default connect(storeToProps)(Overview);