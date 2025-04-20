import type { Metadata } from "next";
import "../styles/globals.css";
export const metadata: Metadata = {
  title: "Braeden Turner's Personal Portfolio",
  description: "A wonderful website!",
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
