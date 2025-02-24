import type { Metadata } from "next";

import "./../styles/globals.scss";
import Sidebar from "@/components/layout/sidebar";
import Content from "@/components/layout/content";
import { FloorType, HouseType } from "@/components/house";
import { generateUniqueId, getRandomColor } from "@/utils/random";
import { HouseProvider } from "@/hoc/houseProvider";
import { MAX_FLOOR, MAX_ROOM } from "@/constant";

export const metadata: Metadata = {
  title: "City builder",
  description: "Allows users to dynamically construct and customize houses",
};

const houses: HouseType[] = [...new Array(3)].map((_, i) => {
  const floorNumbers = Math.floor(Math.random() * MAX_FLOOR) + 1;
  const floors: FloorType[] = [...new Array(floorNumbers)].map(() => {
    const rooms = Math.floor(Math.random() * MAX_ROOM) + 1;
    return {
      color: getRandomColor(),
      rooms,
    };
  });
  return {
    id: generateUniqueId(),
    name: `House ${i}`,
    floors,
  };
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <HouseProvider list={houses}>
        <body>
          <aside>
            <Sidebar />
          </aside>
          <main>
            <Content>{children}</Content>
          </main>
        </body>
      </HouseProvider>
    </html>
  );
}
