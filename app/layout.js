import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "./metaData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = Metadata;

export const viewport = {
  themeColor: "#000000",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <Image
          src="/Frame-a2.png"
          alt="Desktop3"
          width={1000}
          height={1000}
          className="w-full h-full object-cover p-0 m-0 -z-10 absolute"
        /> */}

        {children}
        <Analytics />
      </body>
    </html>
  );
}
