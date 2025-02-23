import * as React from "react";
import classNames from "classnames";

import styles from "./styles.module.scss";

function Sidebar() {
  return (
    <section
      className={classNames(styles.container, "flex flex-col px-3 py-5")}
    >
      <h1 className="font-bold text-lg mb-3">{"City Builder"}</h1>
      <ul>
        <li>House 1</li>
        <li>House 2</li>
        <li>House 3</li>
      </ul>
      <button>Add new</button>
    </section>
  );
}

export default Sidebar;
