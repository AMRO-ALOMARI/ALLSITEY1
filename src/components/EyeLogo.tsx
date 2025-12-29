import React from "react";

export const EyeLogo: React.FC<{ size?: number; className?: string }> = ({
  size = 200,
  className,
}) => {
  return (
    <div
      className={className}
      style={{ width: size, height: size, display: "inline-block" }}
    >
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <circle
          cx="100"
          cy="100"
          r="80"
          fill="none"
          stroke="#F5F5F0"
          strokeWidth="8"
        />
        <circle cx="100" cy="100" r="25" fill="#F5F5F0" />
        <line
          x1="20"
          y1="60"
          x2="35"
          y2="60"
          stroke="#F5F5F0"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <line
          x1="20"
          y1="100"
          x2="40"
          y2="100"
          stroke="#F5F5F0"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <line
          x1="20"
          y1="140"
          x2="40"
          y2="140"
          stroke="#F5F5F0"
          strokeWidth="6"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};


