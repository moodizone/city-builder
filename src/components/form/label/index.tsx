import * as React from "react";
import classNames from "classnames";

function Label({
  className,
  children,
  ...others
}: React.DetailedHTMLProps<
  React.LabelHTMLAttributes<HTMLLabelElement>,
  HTMLLabelElement
>) {
  return (
    <label
      {...others}
      className={classNames(
        "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
        className
      )}
    >
      {children}
    </label>
  );
}

export default Label;
