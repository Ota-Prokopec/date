import { Coords } from '@repo/ts-types';
import maplibregl, { Marker } from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { forwardRef, useEffect, useId, useRef } from 'react';
import { cn } from '../../lib/utils';

export type MapType = maplibregl.Map;

type MapComponentProps = {
  className?: string;
  zoom?: number;
  coords?: Coords | null;
  children?: Marker[];
  onZoom?: (zoom: number) => void;
  onLoad?: (map: maplibregl.Map) => void;
  style?: string;
};

const MapComponent = forwardRef<MapType, MapComponentProps>(
  ({ className, zoom = 14, coords, children: markers, onZoom, onLoad, style }, ref) => {
    const mapRef = useRef<maplibregl.Map | null>(null);
    const elementId = useId();

    useEffect(() => {
      if (coords) mapRef.current?.setCenter(coords);
    }, [coords]);

    useEffect(() => {
      mapRef.current = new maplibregl.Map({
        container: elementId, // container id
        center: coords ?? undefined,
        zoom: zoom, // starting zoom
        style,
      });

      if (!mapRef.current) throw new Error('Map was not initialized');

      mapRef.current.on('zoom', (e) => {
        if (!mapRef.current) throw new Error('Map was not initialized');
        if (onZoom) onZoom(mapRef.current.getZoom());
      });

      if (onLoad) onLoad(mapRef.current);
    }, []);

    useEffect(() => {
      if (!mapRef.current) return () => {};
      markers?.map((marker) => {
        if (mapRef.current) {
          marker.addTo(mapRef.current);
        }
      });
      return () => {
        markers?.map((marker) => {
          marker.remove();
        });
      };
    }, [markers]);

    return <div className={cn('w-full !h-full', className)} id={elementId}></div>;
  }
);

export { MapComponent as Map };
