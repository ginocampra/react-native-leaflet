# Usage Examples

## Example 1: Simple Map

```jsx
import React from 'react';
import { LeafletMap } from 'react-native-leaflet';

export default function SimpleMapExample() {
  const mapOptions = {
    center: {
      lat: -23.347509,
      lng: -47.847536
    },
    zoom: 15,
    height: '500px'
  };

  return (
    <LeafletMap
      title="Simple Map"
      options={mapOptions}
    />
  );
}
```

## Example 2: Interactive Markers

```jsx
import React, { useState } from 'react';
import { LeafletMap } from 'react-native-leaflet';

export default function InteractiveMarkersExample() {
  const [selectedMarker, setSelectedMarker] = useState(null);

  const mapOptions = {
    center: {
      lat: -23.347509,
      lng: -47.847536
    },
    zoom: 18
  };

  const markers = [
    {
      position: { lat: -23.347509, lng: -47.847536 },
      title: 'Point A',
      popupContent: '<strong>Point A</strong><p>Important location</p>'
    },
    {
      position: { lat: -23.348000, lng: -47.848000 },
      title: 'Point B',
      popupContent: '<strong>Point B</strong><p>Another location</p>'
    }
  ];

  return (
    <div>
      <LeafletMap
        options={mapOptions}
        initialMarkers={markers}
        onMarkerClick={(marker, index) => setSelectedMarker(index)}
      />
      {selectedMarker !== null && (
        <p>Selected marker: {selectedMarker}</p>
      )}
    </div>
  );
}
```

## Example 3: Complete Map with All Shapes

```jsx
import React from 'react';
import { LeafletMap } from 'react-native-leaflet';

export default function CompleteMapExample() {
  const mapOptions = {
    center: {
      lat: -23.347509,
      lng: -47.847536
    },
    zoom: 16,
    height: '700px',
    zoomControl: true,
    googleview: true
  };

  const markers = [
    {
      position: { lat: -23.347509, lng: -47.847536 },
      title: 'Center',
      draggable: false
    }
  ];

  const polygons = [
    {
      positions: [
        { lat: -23.346, lng: -47.848 },
        { lat: -23.346, lng: -47.847 },
        { lat: -23.347, lng: -47.847 },
        { lat: -23.347, lng: -47.848 }
      ],
      color: '#3388ff',
      fillOpacity: 0.2,
      popupContent: 'Area of Interest'
    }
  ];

  const polylines = [
    {
      positions: [
        { lat: -23.346, lng: -47.848 },
        { lat: -23.349, lng: -47.846 },
        { lat: -23.351, lng: -47.845 }
      ],
      color: '#ff7800',
      weight: 3
    }
  ];

  const circles = [
    {
      position: { lat: -23.348, lng: -47.849 },
      radius: 150,
      color: '#00ff00',
      fillOpacity: 0.3
    }
  ];

  const rectangles = [
    {
      positions: [
        { lat: -23.345, lng: -47.846 },
        { lat: -23.348, lng: -47.845 }
      ],
      color: '#ff0000',
      fillOpacity: 0.2
    }
  ];

  return (
    <LeafletMap
      title="Complete Map"
      options={mapOptions}
      initialMarkers={markers}
      initialPolygons={polygons}
      initialPolylines={polylines}
      initialCircles={circles}
      initialRectangles={rectangles}
      onMarkerClick={(marker, idx) => console.log('Marker:', idx)}
      onPolygonClick={(polygon, idx) => console.log('Polygon:', idx)}
      onPolylineClick={(polyline, idx) => console.log('Polyline:', idx)}
      onCircleClick={(circle, idx) => console.log('Circle:', idx)}
      onRectangleClick={(rectangle, idx) => console.log('Rectangle:', idx)}
    />
  );
}
```

## Example 4: Programmatic Control

```jsx
import React, { useRef } from 'react';
import { LeafletMap } from 'react-native-leaflet';

export default function ProgrammaticControlExample() {
  const mapRef = useRef();

  const mapOptions = {
    center: {
      lat: -23.347509,
      lng: -47.847536
    },
    zoom: 15
  };

  const handleCenter = () => {
    mapRef.current?.setCenter(
      { lat: -23.5505, lng: -46.6333 },
      13
    );
  };

  const handleZoomIn = () => {
    const map = mapRef.current?.map;
    if (map) map.zoomIn();
  };

  const handleGetInfo = () => {
    const center = mapRef.current?.getCenter();
    console.log('Current center:', center);
  };

  return (
    <div>
      <div style={{ marginBottom: '10px' }}>
        <button onClick={handleCenter}>Go to São Paulo</button>
        <button onClick={handleZoomIn}>Zoom In</button>
        <button onClick={handleGetInfo}>See Information</button>
      </div>
      <LeafletMap ref={mapRef} options={mapOptions} />
    </div>
  );
}
```

## Example 5: With Custom Styles

```jsx
import React from 'react';
import { LeafletMap } from 'react-native-leaflet';

export default function StyledMapExample() {
  const mapOptions = {
    center: { lat: -23.347509, lng: -47.847536 },
    zoom: 15,
    height: '600px'
  };

  const containerStyle = {
    border: '2px solid #3388ff',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden'
  };

  return (
    <LeafletMap
      title="Styled Map"
      options={mapOptions}
      containerStyle={containerStyle}
      className="custom-map-class"
    />
  );
}
```
