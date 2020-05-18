import { useEffect } from 'react'

export default ({ root, target, onIntersect, threshold = 1.0, rootMargin = "0px" }) => {
  useEffect(
    () => {
      const observer = new IntersectionObserver(onIntersect, {
        root: root.current,
        rootMargin,
        threshold,
      })

      observer.observe(target.current)

      return () => {
        observer.unobserve(target.current)
      }
    }
  )
}