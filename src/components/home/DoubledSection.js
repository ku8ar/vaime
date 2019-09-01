import styled from 'styled-components'
import { View } from '../Base'

export default styled(View)`
  display: flex;
  flex-direction: row;
  padding-top: 1rem;
  padding-bottom: 2.5rem;
  ${p => p.theme.mobile`
    flex-direction: column;
  `}
`
