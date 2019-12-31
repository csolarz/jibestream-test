import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter as Router } from 'react-router-dom'
import { JibestreamMapContext } from './context'
import { setupMap } from './helpers/map-helper'

const runApp = async () => {
  // Setup map then render if it is ok
  try {
    const activeVenue = await setupMap()

    const MainApp = () => (
      <Router>
        <JibestreamMapContext.Provider value={{ activeVenue }}>
          <App />
        </JibestreamMapContext.Provider>
      </Router>
    );

    ReactDOM.render(<MainApp />, document.getElementById('root'));
  } catch (err) {
    // TODO: Error app here
    console.log('not starting cant setup map', err);
  }
};

runApp()
