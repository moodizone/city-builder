import type { Metadata } from "next";
import "./globals.scss";

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
      <body>{children}</body>
    </html>
  );
}
