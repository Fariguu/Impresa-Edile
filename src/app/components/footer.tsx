"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import Link from "next/link";
import { HoverLink } from "@/app/components/shared/HoverLink";
import { Highlighter } from "@/app/components/ui/highlighter";
import { SITE_CONFIG } from "@/lib/site-config";

// ==============================================================================
// ANIMATION VARIANTS
// ==============================================================================

const footerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
        duration: 0.5, 
        ease: "easeOut" as const
    } 
  },
};

// ==============================================================================
// FOOTER COMPONENT - SOMERVILLE STYLE
// ==============================================================================

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-bg-light overflow-hidden pt-20">
      <div className="w-[calc(100%-32px)] mx-auto sm:w-[calc(100%-48px)] md:w-[calc(100%-64px)] lg:w-[calc(100%-80px)] xl:w-[calc(100%-96px)] 2xl:w-[calc(100%-115px)] max-w-[3325px] bg-bg-dark text-text-primary-light rounded-t-2xl overflow-hidden relative">
        
        {/* WATERMARK BACKGROUND */}
        <div className="absolute inset-0 flex items-end justify-center pb-1 pointer-events-none">
          <div className="text-[22vw] md:text-[20vw] lg:text-[18vw] xl:text-[16vw] 2xl:text-[240px] font-bold text-text-primary-light/5 tracking-tighter whitespace-nowrap scale-100">
            Impresa Edile
          </div>
        </div>

        <div className="relative z-10 px-6">
        
        {/* CTA SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-28 flex flex-col items-center"
        >
          <div className="w-full max-w-fit px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight relative mb-12 text-center">
              {/* 1. Avvolgi il testo e dagli z-10 e relative */}
              <span className="relative z-10">
                Pronto a realizzare il tuo sogno?
              </span>
              
              {/* 2. Il Link sta sotto (z-0 o default) */}
              <Link 
                href="/contatti" 
                className="inline-block ml-2 text-[#4a2f2d] hover:text-[#4a2f2d]/80 transition-colors relative z-0"
              >
                <Highlighter 
                  action="highlight" 
                  color="#c9b8a8" 
                  strokeWidth={2} 
                  animationDuration={800} 
                  iterations={3} 
                  padding={2} // Questo padding è ciò che causa l'espansione
                  isView={true}
                >
                  Parliamone insieme
                </Highlighter>
              </Link>
            </h2>

            {/* NAVIGATION ROW - Allineata dove inizia il titolo */}
            <motion.div
              variants={footerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <nav className="flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-y-4 md:gap-x-12 md:gap-y-6">
                {SITE_CONFIG.navigation.main.map((item) => (
                  <motion.div key={item.href} variants={itemVariants}>
                    <HoverLink 
                      href={item.href}
                      className="text-xl md:text-2xl font-medium text-text-primary-light hover:text-text-primary-light transition-colors"
                    >
                      {item.name}
                    </HoverLink>
                  </motion.div>
                ))}
              </nav>
            </motion.div>
          </div>
        </motion.div>

        {/* BOTTOM BAR */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="py-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
            {/* Copyright - Sinistra su desktop */}
            <p className="text-sm text-text-primary-light/80 text-center lg:text-left order-2 lg:order-1">
              © {currentYear} {SITE_CONFIG.brand.name} {SITE_CONFIG.brand.endorsement}. Nessun diritto riservato :D .
            </p>
            
            {/* Contact Info - Centro su desktop - Leggermente più grande */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 text-base text-text-primary-light/90 order-1 lg:order-2">
              <a 
                href={`mailto:${SITE_CONFIG.brand.email}`}
                className="flex items-center gap-2 hover:text-text-primary-light transition-colors"
              >
                <Mail className="size-4" />
                {SITE_CONFIG.brand.email}
              </a>
              <span className="hidden md:inline">•</span>
              <span>{SITE_CONFIG.brand.address}</span>
              <span className="hidden md:inline">•</span>
              <a 
                href={`tel:${SITE_CONFIG.brand.phone}`}
                className="hover:text-text-primary-light transition-colors"
              >
                {SITE_CONFIG.brand.phone}
              </a>
            </div>

            {/* Legal Links - Destra su desktop */}
            <div className="flex gap-6 justify-center lg:justify-end order-3">
              {SITE_CONFIG.navigation.footer.legal.map((link) => (
                  <HoverLink 
                      key={link.label} 
                      href={link.href} 
                      className="text-sm text-text-primary-light/80 hover:text-text-primary-light transition-colors"
                  >
                      {link.label}
                  </HoverLink>
              ))}
            </div>
          </div>
        </motion.div>
        </div>
      </div>
    </footer>
  );
}
