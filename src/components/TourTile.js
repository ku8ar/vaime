import React from 'react'
import styled from 'styled-components'
import { path } from 'rambda'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { calcDate } from '../utils/date'
import { H4, H6, Button } from './Base'
import heart from '../img/heart.svg'

export default ({ slug, tour }) => {
  if (!tour) return

  const { title, startDate, endDate, timestamp, thumb, price } = tour
  const subtitle = `Dostępny termin: ${calcDate(startDate, endDate)}`
  const fluid = path('childImageSharp.fluid', thumb) || thumb

  const expired = timestamp < + new Date()

  return (
    <LinkWrapper to={slug}>
      <Top>
        <BgCover fluid={fluid} style={imgStyle} alt={title} />
        <TourContent>
          <TourDates>
            <TourInfo>{subtitle}</TourInfo>
          </TourDates>
          <TourButton>Więcej</TourButton>
          {expired && <Outdated>WYPRZEDANE</Outdated>}
        </TourContent>
      </Top>
      <BottomLabel>
        <H6>{title}</H6>
        <TourColumn>
          <HeartIcon src={heart} />
          <H6 color='colorPrimary'>{price} EUR</H6>
        </TourColumn>
      </BottomLabel>
    </LinkWrapper>
  )
}

const LinkWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  width: 22rem;
  height: 22rem;
  box-shadow: 0 2px 4px 0 rgba(23,27,30,.1);
  border-radius: ${props => props.theme.radiusSmall};
  margin: ${ props => props.theme.marginM} ${props => props.theme.marginS};
  background-color: ${props => props.theme.colorWhite};
  text-decoration: none;
  transition: box-shadow .3s ease-out;
  overflow: hidden;
  &:hover {
    box-shadow: 0 4px 12px 0 rgba(23,27,30,.3);
  }
  ${p => p.theme.mobile`
    margin-left: 0;
    margin-right: 0;
  `}
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.05);
  }
`

const Top = styled.div`
  flex: 1;
  overflow: hidden;
  position: relative;
`

const imgStyle = { position: 'absolute', width: '100%', height: '100%' }

const BgCover = styled(Img)`

`

const BottomLabel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: ${path('theme.marginXs')} ${path('theme.marginXs')} ${path('theme.marginXs')} ${path('theme.marginXs')};
  min-height: 3.5rem;
`

const TourContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  height: 100%;
  z-index: 1;
`

const TourDates = styled.div`
  z-index: 1;
  width: 100%;
`

const TourInfo = styled.p`
  background-color: ${path('theme.colorPrimary')};
  color: ${path('theme.colorWhite')};
  font-size: 12px;
  text-transform: uppercase;
  padding: .5rem;
  background: ${p => p.theme.colorPrimary}
`

const TourButton = styled(Button)`
  z-index: 1;
  pointer-events: none;
  position: absolute:
  bottom: 0;
`

const HeartIcon = styled.img`
  width: 1rem;
`

const TourColumn = styled.div`
  white-space: nowrap;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`

const Outdated = styled(H4)`
  position: absolute;
  font-weight: ${p => p.theme.weightBolder};
  color: ${ path('theme.colorPrimary')};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(0.05turn);
  border-style: dashed;
  border-color: ${ path('theme.colorPrimary')};
  border-radius: .5rem;
  padding: .5rem;
  background-color: #ffffff91;
`