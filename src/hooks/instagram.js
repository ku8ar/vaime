import { useEffect, useState } from 'react'
import Nanogram from 'nanogram.js'

let _photos = []

export default () => {
  const [photos, setPhotos] = useState(_photos)

  useEffect(() => {
    if (!photos.length) {
      const instagramParser = new Nanogram()
      instagramParser.getMediaByUsername('vaimetravel/').then((media) => {
        setPhotos(media.profile.edge_owner_to_timeline_media.edges.map(({ node }) => ({
          href: `https://www.instagram.com/p/${node.shortcode}`,
          src: node.display_url
        })))
      }).catch(() => {})
    }
  }, [])

  useEffect(() => {
    if (photos.length) {
      _photos = photos
    }
  }, [photos])

  return photos
}
