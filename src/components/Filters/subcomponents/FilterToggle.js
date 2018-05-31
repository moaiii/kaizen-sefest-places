// node_modules
import React from 'react';

export const FilterToggle = ({animate, togglePosition, handleToggle}) => (
  <div className={`Filters__toggle ${animate}`} 
    onClick={() => handleToggle()}> 
    <p>UK</p>
    <div className={`switch --${togglePosition}`}>
      <div className={`switch-indicator --${togglePosition}`}></div>
      <div className={`switch-track`}></div>
    </div>
    <p>London</p>
  </div>
);