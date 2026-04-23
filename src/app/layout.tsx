import type { Metadata } from "next";
import {Inter} from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: {
    template: '%s | devstore',
    default: 'devstore' 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${inter.className}`} lang="pt-br">
      <head>
        <script defer src="https://cdn.counter.dev/script.js" data-id="22668af5-0bdf-4cae-937b-83f9594dc79e" data-utcoffset="-3"></script>
      </head>
      <body
        className="bg-zinc-950 text-zinc-50 antialiased"
      >
        {children}
      </body>
    </html>
  );
}
