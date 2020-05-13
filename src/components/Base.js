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
  max-width: 1140px;
  display: flex;
  flex-wrap: wrap;
  margin-left: auto;
  margin-right: auto;
  ${p => p.theme.smallScreen`
    padding: 0 1rem;
  `}
`

// @see header height
export const Page = styled.section`
  margin-top: 4rem;
  width: 100%;
  flex: 1;
  background-image: url(${p => p.background});
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
  background-color: ${p => p.disabled ? p.theme.colorGreyDark : p.theme.colorPrimary};
  border-color: ${p => p.disabled ? p.theme.colorGreyDark : p.theme.colorPrimary};
  color: ${p => p.theme.colorWhite};
  text-transform: uppercase;
  padding: .5rem 1rem;
  font-size: ${p => p.theme.fontNormal};
  letter-spacing: ${p => p.theme.spacingBig};
  font-weight: ${p => p.theme.weightThin};
  border-radius: ${p => p.theme.radiusSmall};
  margin: ${p => p.theme.marginS} 0;
  cursor: ${p => p.disabled ? 'default' : 'pointer'};
  max-height: 2.5rem;
`

export const boxStyle = css`
  background: white;
  padding: .5rem .5rem 1rem 1rem;
  box-shadow: 0 4px 12px 0 rgba(23,27,30,.3);
  border-radius: .25rem;
`

export const Box = styled.div`
  ${boxStyle}
`