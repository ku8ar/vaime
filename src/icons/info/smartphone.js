import * as React from "react"

function SvgComponent({size, ...props}) {
  return (
    <svg viewBox="0 0 16 16" width={size} height={size} {...props}>
      <path
        d="M5 0h6c1.113 0 2 .893 2 1.994v12.012c0 1.1-.895 1.994-2 1.994H5c-1.113 0-2-.893-2-1.994V1.994C3 .894 3.895 0 5 0zM4 3v10h8V3zm3 11v1h2v-1H7zM6 1v1h4V1H6zm0 0"
        fillRule="evenodd"
      />
    </svg>
  )
}

export default SvgComponent
