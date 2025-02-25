"use client";
import * as React from "react";
import { useRouter } from "next/navigation";

import HouseForm from "@/app/create/form";
import { useHouse } from "@/hoc/houseProvider";
import { HouseType } from "@/components/house";

function Create() {
  const router = useRouter();
  const { addHouse } = useHouse();
  const submitHandler = (values: HouseType) => {
    if (values.name) {
      addHouse(values);
      router.push("/");
    }
  };
  return (
    <div className="flex flex-col md:flex-row md:flex-nowrap gap-4">
      <HouseForm submitHandler={submitHandler} />
    </div>
  );
}

export default Create;
