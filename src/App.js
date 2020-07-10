import React from 'react';
import {Header} from "./components/header";
import {Footer} from './components/footer';
import {FilterBlock} from "./components/filter-block";
import GlobalFonts from './fonts/fonts';
import {CourseList} from "./components/course-list";

function App() {
    const TITLE = 'Витрина'
    return (
      <React.Fragment>
          <GlobalFonts/>
          <Header/>

          <div className="content">
            <div className="content-wrapper">
              <h1 className="content-header">{ TITLE }</h1>

                <FilterBlock/>

                <CourseList/>

            </div>
          </div>

          <Footer/>
      </React.Fragment>
  );
}

export default App;
