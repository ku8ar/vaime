import { sort, prop, head, pipe } from 'rambda'

const getOldestTs = pipe(
  sort((a, b) => a.timestamp > b.timestmap),
  head,
  prop('timestamp')
)

const getBiggestSeats = pipe(
  sort((a, b) => a.seats > b.seats),
  head,
  prop('seats')
)

export const getIsTourExpired = ({ terms, oneDay }) => {
  const timestamp = getOldestTs(terms)
  return oneDay ? false : timestamp < + new Date()
}

export const getIsTourDisabled = ({ terms, oneDay, active }) => {
  const expired = getIsTourExpired({ terms, oneDay })
  const seats = getBiggestSeats(terms)
  const noSeats = seats <= 0
  return expired || noSeats || !active
}

export const hasTourDiscount = ({ discount, ...tour }) => {
  const disabled = getIsTourDisabled(tour)
  return !disabled && !!discount
}

export const getDiscountPrice = ({ discount }, price) => ~~((100 - discount) / 100 * price)