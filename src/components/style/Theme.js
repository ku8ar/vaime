import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import GlobalStyle from './GlobalStyle'
import media from '../../utils/media'

export const colorPrimary = '#DE261D' // 221, 51, 51
export const colorGreen = '#2DB324'

const theme = {
  // colors
  colorPrimary,
  colorSecondary: '#1B222C', // 27, 34, 44
  colorWhite: '#fff',
  colorGrey: '#FAF9F9',
  colorGreyDark: '#E3E3E3',
  colorGreyLight: 'rgba(255,255,255,0.8)',
  colorSecondaryTransparent: 'rgba(27, 34, 44, 0.4)',
  colorGreyNew: '#F2F3F4',
  colorGreen,
  // margin
  marginM: '2rem',
  marginS: '1rem',
  marginXs: '.5rem',
  marginXxs: '.25rem',
  // font weight
  weightBolder: 900,
  weightBold: 800,
  weightNormal: 500,
  weightThin: 300,
  // font spacing
  spacingBig: '.2rem',
  spacingSmall: '.03rem',
  // radius
  radiusSmall: '.25rem',
  // shadow
  shadowDark: '0px 10px 18px 2px rgba(0,0,0,0.3)',
  shadowLight: '0 2px 4px 0 rgba(23,27,30,.1)',
  // font
  fontNormal: '14px',
  fontBig: '16px',
  fontFamily: '"Montserrat",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
  ...media
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Main>
      <GlobalStyle />
      {children}
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

export default Theme
