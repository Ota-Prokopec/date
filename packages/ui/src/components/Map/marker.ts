import { Coords } from '@repo/ts-types';
import { convertJSXtoHTML } from '@repo/utils/react/jsxToHtml';
import maplibregl from 'maplibre-gl';
import type { JSX } from 'react';

type MapMarkerProps = {
  coords: Coords;
  element: JSX.Element;
  zoom?: number;
  className?: string;
};

export const createMapMarker = ({ coords, element, zoom, className }: MapMarkerProps) => {
  const renderingElement = convertJSXtoHTML(element);

  const marker = new maplibregl.Marker({
    element: renderingElement,
  });

  return marker.setLngLat(coords);
};
