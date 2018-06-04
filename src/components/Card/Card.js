// @flow
// node_modules
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// redux
import store from '../../store';
import {connect} from 'react-redux';
import * as actions from './Card.action';

// sub-components
import FaAngleRight from 'react-icons/lib/fa/angle-right';

// images
let imgSrc = {
  aberdeen: require('../../assets/cities/aberdeen.jpg'),
  belfast: require('../../assets/cities/belfast.jpg'),
  birmingham: require('../../assets/cities/birmingham.jpg'),
  bradford: require('../../assets/cities/bradford.jpg'),
  'brighton and hove': require('../../assets/cities/brighton.jpg'),
  bristol: require('../../assets/cities/bristol.jpg'),
  cardiff: require('../../assets/cities/cardiff.jpg'),
  coventry: require('../../assets/cities/coventry.jpg'),
  derby: require('../../assets/cities/derby.jpg'),
  edinburgh: require('../../assets/cities/edinburgh.jpg'),
  glasgow: require('../../assets/cities/glasgow.jpg'),
  leeds: require('../../assets/cities/leeds.jpg'),
  leicester: require('../../assets/cities/leicester.jpg'),
  liverpool: require('../../assets/cities/liverpool.jpg'),
  london: require('../../assets/cities/london.jpg'),
  manchester: require('../../assets/cities/manchester.jpg'),
  'newcastle upon tyne': require('../../assets/cities/newcastle.jpg'),
  nottingham: require('../../assets/cities/nottingham.jpg'),
  plymouth: require('../../assets/cities/plymouth.jpg'),
  sheffield: require('../../assets/cities/sheffield.jpg'),
  southampton: require('../../assets/cities/southampton.jpg'),
  sheffield: require('../../assets/cities/sheffield.jpg'),
  southampton: require('../../assets/cities/southampton.jpg'),
  sunderland: require('../../assets/cities/sunderland.jpg'),
  wakefield: require('../../assets/cities/wakefield.jpg'),
  wolverhampton: require('../../assets/cities/wolverhampton.jpg'),
  portsmouth: require('../../assets/cities/portsmouth.jpg'),
  peterborough: require('../../assets/cities/peterborough.jpg'),
  swansea: require('../../assets/cities/swansea.jpg'),
  york: require('../../assets/cities/york.jpg'),
  'stoke-on-trent': require('../../assets/cities/stoke.jpg'),
  'kingston upon hull': require('../../assets/cities/hull.jpg'),
}

type Props = {
  city: Object,
  index: number,
  size: string,
  filtering: boolean
};

type State = {};

class Card extends Component<Props, State> {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    process.env.REACT_APP_RENDER_DEBUG === 'true' 
      ? console.log('rendering', this) : null;
    
    const { city, index, size, filtering } = this.props;
    //const {} = this.state;

    let animate = filtering ? '--animate' : '';

    let incremement = window.location.href.includes('stats') 
      ? 0 : 1;

    let rank = <h1 className={`Card__rank ${animate}`}>
      {index + incremement}
    </h1>
    
    let cityName = <h2 className={`Card__city ${animate}`}>
      {city.Name.replace(/"/g, '')}
    </h2>;
    
    let anchorPathname = size === `large` ? `overview` : `stats`;
    
    let anchorSearch = size === `large` ? `` : `?city=${city.Name}`;

    let anchor = <Link className={`Card__link --${anchorPathname} ${animate}`} 
      to={{
        pathname: `/${anchorPathname}`,
        search: `${anchorSearch}&rank=${index + incremement}`
      }}>
      <p className={`Card__link-text ${animate}`}>{anchorPathname === 'overview' ? 'back' : 'stats'}</p>
      <FaAngleRight className={`Card__link-text-arrow ${animate}`}/>
    </Link>

    // TODO: get london boroughs images
    let imageURL = city.DataType === 'london' 
      ? imgSrc['london'] : imgSrc[city.Name.toLowerCase()];
   
    let image = <div className={`Card__image ${animate}`}>
      <img src={imageURL}/>
    </div>

    let wipe = <div className={`Card__wipe ${animate}`}></div>

    return (
      <div className={`Card --${size}`}>
        <div className="card-inner-wrapper">
          {rank}
          {cityName}
          {anchor}
          {image}
        </div>
      </div>
    );
  }
}

const storeToProps = (store) => {
  return {
    filtering: store.FiltersReducer.filtering
  }
}

export default connect(storeToProps)(Card);