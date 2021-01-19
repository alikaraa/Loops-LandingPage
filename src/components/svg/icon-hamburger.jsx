import * as React from "react";

function SvgIconHamburger(props) {
  return (
    <svg width={24} height={16} {...props}>
      <path
        d="M0 0h24v2H0zm0 7h24v2H0zm0 7h24v2H0z"
        fill="#FFF"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgIconHamburger;
