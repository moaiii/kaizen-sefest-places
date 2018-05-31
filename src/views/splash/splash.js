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
    store.dispatch(IntroActions.fetchData(/*url*/));
  }

  shouldComponentUpdate(nextProps: Object, nextState: Object) {
    return this.state.animate !== '--animate';
  } 

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        animate: '--animate'
      })
    }, 50);
  }

  render() {
    process.env.REACT_APP_RENDER_DEBUG === 'true' 
      ? console.log('rendering', this) : null;
    
    const { animate } = this.state;

    return (
      <div className={`Splash ${animate}`}>
        <Intro />
        <Map size={`large`} city={'glasgow'}/>
      </div>
    );
  }
}