import React from 'react';
import { Link } from 'react-router-dom';

const NoMapPage = () => (
  <div>
    <p>No Map here</p>
    <div className="Map-container" />
    <Link to="/">Show Map</Link>
  </div>
);

export default NoMapPage;
