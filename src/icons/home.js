import * as React from "react"

function SvgComponent({ size, ...props }) {
  return (
    <svg viewBox="0 0 64 64"
    height={size}
    width={size}
    {...props}>
      <path d="M13.068 36.785v19.236c0 .483.392.876.876.876h20.645V39.479h9.698v17.418h5.769a.876.876 0 00.876-.876V36.785l-18.921-18.84-18.943 18.84zm15.396 10.809h-8.751V39.48h8.751v8.114z" />
      <path d="M54.767 29.868L32.001 7.103l-10.74 10.739v-4.726a2 2 0 00-4 0v8.726l-8.027 8.026a2.5 2.5 0 001.768 4.268c.64 0 1.279-.244 1.768-.731l19.232-19.23 19.23 19.229a2.501 2.501 0 003.535-3.536z" />
    </svg>
  )
}

export default SvgComponent
