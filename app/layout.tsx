import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pamela Alves Portfolio",
  description: "Portfolio criado pela Pamela Alves",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
