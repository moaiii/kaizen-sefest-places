// @flow
// node_modules
import React, { Component } from 'react';
import {connect} from 'react-redux';

// sub-components
import {GridTile} from './subcomponents/GridTile';

type Props = {
  data: Object 
};

type State = {
  animate: string
};

export class Grid extends Component<Props, State> {
  constructor() {
    super();

    this.state = {
      animate: ''
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({animate: '--animate'}, () => {
      })
    }, 50);
  }

  render() {
    const { data } = this.props;
    const { animate } = this.state;

    let grid = <div className={`Grid__tile-container`}>
      {
        Object.entries(data)
        .slice(3, 30)
        .filter(a => a[0].indexOf('index') === -1)
        .filter(b => b[0].indexOf('*') >= 0)
        .map((dataPoint, index) => {
          return <GridTile 
            key={`${index}-grid-data-point`} 
            animate={animate} 
            dataPoint={dataPoint}/>
        })
      }
    </div>

    return (
      <div className={`Grid ${this.state.animate}`}>
        {grid}
      </div>
    );
  } 
}