import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import Cookies from '../components/Cookies'
import Content from '../components/Content'
import { View, Page } from '../components/Base'
import HeroTour from '../components/tour/HeroTour'
import Schedule from '../components/tour/Schedule'
import Reservation from '../components/tour/Reservation'
import { Grid, Column } from '../components/page/Grid'
import Section from '../components/page/Section'
import PriceContains from '../components/tour/PriceContains'
import Map from '../components/tour/Map'
import TourTopInfo from '../components/tour/TourTopInfo'
import Instagram from '../components/home/Instagram'
import { useSetSeen } from '../hooks/useSeen'
import TourTile from '../components/TourTile'
import EditorWrapper from '../components/EditorWrapper'

const TourPage = styled(Page)`
  background-color: ${(p) => p.theme.colorGreyNew};
  ${(p) => p.theme.print` background-color: white; `}
`

const LeftColumn = styled(Column)`
  padding-right: 2rem;
  ${(p) => p.theme.mobile`
    padding-right: 0rem;
  `}
`

export const TourTemplate = ({
  schedule,
  html,
  contentComponent,
  map,
  editor,
  ...originalProps
}) => {
  const HtmlComponent = contentComponent || Content

  const { slug } = originalProps

  const [isReservation, setReservation] = useState(false)
  const openReservation = useCallback(() => setReservation(true), [])
  const closeReservation = useCallback(() => setReservation(false), [])

  const props = { ...originalProps, openReservation, closeReservation }

  useSetSeen(slug)

  return (
    <>
      <TourPage>
        <HeroTour {...props} />
        {editor && (
          <EditorWrapper>
            <TourTile tour={props} />
          </EditorWrapper>
        )}
        <View>
          <TourTopInfo {...props} />
          <Grid>
            <Column size={70}>
              <Section>
                <Schedule schedule={schedule} />
              </Section>
            </Column>
            <Column size={30}>
              <PriceContains {...props} />
            </Column>
          </Grid>
          <Grid>
            <LeftColumn size={35}>
              <HtmlComponent content={html || ''} />
            </LeftColumn>
            <Column size={65}>
              <Map map={map} editor={editor} />
            </Column>
          </Grid>
        </View>
        <Instagram />
        <Cookies />
      </TourPage>
      <Reservation open={isReservation} onClose={closeReservation} {...props} />
    </>
  )
}

export default TourTemplate
