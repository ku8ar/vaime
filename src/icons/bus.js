import * as React from "react"

function SvgComponent({ size, ...props }) {
  return (
    <svg
      viewBox="0 0 512 512"
      xmlSpace="preserve"
      height={size}
      width={size}
      {...props}
    >
      <path
        d="M436.3 125H99.9c-23 0-42.6 16.6-46.5 39.2L29.2 305.7c-4.9 28.8 17.3 55.1 46.5 55.1h17.8c0-22.2 18-40.2 40.2-40.2 22.2 0 40.2 18 40.2 40.2h164.3c0-22.2 18-40.2 40.2-40.2 22.2 0 40.2 18 40.2 40.2h17.8c26.1 0 47.2-21.1 47.2-47.2V172.2c-.1-26.1-21.2-47.2-47.3-47.2zm-55.6 53.1c0-7 5.6-12.6 12.6-12.6h29.2c7 0 12.6 5.7 12.6 12.6V241c0 7-5.7 12.6-12.6 12.6h-29.2c-7 0-12.6-5.7-12.6-12.6v-62.9zm-86.2 0c0-7 5.6-12.6 12.6-12.6h29.2c7 0 12.6 5.7 12.6 12.6V241c0 7-5.7 12.6-12.6 12.6h-29.2c-7 0-12.6-5.7-12.6-12.6v-62.9zm-86.1 0c0-7 5.7-12.6 12.6-12.6h29.2c7 0 12.6 5.7 12.6 12.6V241c0 7-5.7 12.6-12.6 12.6H221c-7 0-12.6-5.7-12.6-12.6v-62.9zm-52.5 99.6c-2.9 17.2-19.1 29.9-38.1 29.9H75.7c-2.6 0-4.2-1.2-5.2-2.2-.9-1-1.9-2.7-1.5-5l24.3-129.8c.6-3 3.4-5.2 6.6-5.2h75.2l-19.2 112.3zm279.3 23.9H208.4c-3.9 0-7-3.1-7-7s3.1-7 7-7h226.8c3.9 0 7 3.1 7 7 0 3.8-3.2 7-7 7z"
      />
      <path
        d="M133.7 334.6c-14.5 0-26.2 11.7-26.2 26.2s11.7 26.2 26.2 26.2 26.2-11.7 26.2-26.2-11.8-26.2-26.2-26.2zM378.3 334.6c-14.5 0-26.2 11.7-26.2 26.2s11.7 26.2 26.2 26.2 26.2-11.7 26.2-26.2-11.7-26.2-26.2-26.2z"
      />
    </svg>
  )
}

export default SvgComponent