import React, { useEffect, useRef } from 'react';
// import 'leaflet/dist/leaflet.css';
// import * as L from 'leaflet';
import { MapWidget } from './map-widget';

function MapComponent({ zoomLevel }) {
  const containerRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current === null) {
      mapRef.current = new MapWidget(containerRef.current);
    }

    const map = mapRef.current;
    map.setZoom(zoomLevel);
  }, [zoomLevel]);

  return (
    <div
      style={{ width: 600, height: 600 }}
      ref={containerRef}
    />
  );
}

// class MapWidget {
//   constructor(domNode) {
//     this.map = L.map(domNode, {
//       zoomControl: false,
//       doubleClickZoom: false,
//       boxZoom: false,
//       keyboard: false,
//       scrollWheelZoom: false,
//       zoomAnimation: false,
//       touchZoom: false,
//       zoomSnap: 0.1
//     });
//     L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//       maxZoom: 19,
//       attribution: '© OpenStreetMap'
//     }).addTo(this.map);
//     this.map.setView([0, 0], 0);
//   }
//   setZoom(level) {
//     this.map.setZoom(level);
//   }
// }

export default MapComponent;
