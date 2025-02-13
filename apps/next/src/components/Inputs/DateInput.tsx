import { DatePicker } from '@heroui/react'
import { getLocalTimeZone, parseDate } from '@internationalized/date'
import { cn } from '@repo/ui/ts-lib/lib/utils'
import { useState } from 'react'

type DateInputProps = {
  onChange: (date: Date) => void
  value: Date
  className?: string
}

export const DateInput = ({ value, onChange, className }: DateInputProps) => {
  const [date, setDate] = useState(parseDate(new Intl.DateTimeFormat('en-CA').format(value)))

  return (
    <DatePicker
      inert={false}
      showMonthAndYearPickers
      onChange={(e) => {
        if (!e) throw new Error('Calendar is not accessable')
        setDate(() => {
          const calendarDate = parseDate(e.toString())
          onChange(calendarDate.toDate(getLocalTimeZone()))
          return calendarDate
        })
      }}
      //@ts-ignore
      value={date}
      className={cn('', className)}
      label="Date (controlled)"
    />
  )
}
