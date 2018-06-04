// @flow
// node_modules
import React, { Component } from 'react';

// redux
import store from '../../store';
import {connect} from 'react-redux';
import * as actions from '../Modal/Modal.action';

// sub-components
import FaClose from 'react-icons/lib/fa/close';

type Props = {
  isOpen: boolean
};

type State = {};

export class Modal extends Component<Props, State> {
  constructor() {
    super();

    this.state = {};
  }

  closeModal = () => {
    store.dispatch(actions.setModalVisibility(false));
  }

  render() {
    const { isOpen } = this.props;
    // const { } = this.state;

    let animate = isOpen ? '--animate' : '';

    let content = <div className={`Modal__content ${animate}`}>
      <h1>Information</h1>
      <hr />
      <div className="modal__content">
        <p>Data for population and housing developments were taken from publicly sourced data.</p>
        <p>Property statistics were taken from Right Move. All average property prices are as at December 2017.</p>
        <p>Data was then weighted to create an index score.</p>
        <p>Data gathered on 07/03/18.</p>
        <h2>Sources</h2>
        <ul>
          <li>
            <a href="http://landregistry.data.gov.uk/" target="_blank" rel="noopener noreferrer">
              landregistry.data.gov.uk
            </a>
          </li>
          <li>
            <a href="http://ons.gov.uk/" target="_blank" rel="noopener noreferrer">
              ons.gov.uk
            </a>
          </li>
          <li>
            <a href="http://yelp.com/" target="_blank" rel="noopener noreferrer">
              yelp.com
            </a>
          </li>
          <li>
            <a href="http://rightmove.co.uk/" target="_blank" rel="noopener noreferrer">
              rightmove.co.uk
            </a>
          </li>
          <li>
            <a href="http://telegraph.co.uk/" target="_blank" rel="noopener noreferrer">
              telegraph.co.uk
            </a>
          </li>
          <li>
            <a href="http://lendinvest.com/" target="_blank" rel="noopener noreferrer">
              lendinvest.com
            </a>
          </li>
        </ul>
      </div>
    </div>

    return (
      <div className={`Modal ${animate}`}>
        <div className={`modal__close-container ${animate}`}>
            <FaClose onClick={() => this.closeModal()}/>
          </div>
          {content}
      </div>
    );
  }
}

const storeToProps = (store) => {
  return {
    isOpen: store.ModalReducer.isOpen
  }
}

export default connect(storeToProps)(Modal);