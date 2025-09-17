import type { Metadata } from "next";
import { Aldrich, Space_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const aldrich = Aldrich({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: "400",
});

const spaceMono = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Token Gated Website",
  description: "A website with token gated content using Unlock Protocol",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${aldrich.variable} ${spaceMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}