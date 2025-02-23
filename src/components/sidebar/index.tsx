"use client";
import Link from "next/link";
import * as React from "react";
import classNames from "classnames";
import { useParams } from "next/navigation";

import styles from "./styles.module.scss";
import { useHouse } from "@/hoc/houseProvider";
import { HouseType } from "../house";

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
        {list.map((house) => {
          const isActive = house.id === id;
          return (
            <li key={house.id}>
              <Link
                href={`${house.id}`}
                className={`group relative flex justify-between items-center p-2 rounded mb-2 ${
                  isActive ? "bg-slate-700" : "hover:bg-slate-700"
                }`}
              >
                <span className="truncate flex-1 mr-2">{house.name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
      <button>Add new</button>
    </section>
  );
}

export default Sidebar;
