'use client'

import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { normalizeTime } from '@repo/utils/normalizators/normalizeTime'
import { Column } from '@repo/ui/components/common/Column'
import { Timer } from '../../components/Timer'

const MainPage = () => {
  return <Timer timeLeft={30} wholeTime={60}></Timer>
}

export default MainPage
