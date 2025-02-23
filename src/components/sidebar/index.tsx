"use client";
import Link from "next/link";
import * as React from "react";
import classNames from "classnames";
import { useParams } from "next/navigation";

import styles from "./styles.module.scss";
import { useHouse } from "@/hoc/houseProvider";
import { HouseType } from "../house";
import Button from "../button";
import Item from "./item";

function Sidebar() {
  const { list } = useHouse();
  const { id } = useParams<{ id: HouseType["id"] }>();

  return (
    <section
      className={classNames(styles.container, "flex flex-col px-3 py-5")}
    >
      <Link href={"/"}>
        <h1 className="font-bold text-lg mb-3">{"City Builder"}</h1>
      </Link>
      <ul>
        {list.map((house) => (
          <Item key={house.id} house={house} isActive={house.id === id} />
        ))}
      </ul>
      <Button>{"New house"}</Button>
    </section>
  );
}

export default Sidebar;
