import * as React from "react"

function SvgComponent({ size, ...props }) {
  return (
    <svg viewBox="0 0 310 475" height={size} width={size} {...props}>
      <rect height={330} rx={65} width={270} x={20} y={40} />
      <rect fill="#fff" height={100} rx={30} width={200} x={55} y={100} />
      <rect fill="#fff" height={40} rx={10} width={80} x={115} y={50} />
      <circle cx={135} cy={20} r={15} />
      <circle cx={175} cy={20} r={15} />
      <circle cx={85} cy={315} fill="#fff" r={25} />
      <circle cx={225} cy={315} fill="#fff" r={25} />
      <path d="M0 475l70-115h170l70 115h-45l-45-75H90l-45 75z" />
    </svg>
  )
}

export default SvgComponent
