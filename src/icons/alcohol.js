import * as React from "react"

function SvgComponent({ size, ...props }) {
  return (
    <svg viewBox="0 0 512 512"
      height={size}
      width={size}
      {...props}>
      <path
        d="M432 312V200H288v112a72.019 72.019 0 0056 70.193V456h-16a32 32 0 00-32 32h128a32 32 0 00-32-32h-16v-73.807A72.019 72.019 0 00432 312zm-128 0v-48h112v48a56 56 0 01-112 0zM176 80h-48V24h48zm-40 352H80V264h56zm88-184v240H80v-40h72V248H80a72.018 72.018 0 0148-67.887V96h48v84.113A72.018 72.018 0 01224 248z"
      />
    </svg>
  )
}

export default SvgComponent
