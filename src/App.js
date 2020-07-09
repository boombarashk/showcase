import React from 'react';
import {Header} from "./components/header";
import {Footer} from './components/footer';
import {FilterBlock} from "./components/filter-block";

function App() {
    const TITLE = 'Витрина'
    return (
      <React.Fragment>
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
