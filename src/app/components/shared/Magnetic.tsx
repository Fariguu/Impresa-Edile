"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, SpringOptions } from "framer-motion";
import { cn } from "@/lib/utils";

// ==============================================================================
// CONFIGURAZIONE FISICA DEFAULT
// ==============================================================================
const DEFAULT_SPRING: SpringOptions = {
  stiffness: 150,
  damping: 15,
  mass: 0.1, // Massa bassa = reazione rapida
};

interface MagneticProps {
  children: React.ReactNode;
  
  /** Quanto forte è l'attrazione (0.1 = debole, 1 = incollato al mouse) */
  intensity?: number; 
  
  /** Configurazione della molla (rimbalzo, velocità) */
  springOptions?: SpringOptions;
  
  /** Classi per il wrapper (es. 'w-fit', 'flex') */
  className?: string; 
  
  /** Se vuoi disabilitare l'effetto su mobile o in certi casi */
  disabled?: boolean;
}

export function Magnetic({
  children,
  intensity = 0.25, // Default bilanciato
  springOptions = DEFAULT_SPRING,
  className,
  disabled = false,
}: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);

  // 1. MOTION VALUES: Gestiscono le coordinate senza re-render React (Performance pura)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // 2. SPRINGS: Rendono il movimento fluido e fisico
  const springX = useSpring(x, springOptions);
  const springY = useSpring(y, springOptions);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled || !ref.current) return;

    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();

    // Calcoliamo il centro dell'elemento
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);

    // Aggiorniamo i valori target (il magnete tira verso il mouse)
    x.set(middleX * intensity);
    y.set(middleY * intensity);
  };

  const handleMouseLeave = () => {
    if (disabled) return;
    // Reset posizione (la molla farà l'animazione di ritorno)
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }} // Applichiamo la fisica
      className={cn("relative w-fit touch-none", className)} // touch-none evita problemi su mobile
    >
      {children}
    </motion.div>
  );
}




