import React from 'react'
import Logo from '../../icons/menu/logo'

const style = {
  borderTop: '1px solid white',
  borderBottom: '1px solid white'
}

export default ({ size = 80 }) => <Logo width={size} height={size / 2} style={style} />
