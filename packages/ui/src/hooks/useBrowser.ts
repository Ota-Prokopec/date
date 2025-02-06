'use client'

import { useState } from 'react'

export const useBrowser = () => {
	const [isBrower, setIsBrowser] = useState<boolean>(typeof window !== 'undefined')

	return { isBrower, setIsBrowser } as const
}

export const browser = typeof window !== 'undefined'
