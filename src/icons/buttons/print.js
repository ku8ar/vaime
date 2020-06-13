import * as React from "react"

function SvgComponent({size}) {
  return (
    <svg height={size} viewBox="0 0 50 50" width={size}>
      <path fill="none" d="M0 0h50v50H0z" />
      <circle cx={43} cy={21} r={2} />
      <path
        d="M40 15V1H10v14M40 29v20H10V29h30z"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path
        d="M10 40H3a2 2 0 01-2-2V17a2 2 0 012-2h44a2 2 0 012 2v21a2 2 0 01-2 2h-7M35 35H15M31 39H15M35 43H15"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
    </svg>
  )
}

export default SvgComponent
