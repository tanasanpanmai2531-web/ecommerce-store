import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ElecLabs Store",
  description: "ร้านค้าออนไลน์สำหรับอุปกรณ์ IoT และ Robotics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  );
}
