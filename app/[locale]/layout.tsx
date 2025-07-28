import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import "./globals.css";
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";

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
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: "en" | "uk" }>;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <TanStackProvider>
          <Header params={params} />
          <main>{children}</main>
          <Footer params={params} />
        </TanStackProvider>
      </body>
    </html>
  );
}
