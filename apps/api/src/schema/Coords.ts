import { builder } from '@/builder';
import { CoordsPothosType } from './PothosSchemaTypes';

export const CoordsRef = builder.objectRef<CoordsPothosType>('coords').implement({
  fields: (t) => ({
    lng: t.exposeFloat('lng', { nullable: false }),
    lat: t.exposeFloat('lat', { nullable: false }),
  }),
});
