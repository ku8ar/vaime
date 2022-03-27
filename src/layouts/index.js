import React from 'react'
import Theme from 'src/components/style/Theme'
import FacebookChat from 'src/components/Facebook'

const App = ({ children }) => (
  <Theme>
    {children}
    <FacebookChat />
  </Theme>
)

export default App
