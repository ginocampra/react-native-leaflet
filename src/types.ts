import L from 'leaflet';

export interface Position {
  lat: number;
  lng: number;
}

export interface MapOptions {
  center: Position;
  zoom: number;
  zoomControl?: boolean;
  minZoom?: number;
  maxZoom?: number;
  width?: string;
  height?: string;
  draggable?: boolean;
  touchZoom?: boolean;
  scrollWheelZoom?: boolean;
  doubleClickZoom?: boolean;
  boxZoom?: boolean;
  keyboard?: boolean;
  googleview?: boolean;
  [key: string]: Position | string | number | boolean | undefined;
}

export interface Marker {
  position: Position;
  title?: string;
  draggable?: boolean;
  icon?: string;
  popupContent?: string;
  onClick?: (event?: L.LeafletMouseEvent) => void;
}

export interface Polygon {
  positions: Position[];
  color?: string;
  weight?: number;
  opacity?: number;
  fillColor?: string;
  fillOpacity?: number;
  popupContent?: string;
  onClick?: (event?: L.LeafletMouseEvent) => void;
}

export interface Polyline {
  positions: Position[];
  color?: string;
  weight?: number;
  opacity?: number;
  dashArray?: string;
  popupContent?: string;
  onClick?: (event?: L.LeafletMouseEvent) => void;
}

export interface Circle {
  position: Position;
  radius: number;
  color?: string;
  weight?: number;
  opacity?: number;
  fillColor?: string;
  fillOpacity?: number;
  popupContent?: string;
  onClick?: (event?: L.LeafletMouseEvent) => void;
}

export interface Rectangle {
  positions: [Position, Position];
  color?: string;
  weight?: number;
  opacity?: number;
  fillColor?: string;
  fillOpacity?: number;
  popupContent?: string;
  onClick?: (event?: L.LeafletMouseEvent) => void;
}

export interface LeafletMapProps {
  title?: string;
  options: MapOptions;
  initialMarkers?: Marker[];
  initialPolygons?: Polygon[];
  initialPolylines?: Polyline[];
  initialCircles?: Circle[];
  initialRectangles?: Rectangle[];
  onMapReady?: (map: L.Map) => void;
  onMarkerClick?: (marker: Marker, index: number) => void;
  onPolygonClick?: (polygon: Polygon, index: number) => void;
  onPolylineClick?: (polyline: Polyline, index: number) => void;
  onCircleClick?: (circle: Circle, index: number) => void;
  onRectangleClick?: (rectangle: Rectangle, index: number) => void;
  className?: string;
  containerStyle?: React.CSSProperties;
}

export interface LeafletMapRef {
  map: L.Map | null;
  addMarker: (markerData: Marker) => L.Marker | null;
  removeMarker: (index: number) => void;
  fitBoundsToContent: (bounds?: L.LatLngBoundsExpression, options?: L.FitBoundsOptions) => void;
  getCenter: () => L.LatLng;
  setCenter: (center: { lat: number; lng: number }, zoom?: number) => void;
}
