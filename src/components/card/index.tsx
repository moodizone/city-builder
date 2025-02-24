import * as React from "react";

interface Props {
  title: string;
}

function Card({ children, title }: React.PropsWithChildren<Props>) {
  return (
    <div className="bg-zinc-700 rounded p-4 ring shadow-xl ring-gray-900/5">
      <h3 className="text-white mt-5 text-base font-medium tracking-tight ">
        {title}
      </h3>
      {children}
    </div>
  );
}

export default Card;
