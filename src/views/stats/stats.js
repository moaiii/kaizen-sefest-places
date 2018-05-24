// @flow
// node_modules
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// redux
import {connect} from 'react-redux';
import store from '../../store';

// sub-components
import {Card} from '../../components/Card/Card';
import Map from '../../components/Map/Map';

type Props = {
  data: Object
};

type State = {
  data: Object
};

export class Stats extends Component<Props, State> {
  constructor() {
    super();

    this.state = {
      data: {}
    };
  }

  componentDidMount() {
    let urlCity = new URL(window.location.href).hash.split('=')[1];
    
    let data = store
      .getState().IntroReducer.data
      .filter(city => city.City.toLowerCase() === urlCity.toLowerCase())[0];

    this.setState({ data }, () => console.log(data))
  }

  render() {
    const { data } = this.state;
    //const {} = this.state;
    
    if(typeof data.City !== 'undefined') {
      return (
        <div className="Stats">
          <Card city={data} index={1} size={'large'}/>
          {/* <StatGrid /> */}
          <Map city={data.City.toLowerCase()} size={`large`}/>
        </div>
      );
    } else {
      return(
        <h1>Loading....</h1>
      )
    }
  }
}