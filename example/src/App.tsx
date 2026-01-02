import { useRef } from 'react';
import { LeafletMap } from 'react-native-leaflet';
import type { LeafletMapRef } from 'react-native-leaflet';
import './App.css';

function App() {
  const mapRef = useRef<LeafletMapRef>(null);

  return (
    <div className="app-container">
      <LeafletMap
        ref={mapRef}
        className="map"
        containerStyle={{ width: '100%', height: '100%' }}
        options={{
          center: {
            lat: -23.347509137997484,
            lng: -47.84753617004771,
          },
          zoom: 18,
          minZoom: 13,
          maxZoom: 18,
          zoomControl: true,
          width: '100%',
          height: '100%',
        }}
        initialMarkers={[
          {
            position: {
              lat: -23.347509137997484,
              lng: -47.84753617004771,
            },
            draggable: false,
            title: 'Tatuí - SP',
          },
        ]}
        initialPolygons={[
          {
            positions: [
              { lat: -23.34606370264136, lng: -47.84818410873414 },
              { lat: -23.34575341324051, lng: -47.84759938716888 },
              { lat: -23.34615728184211, lng: -47.84729361534119 },
              { lat: -23.34651189716213, lng: -47.84792125225068 },
            ],
            color: '#3388ff',
            weight: 2,
            fillColor: '#3388ff',
            fillOpacity: 0.2,
          },
        ]}
        initialPolylines={[
          {
            positions: [
              { lat: -23.348914298657980, lng: -47.850147485733040 },
              { lat: -23.347850469110245, lng: -47.848109006881714 },
              { lat: -23.349209805352476, lng: -47.847293615341194 },
              { lat: -23.347781516900888, lng: -47.844675779342660 },
            ],
            color: '#ff0000',
            weight: 3,
          },
        ]}
        initialRectangles={[
          {
            positions: [
              { lat: -23.347683013682527, lng: -47.85067319869996 },
              { lat: -23.346727528670904, lng: -47.84879565238953 },
            ],
            color: '#ff9800',
            weight: 2,
            fillColor: '#ff9800',
            fillOpacity: 0.2,
          },
        ]}
        initialCircles={[
          {
            position: {
              lat: -23.346569922234977,
              lng: -47.84376382827759,
            },
            radius: 80.68230575309364,
            color: '#4caf50',
            weight: 2,
            fillColor: '#4caf50',
            fillOpacity: 0.2,
          },
        ]}
        onMapReady={(map) => {
          console.log('Map ready!', map);
        }}
        onMarkerClick={(marker, index) => {
          console.log(`Marker ${index} clicked:`, marker);
        }}
      />
    </div>
  );
}

export default App;
