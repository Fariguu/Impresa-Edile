"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";

// ==============================================================================
// 🛠️ CONFIGURAZIONE GLOBALE
// ==============================================================================

const STYLE = {
  spacing: "pb-1", 
  
  line: {
    height: "h-[2px]", 
    color: "bg-accent-red", 
    bottom: "bottom-0",
  },

  text: {
    base: "text-muted-foreground",
    hover: "text-foreground", // Rimosso group-hover perché gestiamo via stato React
    active: "text-accent-red font-semibold",
  },
};

// Configurazione Fisica dell'Animazione (Framer Motion)
const LINE_TRANSITION = {
  duration: 0.4, 
  ease: [0.33, 1, 0.68, 1] as const, // "Snappy" ma fluido
};

// ==============================================================================
// LOGICA DEL COMPONENTE
// ==============================================================================

interface HoverLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  active?: boolean;
}

export function HoverLink({ href, children, className, active, ...props }: HoverLinkProps) {
  const [isHovered, setHovered] = useState(false);

  return (
    <Link
      href={href}
      className={cn(
        "relative inline-block overflow-hidden", // Rimosso 'group' non necessario
        STYLE.spacing,
        className
      )}
      {...props}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* --- IL TESTO --- */}
      <span className={cn(
        "relative transition-colors duration-300", 
        // Logica Colori:
        active ? STYLE.text.active : (isHovered ? STYLE.text.hover : STYLE.text.base)
      )}>
        {children}
      </span>

      {/* --- LA LINEA MAGICA (Motion) --- */}
      <motion.span 
        // 1. STATO INIZIALE (Invisibile)
        initial={{ scaleX: 0, originX: 0 }}
        
        // 2. ANIMAZIONE ATTIVA
        animate={{ 
          // Se attivo o hover: Larghezza 100%
          scaleX: active || isHovered ? 1 : 0,
          
          // IL SEGRETO DELL'ORIGIN JUMP:
          // Se stiamo entrando (hover): Origin Sinistra (0) -> Cresce verso DX
          // Se stiamo uscendo (not hover): Origin Destra (1) -> Si ritira verso DX
          // Se è attivo fisso: Origin Sinistra
          originX: active ? 0 : (isHovered ? 0 : 1)
        }}

        // 3. GESTIONE TRANSIZIONI MISTE
        transition={{
          // Animiamo la 'scaleX' fluidamente
          scaleX: LINE_TRANSITION,
          
          // !IMPORTANTE: L'originX deve cambiare ISTANTANEAMENTE (durata 0)
          // Altrimenti la linea "pattina" mentre cambia punto di ancoraggio.
          originX: { duration: 0 } 
        }}

        className={cn(
          "absolute left-0 w-full",
          STYLE.line.bottom,
          STYLE.line.height,
          STYLE.line.color,
        )}
      />
    </Link>
  );
}




