import * as React from "react"
const FoodIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={50}
    height={50}
    fill="none"
    {...props}
  >
    <path
      fill="url(#a)"
      fillRule="evenodd"
      d="M25 50c13.807 0 25-11.193 25-25S38.807 0 25 0 0 11.193 0 25s11.193 25 25 25Z"
      clipRule="evenodd"
    />
    <defs>
      <pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#b" transform="matrix(.00063 0 0 .00063 0 -.125)" />
      </pattern>
      <image
        id="b"
        width={1600}
        height={2000}
      />
    </defs>
  </svg>
)
export default FoodIcon