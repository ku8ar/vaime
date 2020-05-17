import * as React from "react"

function SvgComponent(props) {
  return (
    <svg height={50} viewBox="0 0 50 50" width={50} {...props}>
      <path fill="none" d="M0 0h50v50H0z" />
      <circle
        cx={25}
        cy={25}
        fill="none"
        r={24}
        stroke="#000"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.883}
        d="M12.393 37.607l10.072-15.142 15.141-10.07-10.07 15.14z"
      />
      <path d="M22.465 22.465l15.141-10.07-10.07 15.14z" />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M25 1v2M25 47v2M49 25h-2M3 25H1"
      />
    </svg>
  )
}

export default SvgComponent
