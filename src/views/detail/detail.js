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

export class Detail extends Component<Props, State> {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    //const {} = this.props;
    //const {} = this.state;

    return (
      <div className="Detail">
        <p>Detail</p>
        <Link to="/">Splash</Link>
      </div>
    );
  }
}

// const storeToProps = (store) => {
//   return {}
// }

// export default connect(storeToProps)(Detail);