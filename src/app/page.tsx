import Link from "next/link";
import House, { type HouseType } from "@/components/house";
import { generateUniqueId, getRandomColor } from "@/utils/random";

const houses: HouseType[] = [...new Array(10)].map((_, i) => ({
  id: generateUniqueId(),
  name: `House ${i}`,
  floors: [getRandomColor()],
}));

export default function Home() {
  return (
    <div>
      <ul className="flex flex-wrap gap-3">
        {houses.map((house) => (
          <li key={house.id} className="rounded shadow-sm">
            <Link href={`${house.id}`}>
              <House {...house} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
