import type { Metadata } from "next";

import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
      <body className="bg-white h-screen">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
