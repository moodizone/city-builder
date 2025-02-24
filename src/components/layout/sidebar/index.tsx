"use client";
import Link from "next/link";
import * as React from "react";
import classNames from "classnames";

import styles from "./styles.module.scss";
import btnStyles from "@/components/form/button/styles.module.scss";
import { useHouse } from "@/hoc/houseProvider";
import Item from "@/components/layout/sidebar/item";

function Sidebar() {
  const { list } = useHouse();

  return (
    <section
      className={classNames(styles.container, "flex flex-col px-3 py-5")}
    >
      <Link href={"/"}>
        <h1 className="font-bold text-lg mb-3">{"City Builder"}</h1>
      </Link>
      <ul>
        {list.map((house) => (
          <Item key={house.id} house={house} />
        ))}
      </ul>
      <Link href={"/create"} className={btnStyles.btn}>
        {"New house"}
      </Link>
    </section>
  );
}

export default Sidebar;
