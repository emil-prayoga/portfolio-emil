import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Emil Prayoga Albani — Frontend Developer",
  description: "Frontend Developer & UI/UX Enthusiast. Saya membangun pengalaman web yang responsif, intuitif, dan punya karakter.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
