import { motion, MotionConfig } from "framer-motion";

const VARS = {
  // 1. FISICA DELL'ANIMAZIONE
  // Duration: Quanto tempo ci mette (0.5s è "premium", 0.3s è "scattante")
  // Ease: La curva di Bezier. [0.76, 0, 0.24, 1] è molto simile a iOS/Apple.
  ANIMATION: {
    duration: 0.5, 
    ease: [0.76, 0, 0.24, 1] as const, 
  },

  // 2. DIMENSIONI DELLE LINEE (Hamburger)
  // height: spessore della linea (es. h-0.5 o h-1)
  // width: lunghezza della linea (es. w-6 o w-8)
  // color: colore delle linee (es. bg-foreground, bg-black, bg-white)
  STYLE: {
    height: "h-0.5", 
    width: "w-6", 
    color: "bg-foreground", // Usa "bg-white" se il menu è su sfondo scuro
  },

  // 3. POSIZIONAMENTO VERTICALE (Il "Gap")
  // Dove si trovano le linee Top e Bottom all'inizio? 
  // 35% significa che sono distanziate dal centro. 50% è il centro esatto.
  POSITIONS: {
    top: "35%",
    bottom: "35%",
    center: "50%",
  }
};

// ==============================================================================
// LOGICA DEL COMPONENTE (Non toccare se non sai cosa fai)
// ==============================================================================

interface MenuToggleProps {
  isOpen: boolean;
  toggle: () => void;
}

export const MenuToggle = ({ isOpen, toggle }: MenuToggleProps) => {
  return (
    // MotionConfig propaga la configurazione a tutti i figli motion.*
    <MotionConfig transition={VARS.ANIMATION}>
      <motion.button
        initial={false}
        animate={isOpen ? "open" : "closed"}
        onClick={toggle}
        // STILE DEL CERCHIO CONTENITORE
        // size-12: dimensione area cliccabile
        // hover:bg-white/5: leggero feedback al passaggio del mouse
        className="relative size-12 rounded-full bg-white/0 hover:bg-white/5 transition-colors z-50 grid place-items-center cursor-pointer"
        aria-label={isOpen ? "Chiudi menu" : "Apri menu"}
      >
        
        {/* --- LINEA SUPERIORE --- */}
        <motion.span
          // Stile statico (Tailwind)
          className={`absolute ${VARS.STYLE.height} ${VARS.STYLE.width} ${VARS.STYLE.color} rounded-full`}
          
          // Posizione iniziale CSS
          style={{ left: "50%", top: VARS.POSITIONS.top, x: "-50%", y: "-50%" }}
          
          // Animazione
          variants={{
            open: {
              // ARRAY DI KEYFRAMES:
              // 1. Ruota 0 -> 2. Ruota 0 (aspetta) -> 3. Ruota 45 (finale)
              rotate: ["0deg", "0deg", "45deg"],
              // 1. Sta su -> 2. Scende al centro -> 3. Resta al centro
              top: [VARS.POSITIONS.top, VARS.POSITIONS.center, VARS.POSITIONS.center],
            },
            closed: {
              // Al contrario: Ruota da 45 a 0, poi si sposta dal centro in alto
              rotate: ["45deg", "0deg", "0deg"],
              top: [VARS.POSITIONS.center, VARS.POSITIONS.center, VARS.POSITIONS.top],
            },
          }}
        />

        {/* --- LINEA CENTRALE (Quella che sparisce) --- */}
        <motion.span
          className={`absolute ${VARS.STYLE.height} ${VARS.STYLE.width} ${VARS.STYLE.color} rounded-full`}
          style={{ left: "50%", top: "50%", x: "-50%", y: "-50%" }}
          variants={{
            open: {
              width: ["1.5rem", "0rem", "0rem"], // Si stringe fino a sparire
              opacity: 0,
            },
            closed: {
              width: ["0rem", "0rem", "1.5rem"], // Si riallarga
              opacity: 1,
            },
          }}
        />

        {/* --- LINEA INFERIORE --- */}
        <motion.span
          className={`absolute ${VARS.STYLE.height} ${VARS.STYLE.width} ${VARS.STYLE.color} rounded-full`}
          style={{ left: "50%", bottom: VARS.POSITIONS.bottom, x: "-50%", y: "50%" }}
          variants={{
            open: {
              rotate: ["0deg", "0deg", "-45deg"],
              bottom: [VARS.POSITIONS.bottom, VARS.POSITIONS.center, VARS.POSITIONS.center],
            },
            closed: {
              rotate: ["-45deg", "0deg", "0deg"],
              bottom: [VARS.POSITIONS.center, VARS.POSITIONS.center, VARS.POSITIONS.bottom],
            },
          }}
        />
      </motion.button>
    </MotionConfig>
  );
};




