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
  "barking and dagenham": require('../../assets/cities/barking.jpg'),
  "barnet": require('../../assets/cities/barnet.jpg'),
  "bexley": require('../../assets/cities/bexley.jpg'),
  "brent": require('../../assets/cities/brent.jpg'),
  "bromley": require('../../assets/cities/bromley.jpg'),
  "camden": require('../../assets/cities/camden.jpg'),
  "croydon": require('../../assets/cities/croydon.jpg'),
  "ealing": require('../../assets/cities/ealing.jpg'),
  "enfield": require('../../assets/cities/enfield.jpg'),
  "greenwich": require('../../assets/cities/greenwich.jpg'),
  "hackney": require('../../assets/cities/hackney.jpg'),
  "hammersmith and fulham": require('../../assets/cities/hammersmith.jpg'),
  "haringey": require('../../assets/cities/haringey.jpg'),
  "harrow": require('../../assets/cities/harrow.jpg'),
  "havering": require('../../assets/cities/havering.jpg'),
  "hillingdon": require('../../assets/cities/hillingdon.jpg'),
  "hounslow": require('../../assets/cities/hounslow.jpg'),
  "islington": require('../../assets/cities/islington.jpg'),
  "kensington and chelsea": require('../../assets/cities/kensington.jpg'),
  "kingston upon thames": require('../../assets/cities/kingston.jpg'),
  "lambeth": require('../../assets/cities/lambeth.jpg'),
  "lewisham": require('../../assets/cities/lewisham.jpg'),
  "merton": require('../../assets/cities/merton.jpg'),
  "newham": require('../../assets/cities/newham.jpg'),
  "redbridge": require('../../assets/cities/redbridge.jpg'),
  "richmond upon thames": require('../../assets/cities/richmond.jpg'),
  "southwark": require('../../assets/cities/southwark.jpg'),
  "sutton": require('../../assets/cities/sutton.jpg'),
  "tower hamlets": require('../../assets/cities/towerhamlets.jpg'),
  "waltham forest": require('../../assets/cities/waltham.jpg'),
  "wandsworth": require('../../assets/cities/wandsworth.jpg'),
  "westminster": require('../../assets/cities/westminster.jpg'),
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
      {city.name.replace(/"/g, '')}
    </h2>;
    
    let anchorPathname = size === `large` ? `overview` : `stats`;
    
    let anchorSearch = size === `large` ? `` : `?city=${city.name}`;

    let anchor = <Link className={`Card__link --${anchorPathname} ${animate}`} 
      to={{
        pathname: `/${anchorPathname}`,
        search: `${anchorSearch}&rank=${index + incremement}`
      }}>
      <p className={`Card__link-text ${animate}`}>{anchorPathname === 'overview' ? 'back' : 'stats'}</p>
      <FaAngleRight className={`Card__link-text-arrow ${animate}`}/>
    </Link>
    
    let imageURL = imgSrc[city.name.toLowerCase()];
   
    let image = <div className={`Card__image ${animate}`}>
      <img src={imageURL}/>
    </div>

    let wipe = <div className={`Card__wipe ${animate}`}></div>

    return (
      <div className={`Card --${size} ${animate}`}>
        <div className={`card-inner-wrapper ${animate} --color-${index} --${city.name.replace(/"/g, '')}`}>
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