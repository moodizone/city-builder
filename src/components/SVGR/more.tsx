import * as React from "react";

interface Props {
  size?: number;
}

function More({ size = 24 }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      width={size}
      height={size}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0m7 0a2 2 0 1 1 4 0 2 2 0 0 1-4 0m7 0a2 2 0 1 1 4 0 2 2 0 0 1-4 0"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default More;
