import * as React from "react"

function SvgComponent({ size, ...props }) {
  return (
    <svg viewBox="0 0 32 32" height={size} width={size} {...props}>
      <title />
      <g data-name={20}>
        <path d="M16 3a13 13 0 1013 13A13 13 0 0016 3zm0 24a11 11 0 1111-11 11 11 0 01-11 11z" />
        <path d="M17.17 8.13A5 5 0 0011 13a1 1 0 002 0 3 3 0 113 3 1 1 0 00-1 1v2a1 1 0 002 0v-1.1a5 5 0 002.91-1.78 5.06 5.06 0 001-4.29 5 5 0 00-3.74-3.7zM16.71 22.29A1 1 0 0015 23a1 1 0 00.29.71 1.15 1.15 0 00.33.21 1 1 0 001.3-1.3 1 1 0 00-.21-.33z" />
      </g>
    </svg>
  )
}

export default SvgComponent
