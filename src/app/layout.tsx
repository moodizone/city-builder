import type { Metadata } from "next";

import Sidebar from "@/components/sidebar";
import Content from "@/components/content";
import "./../styles/globals.scss";
import { HouseType } from "@/components/house";
import { generateUniqueId, getRandomColor } from "@/utils/random";
import { HouseProvider } from "@/hoc/houseProvider";

export const metadata: Metadata = {
  title: "City builder",
  description: "Allows users to dynamically construct and customize houses",
};

const houses: HouseType[] = [...new Array(10)].map((_, i) => ({
  id: generateUniqueId(),
  name: `House ${i}`,
  floors: [getRandomColor()],
}));

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
