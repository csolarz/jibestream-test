import React from 'react';
import { Link } from 'react-router-dom';
import CentreMap from '../components/centre-map';

const MapPage = () => (
  <div>
    <CentreMap />
    <Link to="/no-map">Hide Map</Link>
  </div>
)

export default MapPage
