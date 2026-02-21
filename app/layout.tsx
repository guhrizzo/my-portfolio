import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "./components/providers";
import { LanguageProvider } from "./components/LanguageContext";
import MusicPlayer from "./components/MusicPlayer"; // Importando o novo player
import SmoothScroll from "./components/SmoothScrool";

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
          ${geistSans.variable} ${geistMono.variable} ${poppins.variable} 
          font-poppins antialiased transition-colors duration-500
          bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50
        `}
      >
        <Providers>
          <LanguageProvider>
            {/* O SmoothScroll envolve o conteúdo principal */}
            <SmoothScroll>
              <div className="relative min-h-screen">
                {children}
                <MusicPlayer />
              </div>
            </SmoothScroll>
          </LanguageProvider>
        </Providers>
      </body>
    </html>
  );
}