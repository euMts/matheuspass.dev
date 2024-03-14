import type { Metadata } from "next";
import { inter, poppins } from "../font/font";

export const metadata: Metadata = {
  title: "Matheus Pass | Donate",
  description: "Engenheiro de Software",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#1c1c1c" />
        <link rel="icon" href="/images/ico/favicon.ico" sizes="any" />
      </head>
      <body className={`${inter.variable} ${poppins.variable}`}>
        {children}
      </body>
    </html>
  );
}
