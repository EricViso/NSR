import type { Metadata } from "next";
import { Abel } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const abel = Abel({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Eric Miki | Mapping Alternative Communities",
  description: "Communities are evolving beyond traditional structures. From DAOs to Network States to Digital Nations. Get the complete Alternative Communities Guide with frameworks, case studies, and implementation guides.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body
        className={`${abel.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <Providers>
          <Navigation />
          <main className="pt-16 min-h-screen flex flex-col">
            <div className="flex-1">
              {children}
            </div>
            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  );
}