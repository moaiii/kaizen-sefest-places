// @flow
// node_modules
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// redux
import {connect} from 'react-redux';
import store from '../../store';
import * as IntroActions from '../../components/Intro/Intro.action';

// sub-components
import Card from '../../components/Card/Card';
import Map from '../../components/Map/Map';
import {Grid} from '../../components/Grid/Grid';

// assets
import FaAngleLeft from 'react-icons/lib/fa/angle-left';

type Props = {
  data: Object
};

type State = {
  data: Object,
  rank: string
};

export class Stats extends Component<Props, State> {
  constructor() {
    super();

    this.state = {
      data: {},
      rank: ''
    };
  }

  componentWillMount() {
    window.scroll(0, 0);
    store.dispatch(IntroActions.fetchData());
  }

  componentDidMount() {
    window.scroll(0, 0);
    let urlCity = new URL(window.location.href).hash.split('=')[1].replace(/&rank/g, '');
    let rank = new URL(window.location.href).hash.split('&rank=')[1];
    
    let data = store
      .getState().IntroReducer.data
      .filter(city => {
        return city.name.toLowerCase() === decodeURI(urlCity).toLowerCase()
      })[0];

    this.setState({ data, rank });
  }

  render() {
    process.env.REACT_APP_RENDER_DEBUG === 'true' 
      ? console.log('rendering', this) : null;
    
    const { data, rank } = this.state;

    let statsHeader = <div className={`Stats__mobile-header --color-${rank}`}>
      <Link to={{pathname: '/overview'}}>
        <FaAngleLeft className={`stats-mobile-header-arrow`}/>
      </Link>
      <p>{rank}</p>
      <p>{data.name}</p>
    </div>

    if(typeof data.name !== 'undefined') {
      return (
        <div className="Stats">
          {statsHeader}
          <Card city={data} index={parseInt(rank, 10)} size={'large'}/>
          <Grid data={data}/>
          <Map city={data.name.toLowerCase()} size={`large`} mod={''}/>
        </div>
      );
    } else {
      return(
        <h1>Loading....</h1>
      )
    }
  }
}
