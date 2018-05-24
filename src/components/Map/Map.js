// @flow
// node_modules
import React, { Component } from 'react';
import ReactSVG from 'react-svg'
import {connect} from 'react-redux';

// redux
import store from '../../store';

// sub-components
import mapSrc from '../../assets/svg/UK-outline.svg';
import bud1 from '../../assets/svg/bud1.svg';
import bud2 from '../../assets/svg/bud2.svg';
import bud3 from '../../assets/svg/bud3.svg';
import building1 from '../../assets/svg/building1.svg';
import building2 from '../../assets/svg/building2.svg';
import building3 from '../../assets/svg/building3.svg';
import building4 from '../../assets/svg/building4.svg';
import building5 from '../../assets/svg/building5.svg';
import building6 from '../../assets/svg/building6.svg';
import building7 from '../../assets/svg/building7.svg';
import building8 from '../../assets/svg/building8.svg';
import building9 from '../../assets/svg/building9.svg';
import building10 from '../../assets/svg/building10.svg';
import building11 from '../../assets/svg/building11.svg';
import building12 from '../../assets/svg/building12.svg';
import building13 from '../../assets/svg/building13.svg';
import building14 from '../../assets/svg/building14.svg';
import building15 from '../../assets/svg/building15.svg';
import cloud from '../../assets/svg/cloud.svg';
import shop1 from '../../assets/svg/shop1.svg';
import shop2 from '../../assets/svg/shop2.svg';
import shop3 from '../../assets/svg/shop3.svg';
import shop4 from '../../assets/svg/shop4.svg';
import swimmingpool from '../../assets/svg/swimmingpool.svg';
import tree from '../../assets/svg/tree.svg';

const svgSrcs = [
  building1, building2, building3, building4, building5, 
  building6, building7, building8, building9, building10, 
  building11, building12, building13, building14, building15, 
  building1, building2, building3, building4, building5, 
  building6, building7, building8, building9, building10, 
  building11, building12, building13, building14, building15, 
  building1, building2, building3, building4, building5, 
  building6, building7, building8, building9, building10, 
  building11, building12, building13, building14, building15, 
];

type Props = {
  size: string,
  city: Array<string> | string,
  data: Array<Object>
};

type State = {
  animate: string,
  buildingSvgs: Array<Object>
};

class Map extends Component<Props, State> {
  static defaultProps = {
    size: 'large', 
    city: 'all',
  };

  constructor() {
    super();

    this.state = {
      animate: '',
      buildingSvgs: []
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({animate: '--animate'}, () => {
        this.populateBuildingSvgArray();
      })
    }, 50);
  }

  populateBuildingSvgArray = () => {
    const { size } = this.props;
    const { animate } = this.state;

    let buildingSvgs: Array<any> = svgSrcs
      .map((path, index) => {
        return <ReactSVG
          path={path}
          svgClassName={`Map__city-svg ${animate}`}
          className={`Map__city-wrapper --${size} ${animate}`}
        />
      })

    this.setState({ buildingSvgs });
  }
  
  render() {
    const { size, city, data } = this.props;
    const { animate, buildingSvgs } = this.state;

    // render array of city svg data points
    let cityPoints = data && buildingSvgs
      ? data.map((location, index) => {

        let style = {
          left: location['map-position'].left,
          top: location['map-position'].top,
          display: city === 'all' || city === location.City.toLowerCase() 
            ? 'block' : 'none'
        }

        return(
          <div className={`city-svg__wrapper`} 
            data-name={`${location.City}`}
            style={style} key={`${index}-city-svg`}>
            {buildingSvgs[index]}
          </div>
        )
      })
      : <p>No data loaded yet</p>;

    return (
      <div className="Map">
        <div className={`Map__land --${size}`}>
          <ReactSVG
            path={mapSrc}
            svgClassName={`Map__svg ${animate}`}
            className={`Map__svg-wrapper --${size} ${animate}`}
          />
          <div className="Map__cities">
            <div className="inner-wrapper">
              {cityPoints}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const storeToProps = (store) => {
  return {
    data: store.IntroReducer.data
  }
}

export default connect(storeToProps)(Map);