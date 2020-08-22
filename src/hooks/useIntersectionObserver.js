import { useEffect } from 'react'

export default ({ root, target, onIntersect, threshold = 1.0, rootMargin = "0px" }) => {
  useEffect(
    () => {
      const observer = new IntersectionObserver(onIntersect, {
        root,
        rootMargin,
        threshold,
      })

      target.current && observer.observe(target.current)

      return () => {
        target.current && observer.unobserve(target.current)
      }
    }
  )
}