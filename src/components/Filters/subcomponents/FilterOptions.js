
// node_modules
import React from 'react';
import ReactSVG from 'react-svg';

// assets
import hospital from '../../../assets/png/hospital.png';
import crime from '../../../assets/png/crime.png';
import weather from '../../../assets/png/weather.png';
import shop2 from '../../../assets/png/shop2.png';

const icons = [
  crime,
  weather,
  hospital,
  shop2,
]

// component
export const FilterOptions = ({animate, categories, handleCategorySelect, handleSubCategorySelect, handleReset}) => {
  return(
    <div className={`Filters__filters ${animate}`}>
      <div className="Filters__heading">
        <p>Filter by:</p>
        <button className={`filters__button`} 
          onClick={() => handleReset()}>
          <p>RESET</p>
        </button>
      </div>
      
      <div className={`filters__options-container ${animate}`}>
        {categories.map((category, i) => {
          let listSelected = category.selected ? '--selected' : '';
          return(
            <div className={`filters__option`} key={`${i}-filters-option`}>
              <img
                src={icons[i]}
                className={`filters__option-wrapper ${animate}`}/>
              
              <button className={`filters__button`} 
                onClick={() => handleCategorySelect(i)}>
                <p>{category.name}</p>
              </button>
              
              <ul className={`filters__subcategories ${listSelected}`}>
                {category.sub.map((sub, j) => {
                  return <li key={`${j}-${sub.name}-sub`}
                    onClick={() => handleSubCategorySelect(i, j)}>
                    {sub.name}
                  </li>
                })}
              </ul>
            </div>
          )
        })}
      </div>
    </div>
  )
};