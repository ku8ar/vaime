import { useEffect, useState } from 'react'
import Nanogram from 'nanogram.js'

let _photos = []

export default (shouldFetch = true) => {
  const [photos, setPhotos] = useState(_photos)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (!photos.length && shouldFetch) {
      const instagramParser = new Nanogram()
      instagramParser.getMediaByUsername('vaimetravel/').then((media) => {
        setPhotos(media.profile.edge_owner_to_timeline_media.edges.map(({ node }) => ({
          href: `https://www.instagram.com/p/${node.shortcode}`,
          src: node.display_url
        })))
      }).catch(() => {
        setError(true)
      })
    }
  }, [shouldFetch])

  useEffect(() => {
    if (photos.length) {
      _photos = photos
    }
  }, [photos])

  return [photos, error]
}
