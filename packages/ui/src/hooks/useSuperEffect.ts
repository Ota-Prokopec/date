'use client'

import { useEffect } from 'react'
import { useMount } from './useMount'
import useDeepCompareEffect from 'use-deep-compare-effect'

type Options = {
  mountedOnly?: boolean
  deepCompare?: boolean
  disable?: boolean
  timeout?: number
}

export const useSuperEffect = (
  callback: () => void,
  dependencies: unknown[],
  options?: Options
) => {
  const { isMounted } = useMount()
  const superEffect = options?.deepCompare ? useDeepCompareEffect : useEffect

  superEffect(() => {
    if ((options?.mountedOnly && !isMounted) || options?.disable) return () => {}
    if (options?.timeout) setTimeout(callback, options.timeout)
    else callback()
  }, dependencies)
}
