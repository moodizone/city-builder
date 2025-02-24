import type { Metadata } from "next";

import Sidebar from "@/components/layout/sidebar";
import Content from "@/components/layout/content";
import "./../styles/globals.scss";
import { FloorType, HouseType } from "@/components/house";
import { generateUniqueId, getRandomColor } from "@/utils/random";
import { HouseProvider } from "@/hoc/houseProvider";

export const metadata: Metadata = {
  title: "City builder",
  description: "Allows users to dynamically construct and customize houses",
};

const houses: HouseType[] = [...new Array(10)].map((_, i) => {
  const floorNumbers = Math.floor(Math.random() * 6) + 1;
  const floors: FloorType[] = [...new Array(floorNumbers)].map(() => {
    const rooms = Math.floor(Math.random() * 3) + 1;
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
