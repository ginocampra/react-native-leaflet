import { useCallback } from 'react';
import L from 'leaflet';

export const useMapControls = (map: React.MutableRefObject<L.Map | null>) => {
  const fitBounds = useCallback(() => {
    if (map.current) {
      map.current.fitBounds(map.current.getBounds(), { padding: [50, 50] });
    }
  }, [map]);

  const getCenter = useCallback(() => {
    if (map.current) {
      const center = map.current.getCenter();
      return { lat: center.lat, lng: center.lng };
    }
    return null;
  }, [map]);

  const setCenter = useCallback((lat: number, lng: number, zoom?: number) => {
    if (map.current) {
      map.current.setView([lat, lng], zoom || map.current.getZoom());
    }
  }, [map]);

  const getZoom = useCallback(() => {
    if (map.current) {
      return map.current.getZoom();
    }
    return null;
  }, [map]);

  const setZoom = useCallback((zoom: number) => {
    if (map.current) {
      map.current.setZoom(zoom);
    }
  }, [map]);

  return { fitBounds, getCenter, setCenter, getZoom, setZoom };
};
