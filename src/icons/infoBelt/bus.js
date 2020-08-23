import * as React from "react"

function SvgComponent({size, fill, ...props }) {
  return (
    <svg height={size} viewBox="0 0 50 50" width={size} {...props}>
      <path
        d="M45 44v3a2 2 0 01-2 2h-4a2 2 0 01-2-2v-2M13 45v2a2 2 0 01-2 2H7c-1.103 0-2-.896-2-2v-3"
        fill="none"
        stroke={fill}
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path fill="none" d="M0 0h50v50H0z" />
      <path
        d="M46 9c0-5.161-1-8-6-8H12C6 1 4 2.714 4 8v33c0 3.312 2.688 4 6 4h30c3.312 0 6-.688 6-4V29.846 9z"
        fill="none"
        stroke={fill}
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <circle
        cx={38.5}
        cy={37.5}
        fill="none"
        r={3.5}
        stroke={fill}
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <circle
        cx={11.5}
        cy={37.5}
        fill="none"
        r={3.5}
        stroke={fill}
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path
        d="M46 13h2a1 1 0 011 1v8a1 1 0 01-1 1h-2M4 13H2a1 1 0 00-1 1v8a1 1 0 001 1h2M37 7a1 1 0 01-1 1H15a1 1 0 01-1-1V5a1 1 0 011-1h21a1 1 0 011 1v2zM39 28.922L11 29c-2 0-3-1-3-3V14c0-2 1-3 3-3h28c2 0 3 1 3 3v12c0 2-1.953 2.922-3 2.922z"
        fill="none"
        stroke={fill}
        strokeMiterlimit={10}
        strokeWidth={2}
      />
    </svg>
  )
}

export default SvgComponent
