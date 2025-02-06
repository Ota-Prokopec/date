'use client'

import { useEffect, useState } from 'react'

export type EventWithPrompt = Event & {
	prompt: () => void
	userChoice: { outcome: 'dismiss' | 'accepted' }
}

export const usePwaInstaller = () => {
	const [isInstalled, setIsInstalled] = useState<boolean | 'loading'>('loading')
	const [prompt, setPrompt] = useState<EventWithPrompt | null>(null)

	useEffect(() => {
		const callback = (e: Event) => {
			setIsInstalled(false)
			e.preventDefault()
			setPrompt(e as EventWithPrompt)
		}
		window.addEventListener('beforeinstallprompt', callback)
		return () => window.removeEventListener('beforeinstallprompt', callback)
	}, [])

	useEffect(() => {
		const callback = () => {
			setIsInstalled(true)
		}
		window.addEventListener('appinstalled', callback)
		return () => window.removeEventListener('appinstalled', callback)
	}, [])

	const install = async () => {
		if (!prompt)
			throw new Error(
				'Install prompt is not defined - application is install already or you are doing something wrong',
			)

		prompt.prompt()

		return await prompt.userChoice
	}

	return {
		install,
		isInstalled,
	}
}
