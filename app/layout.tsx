import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "./components/providers";
import { LanguageProvider } from "./components/LanguageContext"; // Importe o novo provider

// Configuração das fontes
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Portfolio | Gustavo",
  description: "Gustavo's personal portfolio showcasing projects, skills, and experience in software development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          ${poppins.variable} 
          font-poppins antialiased 
          transition-colors duration-500 ease-in-out
          bg-slate-50 text-slate-900 
          dark:bg-slate-950 dark:text-slate-50
        `}
      >
        <Providers>
          {/* O LanguageProvider DEVE envolver o children para a Navbar funcionar */}
          <LanguageProvider>
            <div className="relative min-h-screen overflow-x-hidden">
              {children}
            </div>
          </LanguageProvider>
        </Providers>
      </body>
    </html>
  );
}