// @flow
// node_modules
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// sub-components
import FaPlay from 'react-icons/lib/fa/play';

type State = {
  animate: string
};

type Props = {};

export default class Intro extends Component<Props, State> {
  constructor() {
    super();

    this.state = {
      animate: ''
    };
  }
  
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        animate: '--animate'
      })
    }, 50);
  }

  render() {
    process.env.REACT_APP_RENDER_DEBUG === 'true' 
      ? console.log('rendering', this) : null;
    
    const { animate } = this.state;

    let openingTitle = <p className={`Intro__title ${animate}`}>
      The UK's <span>safest places</span> to live
    </p>

    let openingParagraph = <p className={`Intro__paragraph ${animate}`}>
      For most, being home means being safe - but that means you\'ve got to think ahead when buying property. 
      Bad weather, crime, and fast medical response time are all something you want to watch out for when 
      picking where you want to live. But with this guide, the work is already done for you - have a look to 
      see the safest places to find a home.
    </p>

    let ctaButton = <Link to={{pathname: '/overview',}}>
      <button className={`Intro__cta ${animate}`}>
        <svg className={`cta__circle`} height="100" width="100">
          <circle cx="50" cy="50" r="50" stroke="white" strokeWidth="6" fill="none" />
        </svg>
        <FaPlay className={`play-button`}/>
      </button>
    </Link>

    return (
      <div className="Intro">
        {openingTitle}
        {openingParagraph}
        {ctaButton}
      </div>
    );
  }
}