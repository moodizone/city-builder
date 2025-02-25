"use client";
import * as React from "react";
import { useParams, useRouter } from "next/navigation";

import { HouseType } from "@/components/house";
import { useHouse } from "@/hoc/houseProvider";
import HouseForm from "@/app/create/form";

function Details() {
  const router = useRouter();
  const { id } = useParams<{ id: HouseType["id"] }>();
  const { list, updateHouse } = useHouse();
  const submitHandler = (values: HouseType) => {
    if (id && values.name) {
      updateHouse(id, values);
      router.push("/");
    }
  };
  const initialData = list.find((house) => house.id === id);
  return (
    <div className="flex flex-col md:flex-row md:flex-nowrap gap-4">
      <HouseForm submitHandler={submitHandler} initialData={initialData} />
    </div>
  );
}

export default Details;
