import * as React from "react";
import NL from "next/link";
import classNames from "classnames";
import { useParams } from "next/navigation";

import { HouseType } from "@/components/house";
import More from "@/components/SVGR/more";

interface Props {
  house: HouseType;
  toggleHandler(): void;
}

function Link({ house, toggleHandler }: Props) {
  const { id } = useParams<{ id: HouseType["id"] }>();
  const isActive = id === house.id;
  return (
    <NL
      href={`${house.id}`}
      className={classNames(
        "group flex justify-between items-center p-2 rounded mb-1",
        isActive ? "bg-zinc-800" : "hover:bg-zinc-800"
      )}
    >
      <span className="truncate flex-1 mr-2">{house.name}</span>
      <button
        className="appearance-none invisible group-hover:visible hover:bg-zinc-600 hover:rounded active:bg-zinc-500"
        onClick={(e) => {
          // prevent bubbling since we are using a link
          e.preventDefault();
          e.stopPropagation();
          toggleHandler();
        }}
      >
        <More />
      </button>
    </NL>
  );
}

export default Link;
