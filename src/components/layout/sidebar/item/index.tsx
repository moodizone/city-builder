import * as React from "react";

import { HouseType } from "@/components/house";
import Menu from "@/components/layout/sidebar/menu";
import useClickOutside from "@/hooks/useClickOutside";
import Link from "@/components/layout/sidebar/item/link";
import Confirm from "@/components/layout/sidebar/item/confirm";
import { useHouse } from "@/hoc/houseProvider";
import Form from "@/components/layout/sidebar/item/form";

interface Props {
  house: HouseType;
}

/**
 * 'normal' => user interacts with link component
 * 'rename' => user interacts with input component (rename the house)
 * 'remove' => user interacts with confirm button in order to complete delete (remove the house)
 * @default 'normal'
 */
export type ModeType = "rename" | "normal" | "remove";

function Item({ house }: Props) {
  //================================
  // Init
  //================================
  const { removeHouse, renameHouse, duplicateHouse } = useHouse();
  const [show, setShow] = React.useState(false);
  const [mode, setMode] = React.useState<ModeType>("normal");
  const ref = React.useRef<HTMLLIElement | null>(null);

  //================================
  // Handlers
  //================================
  // house handlers
  const removeHandler = () => {
    removeHouse(house.id);
  };
  const renameHandler = (name: string = house.name) => {
    renameHouse(house.id, name);
    resetHandler()
  };
  const duplicateHandler = () => {
    duplicateHouse(house.id);
    closeHandler();
  };

  // menu handlers
  const toggleHandler = () => {
    setShow((prev) => !prev);
  };
  const closeHandler = () => {
    setShow(false);
  };

  // mode handlers
  const modeHandler = (mode: ModeType) => {
    setMode(mode);
    setShow(false);
  };
  const resetHandler = () => {
    setMode("normal");
    setShow(false);
  };

  // revert all pending actions when user clicks outside
  useClickOutside(ref, resetHandler);

  //================================
  // Subcomponents
  //================================
  const linkContent =
    mode === "normal" ? (
      <Link house={house} toggleHandler={toggleHandler} />
    ) : null;
  const confirmContent =
    mode === "remove" ? (
      <Confirm removeHandler={removeHandler} resetHandler={resetHandler} />
    ) : null;
  const inputContent = mode === "rename" ? <Form initialValue={house.name} renameHandler={renameHandler}/> : null;
  const menuContent = show ? (
    <Menu modeHandler={modeHandler} duplicateHandler={duplicateHandler} />
  ) : null;

  //================================
  // Render
  //================================
  return (
    <li key={house.id} className="relative" ref={ref}>
      {linkContent}
      {menuContent}
      {inputContent}
      {confirmContent}
    </li>
  );
}

export default Item;
