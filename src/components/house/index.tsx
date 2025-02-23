import * as React from "react";

export interface HouseType {
  id: string;
  name: string;
  floors: string[];
}

function House({ name }: HouseType) {
  return <div className="p-4 bg-slate-500">{name}</div>;
}
export default House;
