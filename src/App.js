import React, { useReducer, useState } from 'react';
import {Header} from "./components/header";
import {Footer} from './components/footer';
import {FilterBlock} from "./components/filter-block";
import GlobalFonts from './fonts/fonts';
import {CourseList} from "./components/course-list";
import {filterReducer as reducer,initialFilter } from './components/filter-constants'
import {TogglerPrice} from "./components/togglerPrice";

function App() {
    const TITLE = 'Витрина'
    const [state, dispatch] = useReducer(reducer, initialFilter)
    const [stateViewPriceBonus, setViewPriceBonus] = useState(false)
    const [stateMenuBurger, toggleMenuBurger] = useState(false)

    return (
      <>
        <GlobalFonts/>
        <div className="flexbox-wrapper reset-helper" onClick={(event) => resetHandler(event, stateMenuBurger, toggleMenuBurger)}>

          <Header
              stateMenuBurger={ stateMenuBurger }
              toggleMenuBurger={ () => toggleMenuBurger(!stateMenuBurger) }/>

          <div className="content">
              <div className="content-wrapper">
                  <h1 className="content-header">{ TITLE }</h1>

                  <FilterBlock
                      onChangeFilter={ payload => dispatch({type: 'filter', payload}) }
                      onChangeSearch={ payload => dispatch({type: 'search', payload}) } />

                  <TogglerPrice
                      onToggleView = { () => setViewPriceBonus(!stateViewPriceBonus) }
                      stateViewPriceBonus = { stateViewPriceBonus } />

                  <CourseList
                      stateFilter={ state }
                      stateViewPriceBonus = { stateViewPriceBonus }
                  />
              </div>
          </div>

          <Footer/>
        </div>
      </>
  );
}

function resetHandler(event, stateMenuBurger, toggleMenuBurger) {
    if (stateMenuBurger && !event.target.classList.contains('menu-burger')) {
        toggleMenuBurger(false)
    }
}

export default App;
