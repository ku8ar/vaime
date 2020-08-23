import styled, { css } from 'styled-components'

export const Grid = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`

export const View = styled.div`
  width: 100%;
  max-width: 1172px;
  display: flex;
  flex-wrap: wrap;
  margin-left: auto;
  margin-right: auto;
  padding: 0 1rem;
  ${p => p.theme.print` display: block; `}
`

// @see header height
export const Page = styled.section`
  margin-top: 4rem;
  width: 100%;
  flex: 1;
  background-color: white;
  background-image: url(${p => p.background});
  ${p => p.theme.print` margin-top: 0; `}
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

export const buttonStyle = css`
  background-color: ${p => p.disabled ? (p.green ? p.theme.colorGreen : p.theme.colorSecondaryTransparent) : p.theme.colorPrimary};
  border-color: ${p => p.disabled ? p.theme.colorWhite : p.theme.colorPrimary};
  color: ${p => p.theme.colorWhite};
  text-transform: uppercase;
  padding: .5rem 1rem;
  font-size: ${p => p.theme.fontNormal};
  letter-spacing: ${p => p.theme.spacingBig};
  font-weight: ${p => p.theme.weightBold};
  border-radius: ${p => p.theme.radiusSmall};
  margin: ${p => p.theme.marginS} 0;
  cursor: ${p => p.disabled ? 'default' : 'pointer'};
  max-height: 2.5rem;
`

export const Button = styled.button`
  ${buttonStyle}
  border: 2px solid ${p => p.green ? p.theme.colorGreen : p.theme.colorPrimary};
  &:disabled {
    border: 2px solid transparent;
    backdrop-filter: blur(3px);
  }
  transition: transform 150ms ease;
  &:active {
    transform: scale(0.98);
  }
`

export const boxStyle = css`
  background: white;
  padding: 1rem 1rem 1rem 1rem;
  box-shadow: ${p => p.theme.shadowLight};
  border-radius: .25rem;
  ${p => p.theme.print`
    padding: 0;
    box-shadow: none;
  `}
`

export const Box = styled.div`
  ${boxStyle}
`