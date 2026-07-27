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
  title: "Pavan Kumar Gannoju | Software Engineer",
  description: "Software Engineer | Backend & AI Systems | Scalable Applications. Portfolio of Pavan Kumar Gannoju.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased dark`} style={{ colorScheme: 'dark' }}>
      <body className="min-h-full flex flex-col bg-[#0f172a] text-[#cbd5e1] selection:bg-[#3b82f6]/30 selection:text-white overflow-x-hidden relative">
        {/* Solid Background defined in body */}
        <div className="relative z-10 flex-grow flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
