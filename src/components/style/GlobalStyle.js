import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    width: 100%;
    font-family: ${p => p.theme.fontFamily};
    font-size: ${p => p.theme.fontNormal}; 
    font-weight: ${p => p.theme.weightThin};
    line-height: 1.5;
    letter-spacing: .03rem;
    color: ${p => p.theme.colorSecondary};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-y: scroll;
  }

  h1, h2, h3, h6 {
    text-transform: uppercase;
  }
    
  h1, h2, h3, h4, h5, h6, p, div, span {
    color: ${p => p.theme.colorSecondary};
  }

  h1, h2, h3, h4, h5, h6, p {
    margin-top: 0;
    margin-bottom: .5rem;
    font-weight: 400;
  }

  h1 {
    font-size: 3rem;
    text-shadow: 0 1px 2px rgba(0,0,0,.6);
  }

  h2 {
    font-size: 2rem;
    margin-top: 1.5rem;
  }

  h3 {
    font-size: 1.75rem;
  }

  h4 {
    font-size: 1.5rem;
  }

  h5 {
    font-size: 1.25rem;
  }

  h6 {
    font-size: 1rem;
    color: ${p => p.theme.colorSecondary};
  }

  li {
    margin-bottom: 1rem;
    &:last-child {
      margin-bottom: none;
    }
  }

  strong {
    -webkit-font-smoothing: auto;
  }

  a {
    text-decoration: none;
    color: ${p => p.theme.colorPrimary};
  }

`