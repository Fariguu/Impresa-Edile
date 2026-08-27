"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation"; // <--- L'IMPORT FONDAMENTALE
import {
  useScroll,
  useMotionValueEvent,
  motion,
  AnimatePresence,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { MenuToggle } from "@/app/components/shared/MenuToggle";
import { HoverLink } from "@/app/components/shared/HoverLink";
import { Button } from "@/app/components/ui/button";
import { AnimatedThemeToggler } from "@/app/components/ui/animated-theme-toggler";

// ==============================================================================
// 1. LOGO CONFIGURATION
// ==============================================================================

const LOGO_CONFIG = {
  // SETTING: Change this to 'text', 'image', or 'custom'
  type: "text" as "text" | "image" | "custom", // FIX TypeScript

  // OPTION A: Text Logo
  text: {
    main: "Impresa Edile/ MVP ",
    highlight: "",
    className: "text-xl md:text-2xl font-bold tracking-tight",
  },

  // OPTION B: Image File
  image: {
    src: "/logo.svg",
    alt: "Impresa Edile",
    width: 140,
    height: 45,
  },

  // OPTION C: Custom Component
  custom: (
    <div className="size-8 bg-primary rounded-full" /> 
  ),
};

// ==============================================================================
// 2. GLOBAL VISUAL CONFIGURATION
// ==============================================================================

const NAV_CONFIG = {
  style: {
    height: "h-20",
    navBackground: "bg-background/95 backdrop-blur-xl border-b border-border/40",
  },
  animation: {
    hideDuration: 0.10,
    showDuration: 0.10,
    ease: "easeInOut" as const,
  },
  scroll: {
    threshold: 100,
  }
};

// ==============================================================================
// 3. NAVIGATION ITEMS
// ==============================================================================

type NavItem = 
  | { type: "link"; name: string; href: string }
  | { type: "component"; component: React.ReactNode; key: string };

const NAV_ITEMS: NavItem[] = [
  { type: "link", name: "Home", href: "/" },
  { type: "link", name: "Servizi", href: "/servizi" },
  { type: "link", name: "Chi Siamo", href: "/chi-siamo" },
  { type: "link", name: "Contatti", href: "/contatti" },
  { 
    type: "component", 
    key: "cta-btn",
    component: <Button asChild variant="accent" className="px-6"><Link href="/preventivo">Richiedi Preventivo</Link></Button> 
  },
];

// ==============================================================================
// ANIMATION VARIANTS
// ==============================================================================

const menuVariants = {
  initial: { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" },
  animate: { 
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] as const }
  },
  exit: { 
    clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] as const, delay: 0.2 }
  }
};

const linkVariants = {
  initial: { y: "100%" },
  enter: (i: number) => ({
    y: 0,
    transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] as const, delay: 0.05 + (i * 0.1) }
  }),
  exit: (i: number) => ({
    y: "100%",
    transition: { duration: 0.3, ease: [0.76, 0, 0.24, 1] as const, delay: (NAV_ITEMS.length - i) * 0.05 }
  })
};

// ==============================================================================
// NAVBAR COMPONENT
// ==============================================================================

export function Navbar() {
  const { scrollY } = useScroll();
  const pathname = usePathname(); // <--- LEGGE L'URL CORRENTE
  const [hidden, setHidden] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > NAV_CONFIG.scroll.threshold) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <>
      <motion.header
        variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: NAV_CONFIG.animation.hideDuration, ease: NAV_CONFIG.animation.ease }}
        className={cn(
          "fixed top-0 inset-x-0 z-50 w-full transition-all duration-300",
          NAV_CONFIG.style.height,
          NAV_CONFIG.style.navBackground
        )}
      >
        <div className={cn("container mx-auto px-6 flex items-center justify-between", NAV_CONFIG.style.height)}>
          
          {/* LOGO */}
          <Link href="/" className="relative z-50 flex items-center gap-2">
            {LOGO_CONFIG.type === "text" && (
              <span className={cn(LOGO_CONFIG.text.className, "text-foreground")}>
                {LOGO_CONFIG.text.main}
                <span className="text-accent-red">{LOGO_CONFIG.text.highlight}</span>
              </span>
            )}

            {LOGO_CONFIG.type === "image" && (
               <Image 
                 src={LOGO_CONFIG.image.src} 
                 alt={LOGO_CONFIG.image.alt} 
                 width={LOGO_CONFIG.image.width} 
                 height={LOGO_CONFIG.image.height}
                 className="object-contain"
                 priority 
               />
            )}

            {LOGO_CONFIG.type === "custom" && LOGO_CONFIG.custom}
          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => {
              if (item.type === "link") {
                // LOGICA ACTIVE: Se l'URL è uguale all'href del link, è attivo.
                const isActive = pathname === item.href;
                
                return (
                  <HoverLink 
                    key={item.href} 
                    href={item.href}
                    active={isActive} // <--- PASSA LO STATO AL COMPONENTE
                  >
                    {item.name}
                  </HoverLink>
                );
              }
              return <div key={item.key}>{item.component}</div>;
            })}
            
            {/* THEME TOGGLE - Disabilitato */}
            <div style={{ display: 'none' }}>
              <AnimatedThemeToggler className="size-9 flex items-center justify-center rounded-full hover:bg-secondary/20 transition-colors" />
            </div>
          </nav>

          {/* MOBILE: THEME TOGGLE & MENU TOGGLE */}
          <div className="md:hidden relative z-50 flex items-center gap-4">
            <div style={{ display: 'none' }}>
              <AnimatedThemeToggler className="size-9 flex items-center justify-center rounded-full hover:bg-secondary/20 transition-colors" />
            </div>
            <MenuToggle
              isOpen={isMobileMenuOpen}
              toggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </div>
        </div>
      </motion.header>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence mode="wait">
        {isMobileMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed inset-0 z-40 bg-background text-foreground flex flex-col items-start justify-center pl-8 md:pl-16 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {NAV_ITEMS.map((item, i) => (
                <div key={item.type === 'link' ? item.href : item.key} className="overflow-hidden">
                  <motion.div
                    custom={i}
                    variants={linkVariants}
                    initial="initial"
                    animate="enter"
                    exit="exit"
                  >
                    {item.type === "link" ? (
                      <HoverLink 
                        href={item.href}
                        // Anche in mobile possiamo evidenziare la pagina corrente se vuoi
                        active={pathname === item.href} 
                        className="text-5xl font-black tracking-tighter text-left py-2 pr-2 w-fit block"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </HoverLink>
                    ) : (
                      <div className="mt-4 py-2" onClick={() => setIsMobileMenuOpen(false)}>
                         {React.cloneElement(item.component as React.ReactElement<{ size?: string; className?: string }>, { 
                            size: "lg", 
                            className: "rounded-full text-lg px-8 py-6" 
                         })}
                      </div>
                    )}
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}