import { useState, useEffect } from 'react'

export const useSetSeen = path => {
  useEffect(() => {
    localStorage && localStorage.setItem(`tour_${path}`, true)
  }, [])
}

export const useGetSeen = path => {
  const [isSeen, setSeen] = useState(false)

  useEffect(() => {
    setSeen(localStorage && localStorage.getItem(`tour_${path}`))
  }, [])
  
  return isSeen
}
