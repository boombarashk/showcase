import React from 'react';
import {Header} from "./components/header";
import {Footer} from './components/footer';

function App() {
  return (
      <React.Fragment>
          <Header/>

        <div className="content">
          Some cources
        </div>
          <Footer/>
      </React.Fragment>
  );
}

export default App;
