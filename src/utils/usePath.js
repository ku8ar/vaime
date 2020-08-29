import { useLocation } from '@reach/router'

export default () => {
  const location = useLocation()
  const pathname = location && location.pathname

  if (!pathname) {
    return ''
  }

  return pathname
}