import * as React from "react"

function SvgComponent({color}) {
  return (
    <svg viewBox="0 0 51 46">
      <path
        d="M46.188 4.101c-5.529-5.53-14.495-5.53-20.023 0l-.775.774-.996-.774c-5.529-5.53-14.715-5.53-20.245 0C-1.38 9.63-1.27 18.595 4.26 24.125l18.753 18.643c.671.671 1.4 1.258 2.376 1.766a14.262 14.262 0 002.155-1.766l18.643-18.643c5.53-5.53 5.53-14.495.001-20.024z"
        fill={color}
      />
    </svg>
  )
}

export default SvgComponent
