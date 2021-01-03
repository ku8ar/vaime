import * as React from "react"

function SvgComponent({ size, ...props }) {
  return (
    <svg viewBox="0 0 80 70" height={size} width={size} {...props}>
      <title />
      <path d="M5.4 5.6v58.8h69.1V5.6H5.4zm66.2 55.8H8.4V8.6h63.1v52.8z" />
      <path d="M28.3 27.7L39 38.4l2.2-2.1-12.9-12.9-12.9 12.9 2.2 2.1zM41.8 27.7l20.5 20.5 2.1-2.1-22.6-22.7-6.5 6.5 2.1 2.1zM59.4 23.1c3 0 5.4-2.4 5.4-5.4s-2.4-5.4-5.4-5.4-5.4 2.5-5.4 5.4 2.5 5.4 5.4 5.4zm0-7.7c1.3 0 2.4 1.1 2.4 2.4 0 1.3-1.1 2.4-2.4 2.4-1.3 0-2.4-1.1-2.4-2.4 0-1.4 1.1-2.4 2.4-2.4 0-.1 0-.1 0 0z" />
    </svg>
  )
}

export default SvgComponent
