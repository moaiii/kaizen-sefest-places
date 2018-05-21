// @flow
// node_modules
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import {connect} from 'react-redux';

// redux
// import store from '@versus-store';

// sub-components
// ........

type Props = {};
type State = {};

export class Overview extends Component<Props, State> {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    //const {} = this.props;
    //const {} = this.state;

    return (
      <div className="Overview">
        <p>Overview</p>
        <Link to="/detail">detail</Link>
      </div>
    );
  }
}

// const storeToProps = (store) => {
//   return {}
// }

// export default connect(storeToProps)(Overview);