import React from 'react'
import styled from 'styled-components'
import {View} from '../Base'
import Image from '../Image'

const Promo = styled(Image)`
  width: 100%;
  height: 100%;
  margin: auto;
  ${p => p.theme.mobile`
    display: none;
  `}
`

const Bg = styled.div`
  background-color: ${p => p.theme.colorGrey};
`

const Wrapper = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export default ({ promoImage }) => (
  <Bg>
    <Wrapper>
      <Promo data={{image: promoImage, name: 'Grafika Promocyjna'}} />
    </Wrapper>
  </Bg>
)