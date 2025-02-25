"use client";
import Link from "next/link";
import House from "@/components/house";
import { useHouse } from "@/hoc/houseProvider";
import Card from "@/components/card";

export default function Home() {
  const { list } = useHouse();

  return (
    <div>
      <ul className="flex justify-center sm:justify-start flex-wrap gap-3">
        {list.map((house) => (
          <li key={house.id} className="rounded shadow-sm">
            <Link href={`${house.id}`}>
              <Card title={house.name}>
                <House floors={house.floors} />
              </Card>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
