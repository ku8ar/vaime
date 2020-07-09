import * as React from "react"

function SvgComponent({size, ...props}) {
  return (
    <svg height={size} viewBox="0 0 24 24" width={size} {...props}>
      <g>
        <path
          d="M11.05 14.928v7.092H8.495v.995h7.068v-.995H13v-7.095c5.13-.358 7.148-3.527 6-7.967-.557-2.152-1.465-4.387-2.828-5.946L7.85.987C6.474 2.547 5.56 4.795 5 6.958c-1.15 4.445.882 7.628 6.05 7.97z"
        />
      </g>
    </svg>
  )
}

export default SvgComponent
