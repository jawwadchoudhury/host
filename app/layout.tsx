import type { Metadata } from "next";
import { Commissioner, Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

const commissioner = Commissioner({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HOST",
  description: "A website from Jawwad Choudhury.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Analytics/>
      <body className={`${commissioner.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
