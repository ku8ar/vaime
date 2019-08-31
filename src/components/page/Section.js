import styled from 'styled-components'
import { View } from '../Base'

export default styled(View)`
  display: flex;
  width: 100%;
  margin-top: ${p => p.theme.marginS};
  margin-bottom: ${p => p.theme.marginS};
`