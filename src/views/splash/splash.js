// @flow
// node_modules
import React, { Component } from 'react';

// redux
import store from '../../store';
import * as IntroActions from '../../components/Intro/Intro.action';

// sub-components
import Intro from '../../components/Intro/Intro';
import Map from '../../components/Map/Map';

type State = {
  animate: string
};

type Props = {};

export class Splash extends Component<Props, State> {
  constructor() {
    super();

  }
  state = {
    animate: '--'
  };

  componentWillMount() {
    let url = 'https://s3-eu-west-1.amazonaws.com/kaizen-safest-cities-data/data.json';
    store.dispatch(IntroActions.fetchData(url));
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        animate: '--animate'
      })
    }, 50);
  }

  render() {
    const { animate } = this.state;

    return (
      <div className={`Splash ${animate}`}>
        <Intro />
        <Map size={`large`} city={'all'}/>
      </div>
    );
  }
}