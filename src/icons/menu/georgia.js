import * as React from "react"

function SvgComponent({ size, fill = 'white', ...props }) {
  return (
    <svg
      id="prefix__Layer_1"
      viewBox="0 0 128 128"
      xmlSpace="preserve"
      height={size}
      width={size}
      {...props}
    >
      <style>{`.prefix__st3{fill:transparent}.prefix__st24{fill:${fill}}`}</style>
      <path
        className="prefix__st3"
        d="M57.8 14.4v43.4H14.4c.8-6.8 3-13.1 6.3-18.8 7.7-13.2 21.2-22.6 37.1-24.6zM113.6 57.8H70.3V14.4c15.9 2 29.4 11.4 37.1 24.6 3.2 5.6 5.4 12 6.2 18.8zM113.6 70.3c-.8 6.8-3 13.1-6.3 18.8-7.7 13.2-21.2 22.6-37.1 24.6V70.3h43.4zM57.8 70.3v43.4c-15.9-2-29.4-11.4-37.1-24.6-3.3-5.6-5.5-12-6.3-18.8h43.4z"
      />
      <path
        d="M114 64c0 2.1-.1 4.2-.4 6.3H70.3v43.4c-2 .3-4.1.4-6.3.4-2.1 0-4.2-.1-6.3-.4V70.3H14.4c-.3-2-.4-4.1-.4-6.3s.1-4.2.4-6.3h43.4V14.4c2.1-.3 4.1-.4 6.3-.4 2.1 0 4.2.1 6.3.4v43.4h43.4c.1 2 .2 4.1.2 6.2z"
        fill="#231f20"
      />
      <path
        className="prefix__st24"
        d="M114 64c0 2.1-.1 4.2-.4 6.3H70.3v43.4c-2 .3-4.1.4-6.3.4-2.1 0-4.2-.1-6.3-.4V70.3H14.4c-.3-2-.4-4.1-.4-6.3s.1-4.2.4-6.3h43.4V14.4c2.1-.3 4.1-.4 6.3-.4 2.1 0 4.2.1 6.3.4v43.4h43.4c.1 2 .2 4.1.2 6.2z"
      />
      <path
        className="prefix__st24"
        d="M46.1 40.6V42h-5.5v5.6h-1.4V42h-5.6v-1.4h5.6V35h1.4v5.6zM46.1 86.5v1.4h-5.5v5.6h-1.4v-5.6h-5.6v-1.4h5.6v-5.6h1.4v5.6zM98.2 86.5v1.4h-5.6v5.6h-1.4v-5.6h-5.5v-1.4h5.5v-5.6h1.4v5.6zM98.2 40.6V42h-5.6v5.6h-1.4V42h-5.5v-1.4h5.5V35h1.4v5.6z"
      />
      <circle
        cx={65}
        cy={65}
        fill="none"
        r={52}
        stroke={fill}
        strokeWidth={4}
      />
    </svg>
  )
}

export default SvgComponent
