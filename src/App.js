import React from 'react';
import {Header} from "./components/header";
import {Footer} from './components/footer';
import {FilterBlock} from "./components/filter-block";
import GlobalFonts from './fonts/fonts';

function App() {
    const TITLE = 'Витрина'
    return (
      <React.Fragment>
          <GlobalFonts/>
          <Header/>

          <div className="content">
            <div className="content-wrapper">
              <h1>{ TITLE }</h1>

                <FilterBlock/>


              Some cources
            </div>
          </div>

          <Footer/>
      </React.Fragment>
  );
}

export default App;
