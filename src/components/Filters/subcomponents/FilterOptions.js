
// node_modules
import React from 'react';
import ReactSVG from 'react-svg';

// assets
import hospital from '../../../assets/png/hospital.png';
import shop3 from '../../../assets/png/shop3.png';
import shop1 from '../../../assets/png/shop1.png';
import shop2 from '../../../assets/png/shop2.png';

const icons = [
  shop2,
  shop1,
  hospital,
  shop3,
]

// component
export const FilterOptions = ({animate, categories, handleCategorySelect, handleSubCategorySelect}) => {
  return(
    <div className={`Filters__filters ${animate}`}>
      <p>Filter by:</p>
      
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