import React from 'react'
import Seo from './custom/Seo'
import styled, { ThemeProvider } from 'styled-components'
import Header from './layout/Header'
import Footer from './layout/Footer'
import '../styles/index.sass'

const theme = {
  // colors
  colorPrimary: '#DE261D', // 221, 51, 51
  colorSecondary: '#1B222C', // 27, 34, 44
  colorWhite: '#fff',
  colorGrey: '#FAF9F9',
  colorGreyDark: '#E3E3E3',
  colorGreyLight: 'rgba(255,255,255,0.8)',
  colorSecondaryTransparent: 'rgba(27, 34, 44, 0.4)',
  // margin
  marginM: '2rem',
  marginS: '1rem',
  marginXs: '.5rem',
  marginXxs: '.25rem',
  // font weight
  weightBolder: 900,
  weightBold: 700,
  weightNormal: 500,
  weightThin: 400,
  // font spacing
  spacingBig: '.2rem',
  spacingSmall: '.03rem',
  // radius
  radiusSmall: '.25rem',
}

const Layout = ({ children, title = '', description = '' }) => (
  <ThemeProvider theme={theme}>
    <Main>
      <Seo title={title} description={description} />
      <Header />
      {children}
      <Footer />
    </Main>
  </ThemeProvider>
)

const Main = styled.main`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
`

export default Layout
