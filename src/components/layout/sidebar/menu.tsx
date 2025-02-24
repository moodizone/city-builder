import * as React from "react";

import { ModeType } from "./item";

interface Props {
  modeHandler(mode: ModeType): void;
  duplicateHandler(): void;
}

function Menu({ modeHandler, duplicateHandler }: Props) {
  return (
    <div
      className="absolute right-0 w-32 bg-zinc-700 rounded shadow-sm z-10 overflow-hidden"
      role="menu"
    >
      <button
        className="block w-full px-4 py-2 text-sm text-white hover:bg-gray-600 text-left"
        role="menuitem"
        onClick={() => modeHandler("rename")}
      >
        {"Rename"}
      </button>
      <button
        className="block w-full px-4 py-2 text-sm text-white hover:bg-gray-600 text-left"
        role="menuitem"
        onClick={duplicateHandler}
      >
        {"Duplicate"}
      </button>
      <button
        className="block w-full px-4 py-2 text-sm text-red-600 hover:bg-red-100 text-left"
        role="menuitem"
        onClick={() => modeHandler("remove")}
      >
        {"Delete"}
      </button>
    </div>
  );
}

export default Menu;
