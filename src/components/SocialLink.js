import React from 'react'
import facebook from '../img/fa/facebook.svg'
import instagram from '../img/fa/instagram.svg'
import youtube from '../img/fa/youtube.svg'

const icons = {
  facebook,
  instagram,
  youtube
}

export default ({type, src}) => (
  <a href={src} className="social-link">
    <img src={icons[type]} className="social-link" alt={type} />
  </a>
)
