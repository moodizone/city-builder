import * as React from "react";
import classNames from "classnames";

import styles from "@/components/form/button/styles.module.scss";

function Button({
  className: cls,
  children,
  ...others
}: React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) {
  return (
    <button {...others} className={classNames(styles.btn, cls)}>
      {children}
    </button>
  );
}

export default Button;
