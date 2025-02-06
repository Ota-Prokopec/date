import { useMemo, useRef, type EffectCallback, useEffect } from 'react';
import { dequal } from 'dequal';

declare type UseEffectReturn = ReturnType<typeof useEffect>;
declare type UseEffectParams = Parameters<typeof useEffect>;
declare type DependencyList = UseEffectParams[1];

function checkDeps(deps: DependencyList) {
  if (!deps || !deps.length) {
    throw new Error('useDeepCompareEffect should not be used with no dependencies. Use React.useEffect instead.');
  }

  if (deps.every(isPrimitive)) {
    throw new Error(
      'useDeepCompareEffect should not be used with dependencies that are all primitive values. Use React.useEffect instead.'
    );
  }
}

function isPrimitive(val: unknown) {
  return val == null || /^[sbn]/.test(typeof val);
}
/**
 * @param value the value to be memoized (usually a dependency list)
 * @returns a momoized version of the value as long as it remains deeply equal
 */

function useDeepCompareMemoize<T>(value: T): T {
  var ref = useRef(value);
  var signalRef = useRef(0);

  if (!dequal(value, ref.current)) {
    ref.current = value;
    signalRef.current += 1;
  } // eslint-disable-next-line react-hooks/exhaustive-deps

  return useMemo(
    function () {
      return ref.current;
    },
    [signalRef.current]
  );
}

export function useDeepCompareEffect(callback: EffectCallback, dependencies: DependencyList): UseEffectReturn {
  if (process.env.NODE_ENV !== 'production') {
    checkDeps(dependencies);
  } // eslint-disable-next-line react-hooks/exhaustive-deps

  return useEffect(callback, useDeepCompareMemoize(dependencies));
}
