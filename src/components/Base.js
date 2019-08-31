import styled, { css } from 'styled-components'

export const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const Grid = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto;
`

export const View = styled.div`
  width: 100%;
  max-width: 1240px;
  display: flex;
  flex-wrap: wrap;
  margin-left: auto;
  margin-right: auto;
  padding: 0 1rem;
`

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