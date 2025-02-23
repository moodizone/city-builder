import React from "react";

function Button({
  className,
  children,
  ...others
}: React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) {
  return (
    <button
      {...others}
      className={`w-full p-3 text-center rounded transition-colors duration-200
        bg-blue-800 text-white hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-700 ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
