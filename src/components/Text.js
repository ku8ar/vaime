import styled, { css } from 'styled-components'

const center = css`
  display: flex;
  justify-content: center;
  flex-grow: 1;
  width: 100%;
`

export const H1 = styled.h1`
`

export const H2 = styled.h2`
  color: ${props => props.theme[props.color]};
  ${props => props.center && center};
`

export const H3 = styled.h3`
  color: ${props => props.theme[props.color]};
`

export const H4 = styled.h4`
  color: ${props => props.theme[props.color]};
`

export const H5 = styled.h5`
  color: ${props => props.theme[props.color]};
`

export const H6 = styled.h6`
  color: ${props => props.theme[props.color]};
`

export const P = styled.p``