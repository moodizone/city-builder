import * as React from "react";
import classNames from "classnames";

import styles from "./styles.module.scss";

function Content({ children }: React.PropsWithChildren) {
  return (
    <section className={classNames("p-3 md:p-5", styles.container)}>
      {children}
    </section>
  );
}

export default Content;
