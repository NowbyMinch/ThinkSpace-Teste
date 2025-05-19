import type { Metadata } from "next";
import { Sidebar } from "./components/sidebar";
import { Afacad } from "next/font/google";
import "./globals.css";

const afacad = Afacad({
  variable: "--font-afacad",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ThinkSpace",
  description: "Educational Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${afacad.variable} font-[Afacad] antialiased flex`}>
        <Sidebar />

        {children}
      </body>
    </html>
  );
}
