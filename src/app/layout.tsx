import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";

import "./globals.css";

import SiteHeader from "@/components/shared/SiteHeader";
import ThemeProvider from "@/components/shared/ThemeProvider";
import MouseFollower from "@/components/shared/MouseFollower";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aayush Basnet | Portfolio",
  description: "UI/UX and Graphics Designer portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={spaceGrotesk.variable}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider>
          <MouseFollower />
          <SiteHeader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}