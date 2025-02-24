import * as React from "react";

interface Props {
  removeHandler(): void;
  resetHandler(): void;
}

function Confirm({ removeHandler, resetHandler }: Props) {
  return (
    <div className="bg-zinc-700 p-3 rounded mb-1">
      <p className="mb-2 text-gray-300 text-sm">
        {"Are you sure you want to delete this house?"}
      </p>
      <div className="flex justify-center items-center space-x-3">
        <button
          type="submit"
          className="py-1 px-3 text-sm font-medium text-center text-white  rounded-lg
           focus:ring-4 focus:outline-none bg-red-500
            hover:bg-red-600 focus:ring-red-900"
          onClick={removeHandler}
        >
          {"Yes"}
        </button>
        <button
          className="py-1 px-3 text-sm font-medium rounded-lg border
          focus:ring-4 focus:outline-none
          focus:z-10 bg-gray-700 text-gray-300 border-gray-500
           hover:text-white hover:bg-gray-600 focus:ring-gray-600"
          onClick={resetHandler}
        >
          {"No"}
        </button>
      </div>
    </div>
  );
}

export default Confirm;
