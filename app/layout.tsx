import type { Metadata } from "next";
import { Martian_Mono } from "next/font/google";
import "./globals.css";

//components
import Header from "./components/ui/Header";

const martianMono = Martian_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-martianMono",
});

export const metadata: Metadata = {
  title: "Tarek GOUFA",
  description: "Welcome to my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className={martianMono.variable}>
        <Header />
        {children}
      </body>
    </html>
  );
}
