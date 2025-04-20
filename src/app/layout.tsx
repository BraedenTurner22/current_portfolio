import type { Metadata } from "next";
import "../styles/globals.css";
export const metadata: Metadata = {
  title: "Braeden Turner",
  description: "Welcome to my portfolio!",
  icons: {
    icon: "/icon.ico",
  },
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
