import type { Metadata } from "next";
import "./globals.css";
import Header from "./_header/header";
import { ThemeProvider } from "@/components/theme-provider"
import 'bootstrap/dist/css/bootstrap.css';
import BootstrapClient from "@/components/BootstrapClient";


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
    <html lang="en" data-bs-theme="dark">
      <body className="overflow-y-hidden overflow-x-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >

          <div>
            <Header />
            <main >
              {children}
              <BootstrapClient />
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
