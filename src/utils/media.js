import { css } from 'styled-components'

const sizes = {
  mobile: 768,
  smallScreen: 1000
}

const print = (...args) => css`
  @media print {
    ${css(...args)};
  }
`

export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
      @media (max-width: ${sizes[label]}px) {
         ${css(...args)};
      }
   `
  return acc
}, {print})