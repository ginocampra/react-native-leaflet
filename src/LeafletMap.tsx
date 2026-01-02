import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import { LeafletMapProps, LeafletMapRef } from './types';

// Fix for default markers in Leaflet
delete (L.Icon.Default.prototype as unknown as Record<string, unknown>)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

export const LeafletMap = React.forwardRef<LeafletMapRef, LeafletMapProps>(
  (
    {
      title,
      options,
      initialMarkers = [],
      initialPolygons = [],
      initialPolylines = [],
      initialCircles = [],
      initialRectangles = [],
      onMapReady,
      onMarkerClick,
      onPolygonClick,
      onPolylineClick,
      onCircleClick,
      onRectangleClick,
      className = '',
      containerStyle = {},
    },
    ref
  ) => {
    const mapContainer = useRef<HTMLDivElement>(null);
    const map = useRef<L.Map | null>(null);
    const layers = useRef<{
      markers: L.Marker[];
      polygons: L.Polygon[];
      polylines: L.Polyline[];
      circles: L.Circle[];
      rectangles: L.Rectangle[];
    }>({
      markers: [],
      polygons: [],
      polylines: [],
      circles: [],
      rectangles: [],
    });

    // Initialize map
    useEffect(() => {
      if (!mapContainer.current) return;

      const width = options.width || '100%';
      const height = options.height || '600px';

      mapContainer.current.style.width = width;
      mapContainer.current.style.height = height;

      map.current = L.map(mapContainer.current, {
        center: [options.center.lat, options.center.lng],
        zoom: options.zoom,
        zoomControl: options.zoomControl !== false,
        minZoom: options.minZoom,
        maxZoom: options.maxZoom,
        dragging: options.draggable !== false,
        touchZoom: options.touchZoom !== false,
        scrollWheelZoom: options.scrollWheelZoom !== false,
        doubleClickZoom: options.doubleClickZoom !== false,
        boxZoom: options.boxZoom !== false,
        keyboard: options.keyboard !== false,
      });

      // Add tile layer
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap contributors',
      }).addTo(map.current);

      // Add Google Street View option if enabled
      if (options.googleview) {
        L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}', {
          maxZoom: 20,
          subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
          attribution: 'Google',
        }).addTo(map.current);
      }

      if (onMapReady && map.current) {
        onMapReady(map.current);
      }

      return () => {
        if (map.current) {
          map.current.remove();
          map.current = null;
        }
      };
    }, []);

    // Add markers
    useEffect(() => {
      if (!map.current) return;

      // Clear existing markers
      layers.current.markers.forEach((marker) => marker.remove());
      layers.current.markers = [];

      // Add new markers
      initialMarkers.forEach((markerData, index) => {
        const marker = L.marker([markerData.position.lat, markerData.position.lng], {
          draggable: markerData.draggable || false,
        }).addTo(map.current!);

        if (markerData.popupContent) {
          marker.bindPopup(markerData.popupContent);
        }

        if (markerData.title) {
          marker.bindTooltip(markerData.title);
        }

        marker.on('click', () => {
          if (onMarkerClick) {
            onMarkerClick(markerData, index);
          }
          if (markerData.onClick) {
            markerData.onClick();
          }
        });

        layers.current.markers.push(marker);
      });
    }, [initialMarkers, onMarkerClick]);

    // Add polygons
    useEffect(() => {
      if (!map.current) return;

      layers.current.polygons.forEach((polygon) => polygon.remove());
      layers.current.polygons = [];

      initialPolygons.forEach((polygonData, index) => {
        const latLngs = polygonData.positions.map((pos) => [pos.lat, pos.lng] as L.LatLngTuple);

        const polygon = L.polygon(latLngs, {
          color: polygonData.color || '#3388ff',
          weight: polygonData.weight || 2,
          opacity: polygonData.opacity || 0.8,
          fillColor: polygonData.fillColor || '#3388ff',
          fillOpacity: polygonData.fillOpacity || 0.2,
        }).addTo(map.current!);

        if (polygonData.popupContent) {
          polygon.bindPopup(polygonData.popupContent);
        }

        polygon.on('click', () => {
          if (onPolygonClick) {
            onPolygonClick(polygonData, index);
          }
          if (polygonData.onClick) {
            polygonData.onClick();
          }
        });

        layers.current.polygons.push(polygon);
      });
    }, [initialPolygons, onPolygonClick]);

    // Add polylines
    useEffect(() => {
      if (!map.current) return;

      layers.current.polylines.forEach((polyline) => polyline.remove());
      layers.current.polylines = [];

      initialPolylines.forEach((polylineData, index) => {
        const latLngs = polylineData.positions.map((pos) => [pos.lat, pos.lng] as L.LatLngTuple);

        const polyline = L.polyline(latLngs, {
          color: polylineData.color || '#3388ff',
          weight: polylineData.weight || 2,
          opacity: polylineData.opacity || 0.8,
          dashArray: polylineData.dashArray,
        }).addTo(map.current!);

        if (polylineData.popupContent) {
          polyline.bindPopup(polylineData.popupContent);
        }

        polyline.on('click', () => {
          if (onPolylineClick) {
            onPolylineClick(polylineData, index);
          }
          if (polylineData.onClick) {
            polylineData.onClick();
          }
        });

        layers.current.polylines.push(polyline);
      });
    }, [initialPolylines, onPolylineClick]);

    // Add circles
    useEffect(() => {
      if (!map.current) return;

      layers.current.circles.forEach((circle) => circle.remove());
      layers.current.circles = [];

      initialCircles.forEach((circleData, index) => {
        const circle = L.circle([circleData.position.lat, circleData.position.lng], {
          radius: circleData.radius || 100,
          color: circleData.color || '#3388ff',
          weight: circleData.weight || 2,
          opacity: circleData.opacity || 0.8,
          fillColor: circleData.fillColor || '#3388ff',
          fillOpacity: circleData.fillOpacity || 0.2,
        }).addTo(map.current!);

        if (circleData.popupContent) {
          circle.bindPopup(circleData.popupContent);
        }

        circle.on('click', () => {
          if (onCircleClick) {
            onCircleClick(circleData, index);
          }
          if (circleData.onClick) {
            circleData.onClick();
          }
        });

        layers.current.circles.push(circle);
      });
    }, [initialCircles, onCircleClick]);

    // Add rectangles
    useEffect(() => {
      if (!map.current) return;

      layers.current.rectangles.forEach((rectangle) => rectangle.remove());
      layers.current.rectangles = [];

      initialRectangles.forEach((rectangleData, index) => {
        const bounds: L.LatLngBoundsLiteral = [
          [rectangleData.positions[0].lat, rectangleData.positions[0].lng],
          [rectangleData.positions[1].lat, rectangleData.positions[1].lng],
        ];

        const rectangle = L.rectangle(bounds, {
          color: rectangleData.color || '#3388ff',
          weight: rectangleData.weight || 2,
          opacity: rectangleData.opacity || 0.8,
          fillColor: rectangleData.fillColor || '#3388ff',
          fillOpacity: rectangleData.fillOpacity || 0.2,
        }).addTo(map.current!);

        if (rectangleData.popupContent) {
          rectangle.bindPopup(rectangleData.popupContent);
        }

        rectangle.on('click', () => {
          if (onRectangleClick) {
            onRectangleClick(rectangleData, index);
          }
          if (rectangleData.onClick) {
            rectangleData.onClick();
          }
        });

        layers.current.rectangles.push(rectangle);
      });
    }, [initialRectangles, onRectangleClick]);

    React.useImperativeHandle(ref, () => ({
      map: map.current,
      addMarker: (markerData: typeof initialMarkers[number]) => {
        if (!map.current || !markerData) return null;
        const m = L.marker([markerData.position.lat, markerData.position.lng], {
          draggable: markerData.draggable || false,
        }).addTo(map.current);
        layers.current.markers.push(m);
        return m;
      },
      removeMarker: (index: number) => {
        if (layers.current.markers[index]) {
          layers.current.markers[index].remove();
          layers.current.markers.splice(index, 1);
        }
      },
      fitBoundsToContent: (bounds?: L.LatLngBoundsExpression, options?: L.FitBoundsOptions) => {
        if (!map.current) return;
        if (bounds) {
          map.current.fitBounds(bounds, options);
          return;
        }
        const allLayers = [
          ...layers.current.markers,
          ...layers.current.polygons,
          ...layers.current.polylines,
          ...layers.current.circles,
          ...layers.current.rectangles,
        ];

        if (allLayers.length > 0) {
          const group = L.featureGroup(allLayers);
          map.current.fitBounds(group.getBounds(), { padding: [50, 50] });
        }
      },
      getCenter: () => map.current?.getCenter() || new L.LatLng(0, 0),
      setCenter: (center: { lat: number; lng: number }, zoom?: number) => {
        if (map.current) {
          map.current.setView([center.lat, center.lng], zoom || map.current.getZoom());
        }
      },
    }));

    return (
      <div ref={mapContainer} className={className} style={{ 
        width: options.width || '100%', 
        height: options.height || '600px',
        ...containerStyle 
      }} />
    );
  }
);

LeafletMap.displayName = 'LeafletMap';

export default LeafletMap;
