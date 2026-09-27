import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Explore Luxembourg 360",
  description: "Explore Luxembourg through places, landscapes, trails, stories and immersive experiences.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
