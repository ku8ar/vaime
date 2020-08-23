import React from 'react'
import styled from 'styled-components'
import { View, P } from '../Base'
import Icon from '../../icons/infoBelt'

const Wrapper = styled.div`
  background-color: ${p => p.theme.colorSecondaryTransparent};
  backdrop-filter: blur(3px);
  border-top-left-radius: ${p => p.theme.radiusSmall};
  border-top-right-radius: ${p => p.theme.radiusSmall};
  position: absolute;
    bottom: 0;
    width: 100%;
`

const InfoView = styled(View)`
  justify-content: space-around;
  flex-wrap: wrap;
`

const InfoWrapper = styled.div`
  padding: .5rem 0;
  width: 15rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`

const IconWrapper = styled.div`
  margin-right: 1rem;
  height: 100%;
  display: flex;
  align-items: center;
`

const Column = styled.div``

const Title = styled(P)`
  font-size: 1rem;
  margin-bottom: 0;
  color: ${p => p.theme.colorWhite};
  font-weight: ${p => p.theme.weightBold};
`

const Description = styled(P)`
  margin-bottom: 0;
  color: ${p => p.theme.colorWhite};
  font-weight: ${p => p.theme.weightThin};
`

const InfoItem = ({icon, label, description}) => (
  <InfoWrapper>
    <IconWrapper>
      <Icon icon={icon} />
    </IconWrapper>
    <Column>
      <Title>{label}</Title>
      <Description>{description}</Description>
    </Column>
  </InfoWrapper>
)

export default ({ heroInfoBelt = [] }) => (
  <Wrapper>
    <InfoView>
      {heroInfoBelt.map(item => <InfoItem key={item.label} {...item} />)}
    </InfoView>
  </Wrapper>
)