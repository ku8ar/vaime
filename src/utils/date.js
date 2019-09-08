import moment from 'moment'

export const calcDate = (startDate, endDate) => startDate && endDate ?
  `${moment(startDate).format('DD.MM')}-${moment(endDate).format('DD.MM')}.${moment(startDate).format('YYYY')}`
  : ''

export const countDays = (startDate, endDate) => startDate && endDate ? moment(endDate).diff(moment(startDate), 'days') : 0
