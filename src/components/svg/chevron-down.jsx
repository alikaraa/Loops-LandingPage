import * as React from "react";

function SvgChevronDown(props) {
  return (
    <svg className="chevron-down_svg__ionicon" viewBox="0 0 512 512" {...props}>
      <path
        fill="none"
        stroke="#FFF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={48}
        d="M112 184l144 144 144-144"
      />
    </svg>
  );
}

export default SvgChevronDown;
