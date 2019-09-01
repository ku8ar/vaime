import styled, { css } from 'styled-components'

export const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const Grid = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
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

// @see header height
export const Page = styled.section`
  margin-top: 4rem;
  width: 100%;
  flex: 1;
`

const center = css`
  display: flex;
  justify-content: center;
  flex-grow: 1;
  width: 100%;
`

export const H1 = styled.h1`
  color: ${props => props.theme[props.color]};
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

export const Button = styled.button`
  background-color: ${p => p.theme.colorPrimary};
  border-color: ${p => p.theme.colorPrimary};
  color: ${p => p.theme.colorWhite};
  text-transform: uppercase;
  padding: .5rem 1rem;
  font-size: ${p => p.theme.fontNormal};
  letter-spacing: ${p => p.theme.spacingBig};
  font-weight: ${p => p.theme.weightThin};
  border-radius: ${p => p.theme.radiusSmall};
  margin: ${p => p.theme.marginS} 0;
  cursor: pointer;
`