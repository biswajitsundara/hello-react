import React, { useState } from 'react'
import MapComponent from './MapComponent';

function MapApp() {
    const [zoomLevel, setZoomLevel] = useState(0);
    return (
      <>
        Zoom level: {zoomLevel}x
        <button onClick={() => setZoomLevel(zoomLevel + 1)}>+</button>
        <button onClick={() => setZoomLevel(zoomLevel - 1)}>-</button>
        <hr />
        <MapComponent zoomLevel={zoomLevel} />
      </>
    );
}

export default MapApp
