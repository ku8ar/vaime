import React from 'react'

const Hero = ({image, children}) => (
  <div
    className="hero-wrapper"
    style={{backgroundImage: `url(${image && image.childImageSharp ? image.childImageSharp.fluid.src : image})`}}
  >
    <div className='content hero-content'>
      {children}
    </div>
  </div>
)

export default Hero