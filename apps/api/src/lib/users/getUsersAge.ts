import { time } from '@repo/utils/common/time'

export const getUsersAge = (date: Date) => {
  return Math.round(time.convertTime(Date.now() - date.getTime(), 'milliseconds', 'years'))
}
