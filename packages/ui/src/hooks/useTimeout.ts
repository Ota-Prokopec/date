'use client'

import { useState } from 'react'

export const useTimeout = () => {
	const [isInTime, setIsInTime] = useState<boolean>(false)

	const set = (time: number) => {
		setIsInTime(true)

		const timeout = setTimeout(() => {
			setIsInTime(false)
		}, time)

		return { clear: () => clearTimeout(timeout) }
	}

	return {
		setTimeout: set,
		isInTime,
	}
}
