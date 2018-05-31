// @flow
// node_modules
import React, { Component } from 'react';
import ReactSVG from 'react-svg'
import {connect} from 'react-redux';

// redux
import store from '../../store';

// sub-components
import mapSrc__uk from '../../assets/svg/UK-outline.svg';
import mapSrc__london from '../../assets/svg/LondonMap.svg';
import bud1 from '../../assets/png/bud1.png';
import bud2 from '../../assets/png/bud2.png';
import bud3 from '../../assets/png/bud3.png';
import building1 from '../../assets/png/building1.png';
import building2 from '../../assets/png/building2.png';
import building3 from '../../assets/png/building3.png';
import building4 from '../../assets/png/building4.png';
import building5 from '../../assets/png/building5.png';
import building6 from '../../assets/png/building6.png';
import building7 from '../../assets/png/building7.png';
import building8 from '../../assets/png/building8.png';
import building9 from '../../assets/png/building9.png';
import building10 from '../../assets/png/building10.png';
import building11 from '../../assets/png/building11.png';
import building12 from '../../assets/png/building12.png';
import building13 from '../../assets/png/building13.png';
import building14 from '../../assets/png/building14.png';
import building15 from '../../assets/png/building15.png';
import cloud from '../../assets/png/cloud.png';
import shop1 from '../../assets/png/shop1.png';
import shop2 from '../../assets/png/shop2.png';
import shop3 from '../../assets/png/shop3.png';
import shop4 from '../../assets/png/shop4.png';
import swimmingpool from '../../assets/png/swimmingpool.png';
import tree from '../../assets/png/tree.png';

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
  data: Array<Object>,
  location: string
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

  shouldComponentUpdate(nextProps: Object) {
    return nextProps.data.length !== this.props.data.length;
  } 

  populateBuildingSvgArray = () => {
    const { size } = this.props;
    const { animate } = this.state;

    let buildingSvgs: Array<any> = svgSrcs
      .map((path, index) => {
        return <img
          src={path}
          // svgClassName={`Map__city-svg ${animate}`}
          className={`Map__city-wrapper --${size} ${animate}`}
        />
      })

    this.setState({ buildingSvgs });
  }
  
  render() {
    process.env.REACT_APP_RENDER_DEBUG === 'true' 
      ? console.log('rendering', this) : null;
    
    const { size, city, data, location } = this.props;
    const { animate, buildingSvgs } = this.state;

    // render array of city svg data points
    let cityPoints = data && buildingSvgs
      ? data.map((location, index) => {

        let style = {
          left: location['map-position'].left,
          top: location['map-position'].top,
          display: city === 'all' || city === location.Name.toLowerCase() 
            ? 'block' : 'none'
        }

        return(
          <div className={`city-svg__wrapper`} 
            data-name={`${location.Name}`}
            style={style} key={`${index}-city-svg`}>
            {buildingSvgs[index]}
          </div>
        )
      })
      : <p>No data loaded yet</p>;

      

    let mapSRC = location === 'uk' ? mapSrc__uk : mapSrc__london;

    return (
      <div className={`Map --${location}`}>
        <div className={`Map__land --${size}`}>
          <ReactSVG
            path={mapSRC}
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
    location: store.FiltersReducer.location,
    data: store.IntroReducer.data
  }
}

export default connect(storeToProps)(Map);