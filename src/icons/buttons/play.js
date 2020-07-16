import * as React from "react"

function SvgComponent({size, ...props}) {
  return (
    <svg viewBox="0 0 48 48" height={size} width={size} {...props}>
      <path
        d="M24 12.483c-6.35 0-11.517 5.166-11.517 11.517S17.65 35.517 24 35.517 35.517 30.35 35.517 24 30.35 12.483 24 12.483zm4.361 12.141l-6.303 3.68a.723.723 0 01-.72.003.712.712 0 01-.36-.624v-7.366a.71.71 0 01.361-.623.709.709 0 01.72.003l6.302 3.687c.222.13.355.361.356.619 0 .259-.133.49-.356.621z"
        fill="white"
      />
    </svg>
  )
}

export default SvgComponent
