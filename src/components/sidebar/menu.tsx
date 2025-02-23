import * as React from "react";

function Menu() {
  return (
    <div
      className="absolute right-0 w-32 bg-zinc-700 rounded shadow-lg z-10 overflow-hidden"
      role="menu"
    >
      <button
        className="block w-full px-4 py-2 text-sm text-white hover:bg-gray-600 text-left"
        role="menuitem"
      >
        {"Rename"}
      </button>
      <button
        className="block w-full px-4 py-2 text-sm text-white hover:bg-gray-600 text-left"
        role="menuitem"
      >
        {"Archive"}
      </button>
      <button
        className="block w-full px-4 py-2 text-sm text-red-600 hover:bg-red-100 text-left"
        role="menuitem"
      >
        {"Delete"}
      </button>
    </div>
  );
}

export default Menu;
