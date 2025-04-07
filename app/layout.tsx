import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Real Estate Web",
  description: "Real estate web made by Peter Hajdu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-amber-50">{children}</body>
    </html>
  );
}
