import format from 'date-fns/format'
import parseISO from 'date-fns/parseISO'

const monthLabels = {
  1: 'Styczeń',
  2: 'Luty',
  3: 'Marzec',
  4: 'Kwiecień',
  5: 'Maj',
  6: 'Czerwiec',
  7: 'Lipiec',
  8: 'Sierpień',
  9: 'Wrzesień',
  10: 'Październik',
  11: 'Listopad',
  12: 'Grudzień'
}

const parseDate = date => {
  if (!date) return ''
  return typeof date === 'string' ? parseISO(date) : date
}

const formatDate = (date, type) => {
  if (!date) return ''
  return format(parseDate(date), type)
}

export const calcDate = (startDate, endDate, withYear = true) => {
  if (startDate && endDate) {
    if (startDate === endDate) {
      return `${formatDate(startDate, 'dd.MM')}${withYear ? '.' : ''}${withYear ? formatDate(startDate, 'yyyy') : ''}`
    }

    return `${formatDate(startDate, 'dd.MM')}-${formatDate(endDate, 'dd.MM')}${withYear ? '.' : ''}${withYear ? formatDate(startDate, 'yyyy') : ''}`
  }
  return ''
}

export const calcMonthsDate = (startDate, endDate, withYear = true) => {
  if (!startDate || !endDate) return ''

  const startMonth = monthLabels[formatDate(startDate, 'M')]
  const endMonth = monthLabels[formatDate(endDate, 'M')]
  const year = formatDate(startDate, 'yyyy')

  return withYear ? `${startMonth} - ${endMonth} ${year}` : `${startMonth} - ${endMonth}`
}

export const calcYear = (date) => formatDate(date, 'yyyy')

export const calcYearShort = (date) => formatDate(date, 'yy')