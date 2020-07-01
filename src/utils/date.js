import moment from 'moment'

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

export const calcDate = (startDate, endDate, withYear = true) => {
  if (startDate && endDate) {
    if (startDate === endDate) {
      return `${moment(startDate).format('DD.MM')}${withYear ? '.' : ''}${withYear ? moment(startDate).format('YYYY') : ''}`
    }

    return `${moment(startDate).format('DD.MM')}-${moment(endDate).format('DD.MM')}${withYear ? '.' : ''}${withYear ? moment(startDate).format('YYYY') : ''}`
  }
  return ''
}

export const calcMonthsDate = (startDate, endDate, withYear = true) => {
  if (!startDate || !endDate) return ''
  const startMonth = monthLabels[moment(startDate).format('M')]
  const endMonth = monthLabels[moment(endDate).format('M')]
  const year = moment(startDate).format('YYYY')

  return withYear ? `${startMonth} - ${endMonth} ${year}` : `${startMonth} - ${endMonth}`
}

export const countDays = (startDate, endDate) => startDate && endDate ? moment(endDate).diff(moment(startDate), 'days') : 0

export const calcYear = (date) => date ? moment(date).format('YYYY') : ''
