import * as React from "react"

function SvgComponent({ size, ...props }) {
  return (
    <svg viewBox="0 0 8.467 8.467"
      height={size}
      width={size}
      {...props}>
      <path
        d="M1.314 1.058a.265.265 0 00-.001 0 .265.265 0 00-.254.264v2.383c0 1.544.792 2.5 1.57 3.03.777.53 1.557.67 1.557.67a.265.265 0 00.095 0s.78-.14 1.557-.67c.777-.53 1.57-1.486 1.57-3.03V1.322a.265.265 0 00-.383-.236c-.995.497-1.941.486-2.644.017a.265.265 0 00-.295 0c-.703.47-1.65.48-2.645-.017a.265.265 0 00-.127-.028zm2.92.528c.763.443 1.701.434 2.645.07v2.05c0 1.366-.662 2.129-1.34 2.59-.653.446-1.258.556-1.305.565-.044-.009-.652-.118-1.306-.564-.678-.462-1.34-1.225-1.34-2.592V1.656c.944.364 1.884.374 2.646-.07zm0 .53a.263.266 0 00-.027.001.263.266 0 00-.078.022 3.13 3.13 0 01-1.713.239.263.266 0 00-.297.264v1.1c0 1.184.547 1.79 1.103 2.175.468.324.838.398.95.425a.263.266 0 00.122 0c.112-.027.48-.1.95-.425.555-.384 1.103-.991 1.103-2.175v-1.1a.263.266 0 00-.296-.264 3.133 3.133 0 01-1.715-.24.263.266 0 00-.102-.021zm-.002.526c.505.203 1.041.253 1.59.223v.877c0 1.033-.378 1.394-.873 1.736-.37.256-.563.285-.717.32-.154-.035-.346-.064-.715-.32-.495-.342-.873-.702-.873-1.736v-.877c.549.03 1.084-.02 1.588-.223zm-.003.53a.265.265 0 00-.26.268v.529h-.53a.265.265 0 00-.025 0 .265.265 0 00.026.529h.529v.53a.265.265 0 10.529 0v-.53h.53a.265.265 0 100-.53h-.53V3.44a.265.265 0 00-.27-.268z"
        style={{
          lineHeight: "normal",
          fontVariantLigatures: "normal",
          fontVariantPosition: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantAlternates: "normal",
          fontFeatureSettings: "normal",
          textIndent: 0,
          textAlign: "start",
          textDecorationLine: "none",
          textDecorationStyle: "solid",
          textDecorationColor: "#000",
          textTransform: "none",
          textOrientation: "mixed",
          whiteSpace: "normal",
          shapePadding: 0,
          isolation: "auto",
          mixBlendMode: "normal",
          solidColor: "#000",
          solidOpacity: 1,
        }}
        color="#000"
        fontWeight={400}
        fontFamily="sans-serif"
        overflow="visible"
      />
    </svg>
  )
}

export default SvgComponent
