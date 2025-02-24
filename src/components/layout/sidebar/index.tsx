"use client";
import Link from "next/link";
import * as React from "react";
import classNames from "classnames";

import styles from "./styles.module.scss";
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
      <Link
        href={"/create"}
        className="w-full p-3 text-center rounded transition-colors duration-200
        bg-blue-800 text-white hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-700 ${className}"
      >
        {"New house"}
      </Link>
    </section>
  );
}

export default Sidebar;
