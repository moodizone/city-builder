import * as React from "react";
import Link from "next/link";
import classNames from "classnames";

import { HouseType } from "../house";
import More from "../SVGR/more";
import Menu from "./menu";
import useClickOutside from "@/hooks/useClickOutside";

interface Props {
  house: HouseType;
  isActive: boolean;
}

function Item({ house, isActive }: Props) {
  const [show, setShow] = React.useState(false);
  const ref = React.useRef<HTMLLIElement | null>(null);
  useClickOutside(ref, () => setShow(false));

  return (
    <li key={house.id} className="relative" ref={ref}>
      <Link
        href={`${house.id}`}
        className={classNames(
          "group flex justify-between items-center p-2 rounded mb-1",
          isActive ? "bg-zinc-800" : "hover:bg-zinc-800"
        )}
      >
        <span className="truncate flex-1 mr-2">{house.name}</span>
        <button
          className="appearance-none invisible group-hover:visible"
          onClick={(e) => {
            // prevent bubbling since we are using a link
            e.preventDefault();
            e.stopPropagation();
            setShow((prev) => !prev);
          }}
        >
          <More />
        </button>
      </Link>
      {show ? <Menu /> : null}
    </li>
  );
}

export default Item;
