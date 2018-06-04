// @flow
// node_modules
import React, { Component } from 'react';
import {connect} from 'react-redux';

// redux
import store from '../../store';
import * as actions from './Social.action';

// sub-components
import FaFacebook from 'react-icons/lib/fa/facebook';
import FaTwitter from 'react-icons/lib/fa/twitter';
import FaInfo from 'react-icons/lib/fa/info';
import ctmLogo from '../../assets/png/ctm-logo.png';

type Props = {};

type State = {
  animate: string
};

export class Social extends Component<Props, State> {
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

  handleSocialClick = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault();
    let network = e.currentTarget.getAttribute('data-network'); 
    let description = "The best UK city to be a landlord" 
    let href;

    switch (network) {
      case 'facebook':
        href = 'https://www.facebook.com/sharer/sharer.php?u=' + 
        // $FlowFixMe - cant detect process.env
        `${process.env.REACT_APP_CANNONICAL}`;
        break;
      
      case 'linkedin':
        href = 'https://www.linkedin.com/shareArticle?mini=true&url=' +
        // $FlowFixMe - cant detect process.env
        `${process.env.REACT_APP_CANNONICAL}` +
        '&title=' + description +
        '&summary=%20&source=';
        break;
      
      case 'twitter':
        href = 'https://twitter.com/intent/tweet?text=' +
        description +
        // $FlowFixMe - cant detect process.env
        '&url=' + `${process.env.REACT_APP_CANNONICAL}`;
        break;
      default: 
        alert('Oops social sharing isnt working at present');
    }

    window.open(
      href,
      '',
      'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=253,width=600'
    );
  }

  handleInfoClick = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault();
    store.dispatch(actions.showModal(true));
  }

  handleHomeClick = () => {
    window.open(process.env.REACT_APP_CANNONICAL);
  }

  render() {
    process.env.REACT_APP_RENDER_DEBUG === 'true' 
      ? console.log('rendering', this) : null;

    //const {} = this.props;
    const { animate } = this.state;

    return (
      <div className={`Social__container ${animate}`}>
        <div className="Social__icons">
          <div className="social__link --info"
            onClick={e => this.handleInfoClick(e)}>
            <a href="">
              <FaInfo></FaInfo>
            </a>
          </div>
          <div className="social__link --twitter"
            onClick={e => this.handleSocialClick(e)}
            data-network="twitter" >
            <a href="">
              <FaTwitter></FaTwitter>
            </a>
          </div>
          <div className="social__link --facebook"
            onClick={e => this.handleSocialClick(e)}
            data-network="facebook" >
            <a href="">
              <FaFacebook></FaFacebook>
            </a>
          </div>
        </div>
        <div className={`Social__logo`}>
          <img src={ctmLogo} alt={`Compare the market logo`} 
            onClick={this.handleHomeClick}/>
        </div>
      </div>
    );
  }
}