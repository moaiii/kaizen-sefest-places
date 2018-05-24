// @flow
// node_modules
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

// redux
// eslint-disable-next-line
import store from '../../store';

// sub-components
import {Card} from '../../components/Card/Card';

type Props = {
  data?: Array<Object>
};

type State = {};

export class Overview extends Component<Props, State> {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    const { data } = this.props;
    //const {} = this.state;

    let cities = data 
      ? data.map((city, index) => 
        <Card 
          key={`${index}-card`} 
          index={index}
          size={`small`}
          city={{...city}}/>)
      : [];

    return (
      <div className="Overview">
        {cities}
      </div>
    );
  }
}

const storeToProps = (store) => {
  return {
    data: store.IntroReducer.data
  }
}

export default connect(storeToProps)(Overview);