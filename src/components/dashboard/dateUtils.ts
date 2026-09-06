const MONTH_ABBR = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export function isoToShortDate(iso: string): string {
  if (!iso) return ''
  const [y, m, d] = iso.split('-').map(Number)
  return `${d}-${m}-${y}`
}

export function shortDateToIso(value: string): string {
  const parts = value.split('-').map(Number)
  if (parts.length !== 3 || parts.some((n) => !n)) return ''
  const [d, m, y] = parts
  return `${y}-${String(m).padStart(2, '0')}-${String(d).padStart(2, '0')}`
}

export function isoToLongDate(iso: string): string {
  if (!iso) return ''
  const [y, m, d] = iso.split('-').map(Number)
  return `${d} ${MONTH_ABBR[m - 1]} ${y}`
}

export function longDateToIso(value: string): string {
  const parts = value.trim().split(/\s+/)
  if (parts.length !== 3) return ''
  const [d, monStr, y] = parts
  const m = MONTH_ABBR.indexOf(monStr) + 1
  if (!Number(d) || !m || !Number(y)) return ''
  return `${y}-${String(m).padStart(2, '0')}-${String(Number(d)).padStart(2, '0')}`
}
