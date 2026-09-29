import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pavan Kumar Gannoju — Backend & Platform Engineer",
  description: "Backend and platform engineering portfolio for Java, Go, Kubernetes, Azure, distributed systems, and AI security.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`} style={{ colorScheme: 'light' }}>
      <body className="min-h-full flex flex-col bg-[#ffffff] text-[#334155] selection:bg-[#1d4ed8]/30 selection:text-white overflow-x-hidden relative">
        <div className="relative z-10 flex-grow flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
