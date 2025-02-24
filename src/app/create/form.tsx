"use client";
import * as React from "react";

import Label from "@/components/form/label";
import Input from "@/components/form/input";
import { generateUniqueId, getRandomColor } from "@/utils/random";
import Button from "@/components/form/button";
import House, { FloorType, HouseType } from "@/components/house";
import Card from "@/components/card";
import Range from "@/components/form/range";
import { FALLBACK_COLOR, FALLBACK_ROOM, MAX_FLOOR } from "@/constant";

interface Props {
  submitHandler: (v: HouseType) => void;
  initialData?: Partial<HouseType>;
}

function HouseForm({ submitHandler, initialData = {} }: Props) {
  //================================
  // Init
  //================================
  // memoize the house id since don't want to change it on re-renders
  const houseId = React.useMemo(() => {
    if (initialData.id) {
      return initialData.id;
    }
    return generateUniqueId();
  }, [initialData.id]);
  const nameId = React.useId();
  const floorId = React.useId();
  const [name, setName] = React.useState(initialData.name ?? "");
  const [floors, setFloors] = React.useState<FloorType[]>(
    initialData.floors ?? [
      {
        color: FALLBACK_COLOR.id,
        rooms: FALLBACK_ROOM,
      },
    ]
  );

  //================================
  // Handlers
  //================================
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitHandler({
      id: houseId,
      name,
      floors,
    });
  };

  //================================
  // Render
  //================================
  return (
    <>
      <div className="w-1/2">
        <Card title="New House">
          <form onSubmit={onSubmit}>
            <div className="flex flex-col gap-y-3">
              <div>
                <Label htmlFor={nameId}>{"House name"}</Label>
                <Input
                  name={"name"}
                  id={nameId}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor={floorId}>{"Floor"}</Label>
                <Range
                  id={floorId}
                  min={1}
                  max={MAX_FLOOR}
                  value={floors.length}
                  step={1}
                  onChange={(e) => {
                    const oldLength = floors.length;
                    const newLength = +e.target.value;

                    if (newLength > oldLength) {
                      const diff = newLength - oldLength;
                      const newFloors = [...floors];
                      for (let i = 0; i < diff; i++) {
                        newFloors.push({
                          color: getRandomColor(),
                          rooms: FALLBACK_ROOM,
                        });
                      }
                      setFloors(newFloors);
                    } else {
                      setFloors(floors.slice(0, newLength));
                    }
                  }}
                />
              </div>
              <div>
                <Button>{initialData.id ? "Update" : "Create"}</Button>
              </div>
            </div>
          </form>
        </Card>
      </div>
      <div className="w-1/2">
        <Card title={name}>
          <House floors={floors} />
        </Card>
      </div>
    </>
  );
}

export default HouseForm;
