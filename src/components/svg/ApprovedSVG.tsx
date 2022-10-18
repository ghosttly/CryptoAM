import React from "react";

export const ApprovedSVG: React.FC<{ color: string }> = ({ color }) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5 14L9 17L18 6" stroke={color} stroke-width="2" />
    </svg>
  );
};
