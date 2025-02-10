import { builder } from '@/builder';
import { Coords } from '@repo/ts-types';
import { CoordsType } from './PothosSchemaTypes';

export const CoordsRef = builder.objectRef<CoordsType>('coords').implement({
  fields: (t) => ({
    lng: t.exposeFloat('lng', { nullable: false }),
    lat: t.exposeFloat('lat', { nullable: false }),
  }),
});
