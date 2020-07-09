import * as React from "react"

function SvgComponent({size, ...props}) {
  return (
    <svg height={size} viewBox="0 0 32 32" width={size} {...props}>
      <path d="M10 24h10v2H10v-2zM8 2h16v4h2V2c0-1.103-.896-2-2-2H8a2 2 0 00-2 2v4h2V2zM10 20h12v2H10v-2z" />
      <path d="M30 8H2a2 2 0 00-2 2v12a2 2 0 002 2h4v6a2 2 0 002 2h16a2 2 0 002-2v-6h4a2 2 0 002-2V10c0-1.104-.897-2-2-2zm-6 22H8V18h16v12zm4-16a2 2 0 110-4 2 2 0 010 4z" />
    </svg>
  )
}

export default SvgComponent
