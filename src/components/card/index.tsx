import * as React from "react";

interface Props {
  title?: string;
}

function Card({ children, title }: React.PropsWithChildren<Props>) {
  return (
    <div className="bg-zinc-700 rounded p-4 ring shadow-sm ring-gray-900/5">
      {title ? (
        <h3 className="text-white text-lg font-bold tracking-tight mb-3">
          {title}
        </h3>
      ) : null}
      {children}
    </div>
  );
}

export default Card;
