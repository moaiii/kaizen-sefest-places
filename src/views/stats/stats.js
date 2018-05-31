// @flow
// node_modules
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// redux
import {connect} from 'react-redux';
import store from '../../store';

// sub-components
import Card from '../../components/Card/Card';
import Map from '../../components/Map/Map';
import {Grid} from '../../components/Grid/Grid';

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
      .filter(city => {
        return city.Name.toLowerCase() === decodeURI(urlCity).toLowerCase()
      })[0];

    this.setState({ data }, () => console.log(data))
  }

  render() {
    process.env.REACT_APP_RENDER_DEBUG === 'true' 
      ? console.log('rendering', this) : null;
    
    const { data } = this.state;

    if(typeof data.Name !== 'undefined') {
      return (
        <div className="Stats">
          <Card city={data} index={1} size={'large'}/>
          <Grid data={data}/>
          <Map city={data.Name.toLowerCase()} size={`large`}/>
        </div>
      );
    } else {
      return(
        <h1>Loading....</h1>
      )
    }
  }
}