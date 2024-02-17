import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dictionary of Color Combinations",
  description: "Web version of the color bible",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + " m-4 lg:m-10"}>
        <h1 className="text-xl font-medium">
          A Dictionary of Color Combinations
        </h1>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
