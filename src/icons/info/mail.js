import * as React from "react"

function SvgComponent({size, ...props}) {
  return (
    <svg viewBox="0 0 16 16" width={size} height={size} {...props}>
      <path
        d="M9.732 8.485l4.95 4.242c-.18.168-.423.273-.689.273H2.007a1.01 1.01 0 01-.69-.27l4.951-4.245L8 10zM8 9L1.318 3.273c.18-.168.423-.273.689-.273h11.986c.268 0 .51.103.69.27zm7 3.186l-4.833-4.107L15 3.875v8.31zm-14 0V3.878l4.833 4.2L1 12.187zm0 0"
        fillRule="evenodd"
      />
    </svg>
  )
}

export default SvgComponent
