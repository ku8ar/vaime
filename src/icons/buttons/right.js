import * as React from "react"

function SvgComponent({ size, ...props }) {
  return (
    <svg viewBox="0 0 32 32"  width={size} height={size} {...props}>
      <defs>
        <style>
          {
            ".prefix__cls-1{fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px}"
          }
        </style>
      </defs>
      <title />
      <g id="prefix__chevron-right">
        <path className="prefix__cls-1" d="M21 16l-9 9M12 7l9 9" />
      </g>
    </svg>
  )
}

export default SvgComponent
