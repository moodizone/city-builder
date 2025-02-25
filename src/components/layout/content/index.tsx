"use client";
import * as React from "react";
import classNames from "classnames";

import styles from "./styles.module.scss";
import { useWindowWidth } from "@/hooks/useWindowWidth";
import { MOBILE_VIEWPORT_THRESHOLD } from "@/constant";

function Content({ children }: React.PropsWithChildren) {
  const width = useWindowWidth();
  const isMobileViewport = width <= MOBILE_VIEWPORT_THRESHOLD;
  return (
    <section
      className={classNames("p-3 md:p-5", styles.container, {
        [styles.mobile]: isMobileViewport,
      })}
    >
      {children}
    </section>
  );
}

export default Content;
