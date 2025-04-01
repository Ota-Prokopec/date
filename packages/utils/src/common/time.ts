type TimeType = 'milliseconds' | 'seconds' | 'minutes' | 'hours' | 'days' | 'years'

const timeTable = new Map<TimeType, number>([
  ['milliseconds', 1],
  ['seconds', 1000],
  ['minutes', 60],
  ['hours', 60],
  ['days', 24],
  ['years', 365],
])

const convertTime = (time: number, from: TimeType, to: TimeType) => {
  const indexInTimeTableFrom = Array.from(timeTable.keys()).indexOf(from)
  const indexInTimeTableTo = Array.from(timeTable.keys()).indexOf(to)

  const arrayOfDifference = Array.from(timeTable.values()).slice(
    ...(indexInTimeTableFrom < indexInTimeTableTo
      ? [indexInTimeTableFrom + 1, indexInTimeTableTo + 1]
      : [indexInTimeTableTo + 1, indexInTimeTableFrom + 1])
  )

  const difference = arrayOfDifference.reduce((prev, current) => prev * current, 1)

  return indexInTimeTableFrom < indexInTimeTableTo ? time / difference : time * difference
}

export const time = { convertTime }
