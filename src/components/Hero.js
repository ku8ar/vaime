import React from 'react'

const Hero = ({image, children, small}) => (
  <div
    className={`hero-wrapper ${small ? 'hero-small' : ''}`}
    style={{backgroundImage: `url(${image && image.childImageSharp ? image.childImageSharp.fluid.src : image})`}}
  >
    <div className='content hero-content'>
      {children}
    </div>
  </div>
)

export default Hero