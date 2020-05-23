import moment from 'moment'

export const calcDate = (startDate, endDate, withYear = true) => {
  if (startDate && endDate) {
    if (startDate === endDate) {
      return `${moment(startDate).format('DD.MM')}${withYear ? '.' : ''}${withYear ? moment(startDate).format('YYYY') : ''}`
    }

    return `${moment(startDate).format('DD.MM')}-${moment(endDate).format('DD.MM')}${withYear ? '.' : ''}${withYear ? moment(startDate).format('YYYY') : ''}`
  }
  return ''
}

export const countDays = (startDate, endDate) => startDate && endDate ? moment(endDate).diff(moment(startDate), 'days') : 0

export const calcYear = (date) => date ? moment(date).format('YYYY') : ''