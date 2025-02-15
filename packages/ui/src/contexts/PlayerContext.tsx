'use client'

import lodash from 'lodash'
import { createContext, useContext, useState, type ReactNode } from 'react'
import { useAudioPlayer, type AudioLoadOptions, type AudioPlayer } from 'react-use-audio-player'
const { omit } = lodash

type LoadingStatus = {
  isLoading: boolean
  src: string | null
}

type LoadFunction = (src: string, options: Omit<AudioLoadOptions, 'onload'>) => void

const Context = createContext<
  | (Omit<AudioPlayer, 'load'> & {
      load: LoadFunction
      loadingStatus: LoadingStatus
    })
  | null
>(null)

export type AudioContextProviderProps = {
  children: ReactNode
}
export const PlayerContextProvier = ({ children }: AudioContextProviderProps) => {
  const player = useAudioPlayer()
  const [loadingStatus, setLoadingStatus] = useState<LoadingStatus>({ isLoading: false, src: null })

  const load: LoadFunction = (src, options) => {
    player.pause()
    setLoadingStatus({ isLoading: true, src: src })

    player.load(src, {
      ...omit(options, ['onload']),
      onload: () => {
        setLoadingStatus({ src, isLoading: false })
      },
    })
  }

  const play = () => {
    player.pause()
    player.play()
  }

  return (
    <Context.Provider value={{ ...omit(player, ['load', 'play']), loadingStatus, load, play }}>
      {children}
    </Context.Provider>
  )
}

export const usePlayerContext = () => {
  const context = useContext(Context)
  if (!context) throw new Error('UsePlayerContext has to be used within PlayerContextProvier')
  return context
}
