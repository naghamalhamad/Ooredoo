import { useState } from 'react'
import Icon from '../icons/Icon'
import { MONTH_LONG, WEEKDAY_HEADERS, formatHeaderDate } from './dateUtils'

interface DatePickerModalProps {
  initialDate: Date
  onCancel: () => void
  onConfirm: (date: Date) => void
}

export default function DatePickerModal({ initialDate, onCancel, onConfirm }: DatePickerModalProps) {
  const [viewYear, setViewYear] = useState(initialDate.getFullYear())
  const [viewMonth, setViewMonth] = useState(initialDate.getMonth())
  const [selected, setSelected] = useState(initialDate)

  const firstDayIndex = (new Date(viewYear, viewMonth, 1).getDay() + 6) % 7
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate()
  const cells: (number | null)[] = [
    ...Array(firstDayIndex).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ]

  const goPrevMonth = () => {
    if (viewMonth === 0) {
      setViewMonth(11)
      setViewYear(viewYear - 1)
    } else {
      setViewMonth(viewMonth - 1)
    }
  }

  const goNextMonth = () => {
    if (viewMonth === 11) {
      setViewMonth(0)
      setViewYear(viewYear + 1)
    } else {
      setViewMonth(viewMonth + 1)
    }
  }

  const isSelected = (day: number) =>
    selected.getFullYear() === viewYear && selected.getMonth() === viewMonth && selected.getDate() === day

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-6">
      <div className="w-full max-w-xs overflow-hidden rounded-[4px] bg-white shadow-xl">
        <div className="bg-rose-600 px-5 py-4 text-white">
          <p className="text-sm">{selected.getFullYear()}</p>
          <p className="text-2xl font-semibold">{formatHeaderDate(selected)}</p>
        </div>

        <div className="px-4 py-3">
          <div className="mb-2 flex items-center justify-between">
            <button type="button" onClick={goPrevMonth} aria-label="Previous month" className="p-1 text-gray-500">
              <Icon name="arrowLeft" className="h-4 w-4" />
            </button>
            <p className="text-sm font-medium text-gray-900">
              {MONTH_LONG[viewMonth]} {viewYear}
            </p>
            <button type="button" onClick={goNextMonth} aria-label="Next month" className="p-1 text-gray-500">
              <Icon name="arrowRight" className="h-4 w-4" />
            </button>
          </div>

          <div className="grid grid-cols-7 gap-y-1 text-center">
            {WEEKDAY_HEADERS.map((label, i) => (
              <span key={i} className="text-xs font-medium text-gray-400">
                {label}
              </span>
            ))}
            {cells.map((day, i) => (
              <div key={i} className="flex items-center justify-center py-1">
                {day && (
                  <button
                    type="button"
                    onClick={() => setSelected(new Date(viewYear, viewMonth, day))}
                    className={`flex h-8 w-8 items-center justify-center rounded-full text-sm transition-colors ${
                      isSelected(day) ? 'bg-rose-600 font-semibold text-white' : 'text-gray-500 hover:bg-gray-100'
                    }`}
                  >
                    {day}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-end gap-4 px-4 pb-4 pt-1">
          <button type="button" onClick={onCancel} className="text-sm font-semibold text-rose-600">
            CANCEL
          </button>
          <button type="button" onClick={() => onConfirm(selected)} className="text-sm font-semibold text-rose-600">
            OK
          </button>
        </div>
      </div>
    </div>
  )
}
