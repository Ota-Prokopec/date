import { getPrettyNumber } from '../prettiers/prettyNumber';

export const normalizeMeters = (meters: number) => {
  return `${getPrettyNumber(meters)}m`;
};
