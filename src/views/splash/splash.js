// @flow
// node_modules
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import {connect} from 'react-redux';
import store from '../../store';
import * as IntroActions from '../../components/Intro/Intro.action';

// redux
// import store from '@versus-store';

// sub-components
// ........

type Props = {};
type State = {};

export class Splash extends Component<Props, State> {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    //const {} = this.props;
    //const {} = this.state;

    return (
      <div className="Splash">
        <p>splash</p>
        <Link to={{
          pathname: '/detail',
          search: '?city=name',
          hash: '',
          state: { 
            fromDashboard: true 
          }
        }}>Go To Detail</Link>
        <button onClick={() => store.dispatch(IntroActions.initialise())}>Action</button>
      </div>
    );
  }
}

// const storeToProps = (store) => {
//   return {}
// }

// export default connect(storeToProps)(Splash);