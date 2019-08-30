import React, { useState, useEffect } from 'react'
import Img from 'gatsby-image'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const Hero = ({ image, images, children, small }) => {

  const [x, setX] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      const newX = x + 1
      const isNext = images && images[newX]
      setX(isNext ? newX : 0)
    }, 5000);
    return () => clearTimeout(timer);
  }, [x]);

  const imageObj = images && images.length ? images[x] : null

  const fluid = image ? image.childImageSharp.fluid : imageObj.image.childImageSharp.fluid
  const alt = image ? '' : imageObj.name

  return (
    <div
      className={`hero-wrapper ${small ? 'hero-small' : ''}`}
    >
      <ReactCSSTransitionGroup
        className="hero-animated-list"
        transitionName="example"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}>

        <Img key={image ? '' : imageObj.name} style={{ position: 'absolute', width: '100%', height: '100%' }} fluid={fluid} alt={alt} />
        <div style={{zIndex: 1}} className='content hero-content'>
          {children}
        </div>
      </ReactCSSTransitionGroup>

    </div >
  )
}

export default Hero