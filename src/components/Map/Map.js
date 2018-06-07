// @flow
// node_modules
import React, { Component } from 'react';
import ReactSVG from 'react-svg'
import {connect} from 'react-redux';

// redux
import store from '../../store';

// sub-components
import auxData from './subcomponents/aux';
import cloudData from './subcomponents/cloud';
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
import splashMap from '../../assets/png/uk-map-splash.png';

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

const cloudSrcs = [cloud,cloud,cloud,cloud,cloud,cloud,
  cloud,cloud,cloud,cloud,cloud,cloud];

const auxSrcs = [
  shop1,shop2,shop3,shop4,swimmingpool,tree,tree,tree,
  shop1,shop2,shop3,shop4,swimmingpool,tree,tree,tree,
  tree,tree,tree,shop4,swimmingpool,tree,tree,tree,
  tree,tree,tree,swimmingpool,tree,tree,tree,
  tree,tree,tree,tree,tree,tree,
];

type Props = {
  size: string,
  city: Array<string> | string,
  data: Array<Object>,
  location: string,
  mod: ?string
};

type State = {
  animate: string,
  buildingSvgs: Array<Object>,
  cloudSvgs: Array<Object>,
  auxSvgs: Array<Object>
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
      buildingSvgs: [],
      cloudSvgs: [],
      auxSvgs: []
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({animate: '--animate'}, () => {
        this.populateBuildingSvgArray();
        this.populateAuxSvgArray();
        this.populateCloudSvgArray();
      })
    }, 50);
  }

  populateBuildingSvgArray = () => {
    const { size } = this.props;
    const { animate } = this.state;

    let buildingSvgs: Array<any> = svgSrcs
      .map((path, index) => {
        return <img
          src={path}
          className={`Map__city-wrapper --${size} ${animate}`}
        />
      })

    this.setState({ buildingSvgs }, () => this.forceUpdate());
  }

  populateCloudSvgArray = () => {
    const { size } = this.props;
    const { animate } = this.state;

    let cloudSvgs: Array<any> = cloudSrcs
      .map((path, index) => {
        return <img
          src={path}
          className={`Map__cloud --${size} ${animate}`}
        />
      })

    this.setState({ cloudSvgs }, () => this.forceUpdate());
  }

  populateAuxSvgArray = () => {
    const { size } = this.props;
    const { animate } = this.state;

    let auxSvgs: Array<any> = auxSrcs
      .map((path, index) => {
        return <img
          src={path}
          className={`Map__aux-buildings --${size} ${animate}`}/>
      })

    this.setState({ auxSvgs }, () => {
      // console.log(this.state);
      this.forceUpdate()});
  }

  populateCloudSvgArray = () => {
    const { size } = this.props;
    const { animate } = this.state;

    let cloudSvgs: Array<any> = cloudSrcs
      .map((path, index) => {
        return <img
          src={path}
          className={`Map__cloud --${size} ${animate}`}/>
      })

    this.setState({ cloudSvgs }, () => {
      // console.log(this.state);
      this.forceUpdate()});
  }
  
  render() {
    process.env.REACT_APP_RENDER_DEBUG === 'true' 
      ? console.log('rendering', this) : null;
    
    const { size, city, data, location, mod } = this.props;
    const { animate, buildingSvgs, auxSvgs, cloudSvgs } = this.state;

    let mapSRC = location === 'uk' ? mapSrc__uk : mapSrc__london;

    let classModifier = window.location.href.includes('overview') && location === 'london'
      ? '--make-it-big' : '';

    let classModifierStats = window.location.href.includes('stats') && location === 'london'
      ? '--stats-london' : '';

    let showRadar = window.location.href.includes('stats')
      ? '--isVisible' : '';

    // render array of city svg data points
    let cityPoints = data && buildingSvgs.length > 0
      ? data
        .filter((x, index) => {
          if(mod === 'splash') {
            return x.datatype === 'uk';
          } else {
            return x;
          }
        })
        .map((location, index) => {
        
          let style = {
            left: location['map-position'].left,
            top: location['map-position'].top,
            display: city === 'all' || city === location.name.toLowerCase() 
              ? 'block' : 'none'
          }

          return(
            <div className={`city-svg__wrapper`} 
              data-name={`${location.name}`}
              style={style} key={`${index}-city-svg`}>
              <div className="building-inner-wrapper">
                {buildingSvgs[index]}
              </div>
              <div className={`radar ${showRadar}`}>
                <div className="radar__one"></div>
                <div className="radar__two"></div>
              </div>
            </div>
          )
        })
      : <p>No data loaded yet</p>;

    let auxPoints = auxData
      .map((dp, i) => {
        let style = {
          left: dp.left,
          top: dp.top,
          display: mod === 'splash' ? 'block' : 'none'
        }

        return(
          <div className={`city-svg__wrapper`} 
            style={style} key={`${i}-aux-svg`}>
            <div className="building-inner-wrapper">
              {auxSvgs[i]}
            </div>
          </div>
        )
      });
    
    let cloudPoints = cloudData
      .map((dp, i) => {
        let style = {
          left: dp.left,
          top: dp.top,
          display: mod === 'splash' ? 'block' : 'none'
        }

        return(
          <div className={`city-svg__wrapper --cloud`} 
            style={style} key={`${i}-cloud-svg`}>
            <div className="building-inner-wrapper">
              {cloudSvgs[i]}
            </div>
          </div>
        )
      });

      let map = mod !== 'splash'
        ? <div className={`Map__land --${size} ${classModifier} ${classModifierStats}`}>
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
            <div className="Map__aux">
              <div className="inner-wrapper">
                {auxPoints}
              </div>
            </div>
            <div className="Map__cloud">
              <div className="inner-wrapper">
                {cloudPoints}
              </div>
            </div>
          </div>
        : <div className={`Map__land --${mod || ''} --${size} ${classModifier} ${classModifierStats}`}>
            <img src={splashMap} alt="icon"/>
            <div className="Map__cloud">
              <div className="inner-wrapper">
                {cloudPoints}
              </div>
            </div>
          </div>

    return (
      <div className={`Map --${mod || ''}`}>
        {map}
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