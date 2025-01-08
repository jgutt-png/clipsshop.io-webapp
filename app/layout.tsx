import { Inter } from "next/font/google";
import "./app.css";
import { ClientLayout } from "./components/ClientLayout";

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
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
