import React from 'react';

//components
import Map from '../../Map/Map';

export const FilterMap = ({animate, location}) => {

  let blurb = location === 'uk'
    ? 'The UK\'s safest places to live'
    : 'London\'s safest places to live'

  return(
    <div className={`Filters__map ${animate}`}>
      <Map city={'none'} size={'small'} mod={''}/>
      <p>{blurb}</p>
    </div>
  )
}
