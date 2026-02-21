"use client";

import { useEffect, useCallback } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // 1. Inicializa o Lenis
    const lenis = new Lenis({
      duration: 1.2,
      lerp: 0.1,
      smoothWheel: true,
    });

    // 2. Função de animação
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // 3. Captura TODOS os cliques em links de âncora
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");

      if (anchor && anchor.getAttribute("href")?.startsWith("#")) {
        e.preventDefault();
        const id = anchor.getAttribute("href");
        if (id) {
          // O Lenis faz o scroll suave programaticamente
          lenis.scrollTo(id, {
            offset: -80, // Ajuste isso se você tiver um Navbar fixo no topo
            duration: 1.5,
          });
        }
      }
    };

    window.addEventListener("click", handleAnchorClick);

    return () => {
      window.removeEventListener("click", handleAnchorClick);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}