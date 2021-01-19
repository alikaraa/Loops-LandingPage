import * as React from "react";

function SvgIconClose(props) {
  return (
    <svg width={20} height={20} {...props}>
      <path
        d="M17.778.808l1.414 1.414L11.414 10l7.778 7.778-1.414 1.414L10 11.414l-7.778 7.778-1.414-1.414L8.586 10 .808 2.222 2.222.808 10 8.586 17.778.808z"
        fill="#FFF"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgIconClose;
