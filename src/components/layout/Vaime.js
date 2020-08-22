import React, { useMemo } from 'react'
import Logo from '../../icons/menu/logo'

export default ({ size = 80, noBorder }) => {

  const borderColor = noBorder ? 'transparent' : 'white'
  const style = useMemo(() => ({
    borderTop: `1px solid ${borderColor}`,
    borderBottom: `1px solid ${borderColor}`,
    transition: 'border .2s'
  }), [borderColor])

  return <Logo width={size} height={size / 2} style={style} />
}
