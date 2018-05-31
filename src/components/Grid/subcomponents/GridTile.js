import React from 'react';
var format=require('format-number');

export const GridTile = ({animate, dataPoint}) => {

  let key = dataPoint[0].replace('*', '');

  let value = key === 'Av House Price'
    ? format({prefix: '£', suffix: ''})(dataPoint[1])
    : dataPoint[1];

  return(
    <div className={`GridTile ${animate}`}>
      <p>{key}</p>
      <p>{value}</p>
    </div>
  )
}