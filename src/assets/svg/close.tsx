import * as React from "react";
const SVG_CLOSE: React.FC<{ color?: string }> = ({ color = "#000000" }) => (
  <svg
    width={24}
    height={24}
    viewBox="-0.5 0 25 25"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 21.32L21 3.32001"
      stroke={color}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M3 3.32001L21 21.32"
      stroke={color}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
export default SVG_CLOSE;
