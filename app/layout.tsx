import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ClipsShop",
  description: "ClipsShop - Your Digital Asset Management Solution",
  icons: {
    icon: "https://s3.us-west-1.amazonaws.com/clipshop.assets/Clipshop+Logo.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="https://s3.us-west-1.amazonaws.com/clipshop.assets/Clipshop+Logo.ico" sizes="any" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
