import * as React from "react"

function SvgComponent({size, ...props}) {
  return (
    <svg viewBox="0 0 95 47" width={size} height={size} {...props}>
      <path
        d="M.743 1.004v.438h93.832l-.014-.427-.013-.427L47.646.577.743.565v.439m4.826 6.73c-.012.032.815 3.59 1.838 7.907l1.858 7.85 2.31.012 2.31.012L15.31 17.2l1.78-7.885c.195-.863.347-1.585.337-1.604-.035-.065-4.66-.042-4.71.023-.024.032-.302 1.196-.617 2.588-.314 1.392-.577 2.514-.583 2.494-.006-.02-.274-1.16-.595-2.53-.322-1.372-.605-2.52-.63-2.552-.036-.045-.568-.058-2.374-.058-1.82 0-2.333.013-2.348.058m22.216-.021c-.013.02-.876 3.547-1.92 7.838-1.043 4.29-1.908 7.838-1.922 7.882-.024.077.107.081 2.398.081 2.269 0 2.426-.005 2.449-.08.03-.097.582-2.541.582-2.575 0-.013.775-.023 1.721-.023h1.722l.271 1.19c.15.653.29 1.256.313 1.338l.04.15h2.377c1.974 0 2.375-.01 2.375-.063 0-.086-3.595-15.682-3.627-15.734-.032-.05-6.747-.055-6.78-.004m17.77.02c-.011.032-.016 3.591-.01 7.908l.012 7.85 2.39.012 2.39.012-.012-7.908-.011-7.908-2.368-.012c-1.87-.01-2.373 0-2.39.046m13.262-.027c-.017.018-.031 3.582-.031 7.92v7.888h4.801l.012-3.89.012-3.889.805 1.385c.442.761.83 1.422.86 1.468.05.074.169-.104.961-1.431l.905-1.516v3.937l.001 3.936H71.9l-.012-7.907-.012-7.908-2.29-.012c-2.136-.011-2.294-.006-2.358.07-.038.044-.481.783-.984 1.642l-.915 1.561-.403-.684a535.09 535.09 0 01-.954-1.63l-.552-.947-2.286-.012c-1.257-.006-2.3.002-2.317.02m21.61 0c-.018.017-.032 3.58-.032 7.919v7.888h8.958V19.497H85.198V17.604h2.91l-.012-1.997-.012-1.997-1.443-.013-1.443-.012v-1.892h4.156l-.011-1.997L89.33 7.7l-4.436-.012c-2.44-.006-4.45.003-4.467.02m-48.911 7.45c.22.977.41 1.814.424 1.858.022.075-.038.081-.839.081-.798 0-.86-.006-.842-.081.012-.044.206-.885.431-1.868.226-.982.414-1.782.419-1.777.004.005.187.809.407 1.787m34.777 13.806c-1.758.312-4.69 4.812-5.27 8.089-.373 2.101.532 3.448 2.403 3.576 1.79.122 3.901-1.811 3.921-3.59.009-.773-.259-.743-.945.103-.878 1.08-1.905 1.613-2.255 1.168-.258-.327-.231-1.575.058-2.79.644-2.701 2.176-6.125 2.04-4.56-.125 1.436-.67 3.275-1.413 4.764-.514 1.028-.492.964-.367 1.09.314.313 1.295-.247 2.09-1.192 2.343-2.79 2.175-7.089-.262-6.658m-37.037.142c-.548.072-.889.254-1.367.732-.993.991-1.003 1.782-.023 1.966.363.068 1.734.01 2.3-.098.124-.024.124-.022-.215.76-1.191 2.751-2.153 5.757-2.228 6.966-.088 1.404 1.205 1.637 2.755.497.548-.404.71-.868 1.731-4.985.164-.66.382-1.499.484-1.862.298-1.058.313-1.163.207-1.379l-.09-.182.486-.096c.92-.182 1.174-.38 1.326-1.036.108-.468-.035-.782-.434-.953-.41-.175-4.186-.428-4.932-.33m18.789 3.263c-.852.364-1.136 2.514-.687 5.193.604 3.605 1.53 4.046 3.551 1.693 1.198-1.393 2.38-3.111 2.749-3.99.474-1.136.162-2.792-.527-2.792-.371 0-.503.211-1.538 2.475-.301.658-.733 1.594-.96 2.081l-.413.885-.03-1.993c-.037-2.517-.087-2.849-.485-3.226-.363-.343-1.224-.513-1.66-.326m9.979.076c-1.661.407-3.024 1.605-3.88 3.412-2.06 4.35 1.199 6.345 5.177 3.17.927-.74 1.1-1.011.802-1.261-.365-.307-.583-.27-1.367.235-1.25.803-1.919.93-2.195.414-.06-.114-.036-.13.133-.082.6.173 2.025-.754 2.828-1.84 1.642-2.222.762-4.6-1.498-4.048m-23.072.05c-.672.248-1.146 1.147-1.655 3.141-.982 3.85-.557 5.69 1.122 4.857 1.026-.509 1.158-.858 1.347-3.587.073-1.052.152-1.673.262-2.055l.053-.184.089.2c.066.147.1.385.134.923.069 1.086.175 1.377.45 1.234.404-.208.803-1.2.936-2.323.223-1.895-.395-2.813-1.284-1.903l-.31.317-.057-.163c-.15-.439-.61-.631-1.087-.456m8.226-.02c-3.806.422-7.34 6.128-4.902 7.918 1.29.946 2.647.42 4.68-1.814l.347-.381.028.542c.108 2.082 1.43 2.614 3.03 1.219l.206-.179-.103-.353c-.184-.636-.26-2.396-.15-3.457.07-.66-.011-.834-.414-.89l-.226-.03.087-.17c.715-1.401-.599-2.623-2.583-2.404m14.858 1.208c.31.387-.134 2.394-.749 3.381-.249.4-.755.897-.816.802-.387-.611 1.144-4.705 1.565-4.183m-15.212.072c.359.397.289 1.249-.171 2.087-.327.596-.084.732.857.482.135-.036.258-.066.274-.066.134-.002-1.618 1.55-2.062 1.826-1.206.752-1.53-.93-.516-2.68.645-1.114 1.403-1.887 1.618-1.649M.744 46.348v.438H94.57v-.877H.743v.439"
        fillRule="evenodd"
      />
    </svg>
  )
}

export default SvgComponent
