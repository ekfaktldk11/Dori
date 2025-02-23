import * as React from "react";
const SVG_DRAWER: React.FC<{ color?: string }> = ({ color = "#000000" }) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 14 12"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 2H12M2 6H12M2 10H12"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SVG_DRAWER;
