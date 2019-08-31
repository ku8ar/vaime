import React from 'react'
import styled from 'styled-components'
import { path } from 'rambda'
import { Link } from 'gatsby'
import moment from 'moment'
import {H6} from './Text'
import heart from '../img/heart.svg'

const LinkWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  width: 20rem;
  height: 15rem;
  box-shadow: 0 2px 4px 0 rgba(23,27,30,.1);
  border-radius: ${props => props.theme.radiusSmall};
  margin: ${ props => props.theme.marginM};
  background-color: ${props => props.theme.colorWhite};
  text-decoration: none;
  transition: box-shadow .3s ease-out;
  &:hover {
    box-shadow: 0 4px 12px 0 rgba(23,27,30,.3);
  }
`

const BgCover = styled.div`
  flex: 1;
  overflow: hidden;
  background-position: center center;
  background-size: cover;
`

const BottomLabel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: ${path('theme.marginXs')} ${path('theme.marginXs')} 0 ${path('theme.marginXs')};
  min-height: 3.5rem;
`

const TourContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  height: 100%;
`

const TourInfo = styled.p`
  padding: ${path('theme.marginXs')};
  background-color: ${path('theme.colorSecondaryTransparent')};
  color: ${path('theme.colorWhite')};
  width: 100%;
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

export default ({ slug, tour }) => {
  if (!tour) return

  const { title, startDate, endDate, image, price } = tour
  const subtitle = `Dostępny temin: ${moment(startDate).format('DD.MM')}-${moment(endDate).format('DD.MM')}.${moment(endDate).format('YYYY')}`
  const src = image && image.childImageSharp ? image.childImageSharp.fluid.src : image

  return (
    <LinkWrapper to={slug}>
      <BgCover
        style={{ backgroundImage: `url(${src})` }}
      >
        <TourContent>
          <TourInfo>{subtitle}</TourInfo>
          <button>Więcej</button>
        </TourContent>
      </BgCover>
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