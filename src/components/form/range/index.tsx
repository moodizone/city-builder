import classNames from "classnames";
import * as React from "react";

function Range({
  className: cls,
  // exclude `type` since I don't want to overwrite it accidentally
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  type,
  ...others
}: React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>) {
  return (
    <input
      {...others}
      type="range"
      className={classNames(
        "w-full h-2 rounded-lg appearance-none cursor-pointer bg-gray-700",
        cls
      )}
    />
  );
}

export default Range;
