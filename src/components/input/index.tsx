import classNames from "classnames";
import * as React from "react";

interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  // hint error message
  message?: string;
}

function Input({ className: cls, message, ...others }: Props) {
  return (
    <>
      <input
        {...others}
        className={classNames(
          cls,
          `border text-sm rounded-lg focus:ring-red-500
           dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 text-red-500 placeholder-red-500 border-red-500`
        )}
      />
      {message ? (
        <p className="mt-2 text-sm text-red-600 dark:text-red-500">
          <span className="font-medium">{message}</span>
        </p>
      ) : null}
    </>
  );
}

export default Input;
