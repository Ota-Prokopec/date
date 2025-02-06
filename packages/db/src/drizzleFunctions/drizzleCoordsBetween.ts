import { Coords } from '@repo/ts-types';
import { and, between } from 'drizzle-orm';

type Attribute = any;
type Attributes = { longitude: Attribute; latitude: Attribute };

export const drizzleCoordsBetween = (attributes: Attributes, coords: Coords, range: number) => {
  const latitude = {
    min: coords.lat - range,
    max: coords.lat + range,
  };
  const longitude = {
    min: coords.lng - range,
    max: coords.lng + range,
  };

  return and(
    between(attributes.latitude, latitude.min, latitude.max),
    between(attributes.longitude, longitude.min, longitude.max)
  );
};
