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
      <body className="min-h-full flex flex-col bg-[#030712] text-[#F9FAFB] selection:bg-blue-500/30 selection:text-blue-200 overflow-x-hidden relative">
        {/* Floating background mesh/orbs for realistic glass blur interactions */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[-10%] left-[5%] w-[50vw] h-[50vw] bg-[#3B82F6]/10 rounded-full blur-[120px] animate-float-slow" />
          <div className="absolute bottom-[10%] right-[-5%] w-[45vw] h-[45vw] bg-[#8B5CF6]/8 rounded-full blur-[140px] animate-float-slower" />
          <div className="absolute top-[40%] right-[15%] w-[35vw] h-[35vw] bg-[#06B6D4]/6 rounded-full blur-[100px] animate-float-slow" />
        </div>
        <div className="relative z-10 flex-grow flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
