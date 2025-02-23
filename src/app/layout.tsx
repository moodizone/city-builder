import type { Metadata } from "next";

import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import Content from "@/components/content";
import "./../styles/globals.scss";

export const metadata: Metadata = {
  title: "City builder",
  description: "Allows users to dynamically construct and customize houses",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <section>
          <Sidebar />
        </section>
        <section>
          <Header />
          <Content>{children}</Content>
        </section>
      </body>
    </html>
  );
}
