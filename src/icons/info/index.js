import * as React from "react"
import styled from 'styled-components'
import { colorPrimary } from '../../components/style/Theme'
import mail from './mail'
import smartphone from './smartphone'
import instagram from './instagram'

const IconWrapper = styled.div`
  height: 2rem;
  width: 2rem;
`

const types = {
  mail,
  smartphone,
  instagram
}

const Icon = ({ icon, className }) => {
  const Component = types[icon]

  return Component ? (
    <IconWrapper className={className} fill={colorPrimary}>
      <Component size={'2rem'} fill={colorPrimary} />
    </IconWrapper>
  ) : null
}

export default Icon
