import type { Metadata } from "next";
import {Inter} from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "devstore",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${inter.className}`} lang="pt-br">
      <body
        className="bg-zinc-950 text-zinc-50 antialiased"
      >
        {children}
      </body>
    </html>
  );
}
