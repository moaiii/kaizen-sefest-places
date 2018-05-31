import React from 'react';

//components
import Map from '../../Map/Map';

export const FilterMap = ({animate}) => {
  return(
    <div className={`Filters__map ${animate}`}>
      <Map city={''} size={'small'}/>
      <p>The UK's safest places to live</p>
    </div>
  )
}