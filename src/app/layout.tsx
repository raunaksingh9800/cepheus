import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cepheus · Hackathon",
  description: `Join us in supporting the future of innovation at the
Cepheus Hackathon on March 7-8, 2025! This 24-
hour coding marathon brings together talented
developers, designers, and problem-solvers to
tackle cutting-edge challenges and create
groundbreaking solutions. As a sponsor, you'll have
the opportunity to engage with top tech talent,
showcase your brand, and contribute to the
advancement of technology. Be a part of this
dynamic event where creativity meets collaboration,
and help shape the next wave of innovation!`,
icons : {icon: "/MAINLOGO.ico"}
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
  <link rel="icon" href="/MAINLOGO.ico" sizes="any" />
  <link rel="icon" type="image/png" href="/MAINLOGO.ico" />
  <link rel="apple-touch-icon" href="/MAINLOGO.ico" />
  <link rel="manifest" href="/site.webmanifest" />
</head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <script defer async src="https://apply.devfolio.co/v2/sdk.js"></script>
      </body>
    </html>
  );
}
