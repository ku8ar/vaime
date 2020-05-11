import React, { useState, useCallback } from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Cookies from '../components/Cookies'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import { View, Page, H2 } from '../components/Base'
import HeroTour from '../components/tour/HeroTour'
import Schedule from '../components/tour/Schedule'
import Reservation from '../components/tour/Reservation'
import { Grid, Column } from '../components/page/Grid'
import Section from '../components/page/Section'
import PriceContains from '../components/tour/PriceContains'
import Map from '../components/tour/Map'
import Instagram from '../components/home/Instagram'

const TourPage = styled(Page)`
  background-color: ${p => p.theme.colorGreyNew}
`

export const TourTemplate = ({ description, schedule, html, contentComponent, map, ...props }) => {
  const HtmlComponent = contentComponent || Content
  return (
    <TourPage>
      <HeroTour {...props} />
      <View>
        <H2>{description}</H2>
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
          <Column size={70}>
            <Section>
              <Map map={map} />
            </Section>
            <Section>
              <HtmlComponent content={html || ''} />
            </Section>
          </Column>
          <Column size={30}>
          </Column>
        </Grid>
      </View>
      <Instagram />
      <Cookies />
    </TourPage>
  )
}

const Tour = ({ data }) => {
  const { title, description } = data.markdownRemark.frontmatter

  const [isReservation, setReservation] = useState(false)
  const openReservation = useCallback(() => setReservation(true), [])
  const closeReservation = useCallback(() => setReservation(false), [])

  return (
    <Layout title={title} description={description}>
      <TourTemplate
        {...data.markdownRemark.frontmatter}
        html={data.markdownRemark.html}
        contentComponent={HTMLContent}
        openReservation={openReservation}
      />
      <Reservation
        open={isReservation}
        onClose={closeReservation}
        {...data.markdownRemark.frontmatter}
      />
    </Layout>
  )
}

export default Tour

export const pageQuery = graphql`
  query TourById($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        active
        title
        description
        terms {
          startDate(formatString: "YYYY-MM-DD")
          endDate(formatString: "YYYY-MM-DD")
          timestamp: startDate(formatString: "x")
          daysCount
          price
          seats
        }
        description
        schedule {
          day
          place
          text
        }
        priceContains {
          text
          icon
        }
        priceNotContains {
          text
          icon
        }
        thumb { ...imageThumb }
        map { ...imageFullWidth }
        images {
          name
          image { ...imageFullWidth }
        }
      }
    }
  }
`