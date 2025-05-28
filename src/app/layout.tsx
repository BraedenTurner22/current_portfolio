import type { Metadata } from "next";
import "../styles/globals.css";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Braeden Turner",
  description: "Welcome to my portfolio!",
  icons: {
    icon: "/icon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
