import { Inter } from "next/font/google";
import "./globals.css";
import { ClientLayout } from "./components/ClientLayout";
import Navbar from "./marketplace/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export { metadata } from './metadata';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientLayout>
          <Navbar />
          <main>
            {children}
          </main>
        </ClientLayout>
      </body>
    </html>
  );
}
