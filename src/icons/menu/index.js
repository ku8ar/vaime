import * as React from "react"
import styled from 'styled-components'
import contact from './contact'
import cooperation from './cooperation'
import faq from './faq'
import georgia from './georgia'
import home from './home'
import info from './info'

const IconWrapper = styled.div`
  height: 2rem;
  width: 2rem;
`

const types = {
  contact,
  cooperation,
  faq,
  georgia,
  home,
  info
}

const Icon = ({ icon, className, fill, size }) => {
  const Component = types[icon]

  return Component ? (
    <IconWrapper className={className} fill={fill}>
      <Component size={size} fill={fill} />
    </IconWrapper>
  ) : null
}

export default Icon
