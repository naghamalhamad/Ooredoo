const MONTH_ABBR = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const WEEKDAY_ABBR = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

export const MONTH_LONG = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

export const WEEKDAY_HEADERS = ['M', 'T', 'W', 'T', 'F', 'S', 'S']

export function formatShortDate(date: Date): string {
  return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
}

export function formatLongDate(date: Date): string {
  return `${date.getDate()} ${MONTH_ABBR[date.getMonth()]} ${date.getFullYear()}`
}

export function formatHeaderDate(date: Date): string {
  return `${WEEKDAY_ABBR[date.getDay()]} ${date.getDate()} ${MONTH_ABBR[date.getMonth()]}`
}

export function parseShortDate(value: string): Date {
  const parts = value.split('-').map(Number)
  if (parts.length === 3 && parts.every((n) => !Number.isNaN(n) && n)) {
    const [d, m, y] = parts
    return new Date(y, m - 1, d)
  }
  return new Date()
}

export function parseLongDate(value: string): Date {
  const parts = value.trim().split(/\s+/)
  if (parts.length === 3) {
    const [d, monStr, y] = parts
    const m = MONTH_ABBR.indexOf(monStr)
    if (m >= 0 && Number(d) && Number(y)) return new Date(Number(y), m, Number(d))
  }
  return new Date()
}
