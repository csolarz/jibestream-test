import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import MapPage from './pages/map-page';
import NoMapPage from './pages/no-map-page';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Jibestream test!!</p>
        </header>
        <Route exact path="/" component={MapPage} />
        <Route path="/no-map" component={NoMapPage} />
      </div>
    );
  }
}

export default App;
