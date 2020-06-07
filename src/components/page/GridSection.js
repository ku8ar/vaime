import React from 'react'
import styled from 'styled-components'
import { Grid } from './Grid'
import { H5, P } from '../Base'
import Image from '../Image'

const getTextOrder = index => {
  const i = index + 1
  if (!(i % 2)) return 1
  if (!(i % 3)) return 2
  return 0
}

const getImage1Order = index => {
  const i = index + 1
  if (!(i % 2)) return 2
  if (!(i % 3)) return 0
  return 1
}

const getImage2Order = index => {
  const i = index + 1
  if (!(i % 2)) return 0
  if (!(i % 3)) return 1
  return 2
}

const getRowIndex = ({ index }) => {
  const i = index + 1
  if (!(i % 2)) return '1fr 2fr 1fr'
  if (!(i % 3)) return '1fr 1fr 2fr'
  return '2fr 1fr 1fr'
}

export default ({ data }) => {
  if (!data || !data.length) return null

  return (
    <Grid>
      <Wrapper>
        {data.map(({image0, image1, title, text}, index) => (
          <Row key={index} index={index}>
            <TextWrapper order={getTextOrder(index)}>
              <Title>{title}</Title>
              <Text>{text}</Text>
            </TextWrapper>
            <ImageWrapper order={getImage1Order(index)}><RowImage data={{image: image0, title: `Zdjęcie 1, ${title}`}} /></ImageWrapper>
            <ImageWrapper order={getImage2Order(index)}><RowImage data={{image: image1, title: `Zdjęcie 2, ${title}`}} /></ImageWrapper>
          </Row>
        ))}
      </Wrapper>
    </Grid>
  )
}

const Title = styled(H5)`
  color: ${p => p.theme.colorWhite};
  text-transform: uppercase;
`

const Text = styled(P)`
  color: ${p => p.theme.colorWhite};
`

const TextWrapper = styled.div`
  order: ${p => p.order};
  background-color: ${p => p.theme.colorPrimary};
  padding: 1rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

const ImageWrapper = styled.div`
  order: ${p => p.order};

  ${p => p.theme.mobile`
    display: none;
  `}
`

const RowImage = styled(Image)`
  height: 100%;
`

const Row = styled.div`
  display: inline-grid;
  grid-gap: 1rem;
  grid-template-columns: ${getRowIndex};
  margin-top: 1rem;

  ${p => p.theme.mobile`
    display: block;
  `}
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${p => p.theme.mobile`
    margin-top: 0;
  `}
`
