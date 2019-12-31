import React, { Component } from 'react';
import jmap from 'jmap.js'
//import MapUIKit from 'jmap-mapui-kit';
import { JibestreamMapContext } from '../context'
import '../App.css';

class CentreMap extends Component {
  mapHolder = React.createRef();

  componentDidMount() {
    try {
      const { activeVenue } = this.context;

      const height = this.mapHolder.current ? this.mapHolder.current.clientHeight : undefined;
      const width = this.mapHolder.current ? this.mapHolder.current.clientWidth : undefined;
  
      this.control = new jmap.JController({
        activeVenue,
        container: '#map', // where the map lives
        forceCanvas: true, // SCALA doesn't support webgl
        height,
        width,
      });
  
      /*
      const boundary = this.control.getShapesInLayer('Mall-Boundary', this.control.currentMap);
      const bounds = this.control.getBoundsFromShapes(boundary);
      this.control.fitBoundsInView(bounds);
      */

     //this.control.setMapTransform(new jmap.Transform({ scale: 0.3 }));
  
      this.control.parseAllMaps();
      this.control.showDefaultMap();

    } catch (err) {
      console.log(err);
    }
  }

  componentWillUnmount() {
    delete this.control;
  }

  render() {
    return (
      <div className="Map-container">
       <p>Parque Arauco</p>
        <div
          id='map'
          ref={this.mapHolder}
          className="Map-holder"
        />
      </div>
    )
  }
}
CentreMap.contextType = JibestreamMapContext;

export default CentreMap;
