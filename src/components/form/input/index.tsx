import * as React from "react";
import classNames from "classnames";

function Input({
  className: cls,
  ...others
}: React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>) {
  return (
    <input
      {...others}
      className={classNames(
        cls,
        `border text-sm rounded lock w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400
         text-white focus:ring-blue-500 focus:border-blue-500`
      )}
    />
  );
}

export default Input;
