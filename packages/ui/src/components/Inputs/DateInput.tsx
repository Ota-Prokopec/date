import { cn } from '@/lib/utils'
import { DatePicker, DateValue, type CalendarDate } from '@heroui/react'
import { getLocalTimeZone, parseDate } from '@internationalized/date'
import type { PothosOptional } from '@repo/ts-types'
import { useState } from 'react'

type DateInputProps = {
  onChange: (date: Date) => void
  value: PothosOptional<Date>
  className?: string
}

export const DateInput = ({ value, onChange, className }: DateInputProps) => {
  const defaultDate = parseDate(new Intl.DateTimeFormat('en-CA').format(value || Date.now()))

  return (
    <DatePicker<CalendarDate>
      inert={false}
      aria-label="DateInput"
      showMonthAndYearPickers
      onChange={(e) => {
        if (!e) throw new Error('Calendar is not accessable')
        const calendarDate = parseDate(e.toString())
        onChange(calendarDate.toDate(getLocalTimeZone()))
      }}
      defaultValue={defaultDate}
      className={cn('', className)}
    />
  )
}
