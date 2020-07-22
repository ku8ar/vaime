import * as React from "react"

function SvgComponent(props) {
  return (
    <svg width={60} height={60} viewBox="0 0 60 60" cursor="pointer" {...props}>
      <svg width={60} height={60} {...props}>
        <g fill="none" fillRule="evenodd">
          <circle fill="#DE261D" cx={30} cy={30} r={30} />
          <svg x={10} y={10} {...props}>
            <path
              d="M20 0c11.267 0 20 8.253 20 19.4 0 11.147-8.733 19.4-20 19.4a21.81 21.81 0 01-5.79-.769 1.595 1.595 0 00-1.068.079l-3.97 1.752a1.6 1.6 0 01-2.245-1.415l-.109-3.558a1.597 1.597 0 00-.537-1.14C2.39 30.27 0 25.231 0 19.4 0 8.253 8.733 0 20 0zM7.99 25.073c-.564.895.536 1.903 1.378 1.264l6.31-4.79a1.2 1.2 0 011.446-.004l4.673 3.505a3 3 0 004.338-.8l5.875-9.321c.564-.895-.536-1.903-1.378-1.264l-6.31 4.79a1.2 1.2 0 01-1.446.004l-4.673-3.505a3 3 0 00-4.338.8L7.99 25.074z"
              fill="#FFF"
            />
          </svg>
        </g>
      </svg>
    </svg>
  )
}

export default SvgComponent
