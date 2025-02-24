import * as React from "react";
import classNames from "classnames";

function Select({
  className: cls,
  children,
  ...others
}: React.DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>) {
  return (
    <select
      {...others}
      className={classNames(
        `border text-sm rounded block w-full
         p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500`,
        cls
      )}
    >
      {children}
    </select>
  );
}

export default Select;
