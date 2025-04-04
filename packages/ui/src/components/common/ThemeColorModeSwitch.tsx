'use client'
import { type ReactNode } from 'react'
import { FaMoon } from 'react-icons/fa'
import { MdSunny } from 'react-icons/md'
import { MultipleIcons } from '../Icon/MultipleIcons'
import type { ColorTheme } from '@repo/ts-types'
import { cookieStorage } from '@repo/cookies'

export type ThemeColorModeSwitchProps = {}

export const ThemeColorModeSwitch = () => {
  const [colorTheme, setColorTheme] = cookieStorage.useStorageValue('colorTheme')

  const icons: { icon: ReactNode; key: NonNullable<ColorTheme> }[] = [
    { icon: <MdSunny className="w-full h-full"></MdSunny>, key: 'light' },
    { icon: <FaMoon className="fill-white w-full h-full"></FaMoon>, key: 'dark' },
  ]

  return (
    <MultipleIcons
      className="w-6 h-6 m-2"
      onClick={(state) => setColorTheme(state)}
      initialVisibleIconIndex={colorTheme === 'dark' ? 'dark' : 'light'}
      items={icons}
    ></MultipleIcons>
  )
}
