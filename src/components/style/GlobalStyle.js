import { createGlobalStyle, css } from 'styled-components'

const fonts = css`
/* latin-ext */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: local('Montserrat Light'), local('Montserrat-Light'), url(/fonts/montserrat_light_latin_ext.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: local('Montserrat Light'), local('Montserrat-Light'), url(/fonts/montserrat_light_latin.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* latin-ext */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Montserrat Regular'), local('Montserrat-Regular'), url(/fonts/montserrat_regular_latin_ext.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Montserrat Regular'), local('Montserrat-Regular'), url(/fonts/montserrat_regular_latin.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* latin-ext */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: local('Montserrat Medium'), local('Montserrat-Medium'), url(/fonts/montserrat_medium_latin_ext.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: local('Montserrat Medium'), local('Montserrat-Medium'), url(/fonts/montserrat_medium_latin.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
`

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    ::selection {
      background: ${p => p.theme.colorPrimary};
      color: white;
    }
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
    font-weight: ${p => p.theme.weightNormal};
    line-height: 1.5;
    letter-spacing: .03rem;
    color: ${p => p.theme.colorSecondary};
    -moz-osx-font-smoothing: grayscale;
    overflow-y: scroll;
  }

  h1, h2, h3, h6 {
    text-transform: uppercase;
  }
    
  h1, h2, h3, h4, h5, h6, p, div, span {
    color: ${p => p.theme.colorSecondary};
  }

  @media print {
    h1, h2, h3, h4, h5, h6, p, div, span {
      color: ${p => p.theme.colorSecondary} !important;
    }
  }

  h1, h2, h3, h4, h5, h6, p {
    margin-top: 0;
    margin-bottom: .5rem;
    font-weight: ${p => p.theme.weightNormal};

  }

  h1 {
    font-size: 3rem;
    ${p => p.theme.mobile` font-size: 2rem; margin-top: .5rem; `}
    text-shadow: 0 1px 2px rgba(0,0,0,.6);
    ${p => p.theme.print` text-shadow: none; `}
    font-weight: ${p => p.theme.weightBold};
  }

  h2 {
    font-size: 2rem;
    ${p => p.theme.mobile` font-size: 1.5rem; `}
    margin-top: 1.5rem;
    font-weight: ${p => p.theme.weightBold};
  }

  h3 {
    font-size: 1.75rem;
    ${p => p.theme.mobile` font-size: 1.25rem; `}
    font-weight: ${p => p.theme.weightBold};
  }

  h4 {
    font-size: 1.5rem;
    ${p => p.theme.mobile` font-size: 1.25rem; `}
  }

  h5 {
    font-size: 1.25rem;
  }

  h6 {
    font-size: 1rem;
    color: ${p => p.theme.colorSecondary};
  }

  ul {
    ${p => p.theme.mobile`
      padding-left: 1rem;
    `}
  }

  ul > li > ul {
    ${p => p.theme.mobile`
      padding-left: 1rem;
    `}
  }

  li {
    margin-bottom: 1rem;
    &:last-child {
      margin-bottom: none;
    }
    ${p => p.theme.print` margin-bottom: .5rem; `}
  }

  strong {
    -webkit-font-smoothing: auto;
  }

  a {
    text-decoration: none;
    color: ${p => p.theme.colorPrimary};
  }

  button {
    :focus {
      outline: none;
    }
  }

  ${fonts}

  .fb_dialog_mobile > .fb_dialog_content > iframe {
    margin-bottom: 4rem !important;
  }

  .fb_dialog_content {
    ${p => p.theme.print` display: none !important; `}
  }
`