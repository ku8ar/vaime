import * as React from "react"

function SvgComponent({size, ...props}) {
  return (
    <svg viewBox="0 0 64 64" width={size} height={size} {...props}>
      <defs>
        <style>
          {
            `.prefix__cls-1{fill:none;stroke:${props.fill};stroke-linejoin:round;stroke-width:2px}`
          }
        </style>
      </defs>
      <title />
      <g data-name="Layer 5" id="prefix__Layer_5">
        <path
          className="prefix__cls-1"
          d="M14 50h48v6H14zM60 56v6h-4v-6M20 56v6h-4v-6M60 50v-4a2 2 0 00-2-2H18a2 2 0 00-2 2v4M54 44v-5a1 1 0 00-1-1H41a1 1 0 00-1 1v5M36 44v-5a1 1 0 00-1-1H23a1 1 0 00-1 1v5"
        />
        <path
          className="prefix__cls-1"
          d="M58 44v-8a4 4 0 00-4-4H22a4 4 0 00-4 4v8M33.42 32A18 18 0 1018 37.89M20 2v5M2 20h5M33 20h5"
        />
        <path
          className="prefix__cls-1"
          d="M29 20h-9v-7M41 20h7l-6 6h7M62 16h-7l6-6h-7"
        />
      </g>
    </svg>
  )
}

export default SvgComponent
