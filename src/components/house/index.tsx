import * as React from "react";

import Window from "./window";
import Door from "./door";
import styles from "./styles.module.scss";

export interface FloorType {
  rooms: number;
  color: string;
}

export interface HouseType {
  id: string;
  name: string;
  floors: FloorType[];
}

function House({ floors }: HouseType) {
  return (
    <div className="p-4">
      <div className={styles.house}>
        {floors.map((floor, index) => {
          const isLastRow = index === floors.length - 1;
          return (
            <div key={index} className="flex items-center justify-around p-3">
              {isLastRow ? <Door /> : null}
              {[...new Array(floor.rooms)].map((_, i) => (
                <Window key={i} />
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default House;
