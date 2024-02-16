import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_header/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stephen Dillon",
  description: "Stephen Dillon Personal Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header title="Welcome to your Next.js app!" />
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            {children}
        </main>
      </body>
    </html>
  );
}
