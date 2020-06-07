import * as React from "react"

function SvgComponent({size, ...props}) {
  return (
    <svg height={size} viewBox="0 0 48 48" width={size} {...props}>
      <path d="M42 48H28V35h-8v13H6V27a1 1 0 112 0v19h10V33h12v13h10V28a1 1 0 112 0v20z" />
      <path d="M47 27a.997.997 0 01-.691-.277L24 5.384 1.691 26.723a1 1 0 01-1.383-1.445L24 2.616l23.691 22.661A1 1 0 0147 27zM39 15a1 1 0 01-1-1V8h-6a1 1 0 110-2h8v8a1 1 0 01-1 1z" />
    </svg>
  )
}

export default SvgComponent
