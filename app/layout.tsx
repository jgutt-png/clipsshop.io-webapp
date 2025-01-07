import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./app.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ReUp Living",
  description: "ReUp - Revolutionizing Real Estate Investment",
  icons: {
    icon: [
      { url: 'https://reup-main-website.s3.us-east-2.amazonaws.com/logo.ico.ico', sizes: 'any' },
    ],
    shortcut: 'https://reup-main-website.s3.us-east-2.amazonaws.com/logo.ico.ico',
    apple: 'https://reup-main-website.s3.us-east-2.amazonaws.com/logo.ico.ico',
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
        <link rel="icon" href="https://reup-main-website.s3.us-east-2.amazonaws.com/logo.ico.ico" sizes="any" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
