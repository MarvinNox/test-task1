import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";
import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MiniBlog",
  description: "Just smaller blogy",
  openGraph: {
    title: "MiniBlog",
    description: "Just smaller blogy",
    url: "",
    siteName: "MiniBlog",
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
        alt: "Mini Blog",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "MiniBlog",
    description: "Just smaller blogy",
    images: [""],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <TanStackProvider>{children}</TanStackProvider>
      </body>
    </html>
  );
}
