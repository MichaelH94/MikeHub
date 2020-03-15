import React, { Component } from 'react';
import Buttons from './components/buttons';
import './App.css';

class App extends Component {

render() {
  return ( <div>
    <div className="App">
      <div className="App-header">
        <img className="banner" src="https://i.imgur.com/T9GIfrU.png" alt='banner' width="100%"></img>
        <img className="Hub" src="https://i.imgur.com/CVwMlzv.png" alt="MikeHub"></img>
        <div className="Welcome">
          <h2>Mike1337's web hub - Social media, blogs, etc.</h2>
          </div>
      </div> 
      <Buttons />

    </div>

      </div>
  )
}

}

export default App;
