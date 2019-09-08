import styled from 'styled-components'
import { View } from '../Base'

export const Column = styled.div`
  width: ${p => p.size}%;
  ${p => p.theme.mobile`
    width: 100%;
  `}
`

export const Grid = styled(View)`
  display: flex;
  flex-direction: row;
  margin-bottom: 2rem;
  ${p => p.theme.mobile`
    flex-direction: column;
  `}
`
