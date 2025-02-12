import { useEffect, useState } from 'react';
import { Coords } from '@repo/ts-types';

type UseGeolocationProps = PositionOptions;

const transformToCoords = (geolocationResult: GeolocationPosition): Coords => ({
  lat: geolocationResult.coords.latitude,
  lng: geolocationResult.coords.longitude,
});

export const getGeolocation = (options: UseGeolocationProps = { enableHighAccuracy: true }) => {
  return new Promise<Coords>((res, rej) => {
    navigator.geolocation.getCurrentPosition(
      (position) => res(transformToCoords(position)),
      rej,
      options
    );
  });
};

export const useGeolocation = (options: UseGeolocationProps = { enableHighAccuracy: true }) => {
  const [coords, setCoords] = useState<Coords | null>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCoords(transformToCoords(position));
      },
      (err) => {
        throw err;
      },
      options
    );
  }, []);

  useEffect(() => {
    const geolocationWatchId = navigator.geolocation.watchPosition(
      (position) => {
        setCoords(transformToCoords(position));
      },
      (err) => {
        throw err;
      },
      options
    );

    return () => navigator.geolocation.clearWatch(geolocationWatchId);
  }, []);

  return { coords };
};
