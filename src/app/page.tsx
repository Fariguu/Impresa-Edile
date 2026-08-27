"use client";

import { motion } from "framer-motion";
import { Building2, Hammer, Waves, ArrowRight, Heart, Shield } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/app/components/ui/button";
import { ImageCard } from "@/app/components/ui/image-card";
import { SectionHeader } from "@/app/components/ui/section-header";
import { ProjectCard } from "@/app/components/ui/project-card";
import { SITE_CONFIG } from "@/lib/site-config";

// ==============================================================================
// ANIMATION VARIANTS
// ==============================================================================

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] as const },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

// ==============================================================================
// SERVICE ICONS
// ==============================================================================

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  restauro: <Building2 className="size-16 text-text-primary-dark" />,
  costruzioni: <Hammer className="size-16 text-text-primary-dark" />,
  esterni: <Waves className="size-16 text-text-primary-dark" />,
};

const VALUE_ICONS: Record<string, React.ReactNode> = {
  heart: <Heart className="size-8 text-text-primary-light" />,
  hammer: <Hammer className="size-8 text-text-primary-light" />,
  shield: <Shield className="size-8 text-text-primary-light" />,
};

const VALUE_IMAGES: Record<string, string> = {
  "Maestri della Pietra": "/img/Maestri_della_Pietra.png",
  "Eccellenza Artigianale": "/img/Eccellenza_Artigianale.png",
  "Affidabilità Totale": "/img/Affidabilita.png",
};

const PROJECT_IMAGES: Record<string, string> = {
  "Villa Rossini": "/img/Home_VillaOrsini.png",
  "Trullo dei Fiori": "/img/Home_TrulloDeiFiori.png",
  "Casa Bianca": "/img/Home_CasaBianca.png",
  "Masseria del Sole": "/img/Home_MasseriaDelSole.png",
  "Villa Paradiso": "/img/villaparadisopng.png",
};

// ==============================================================================
// HOMEPAGE COMPONENT - SOMERVILLE STYLE
// ==============================================================================

export default function Home() {
  return (
    <div className="relative">
      
      {/* ========================================================================
          SECTION 1: HERO - Card con Video Placeholder
      ======================================================================== */}
      <section className="pb-40 bg-bg-light">
        <div className="w-[calc(100%-32px)] mx-auto sm:w-[calc(100%-48px)] md:w-[calc(100%-64px)] lg:w-[calc(100%-80px)] xl:w-[calc(100%-96px)] 2xl:w-[calc(100%-115px)] max-w-[3325px] bg-bg-light rounded-b-2xl overflow-hidden relative">
          
          {/* Video */}
          <div className="w-full aspect-video relative overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/img/Bespoke_Villa_Creation_Montage.mp4" type="video/mp4" />
            </video>

            {/* Dark overlay - Layer nero con opacità 25% */}
            <div className="absolute inset-0 z-[5] bg-black/25" />

            {/* Content - Testo overlay sopra il video */}
            <div className="absolute inset-0 z-10 flex items-center justify-center px-6">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="max-w-5xl mx-auto text-center space-y-8 text-text-primary-light"
              >
                
                {/* Main Heading */}
                <motion.h1
                  variants={fadeInUp}
                  className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight"
                >
                  Costruiamo sogni in pietra nella Valle d&apos;Itria
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                  variants={fadeInUp}
                  className="text-xl md:text-2xl text-text-primary-light/90 max-w-3xl mx-auto leading-relaxed"
                >
                  Restauri conservativi e costruzioni chiavi in mano che custodiscono l&apos;anima della Puglia
                </motion.p>

              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================
          SECTION 2: SERVIZI - Grid 3 Colonne con Immagini Arrotondate
      ======================================================================== */}
      <section className="py-32 bg-bg-light">
        <div className="container mx-auto px-6">
          
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <SectionHeader
              title="I Nostri Servizi"
              subtitle="Specializzati in restauro conservativo e costruzioni di eccellenza"
            />
          </motion.div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {SITE_CONFIG.services.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <ImageCard
                  title={service.title}
                  description={service.description}
                  imageSrc={service.image}
                  imageAlt={service.title}
                  icon={SERVICE_ICONS[service.id]}
                />
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-center mt-16"
          >
            <Button asChild variant="pill-dark" size="lg">
              <Link href="/servizi">
                Scopri tutti i servizi
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ========================================================================
          SECTION 3: VALORI - Card Scura su Sfondo Chiaro
      ======================================================================== */}
      <section className="py-32 bg-bg-light">
        <div className="w-[calc(100%-32px)] mx-auto sm:w-[calc(100%-48px)] md:w-[calc(100%-64px)] lg:w-[calc(100%-80px)] xl:w-[calc(100%-96px)] 2xl:w-[calc(100%-115px)] max-w-[3325px] bg-bg-dark text-text-primary-light rounded-2xl p-12">
            
            {/* Top Section - Title + Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-20"
            >
              <div className="max-w-3xl">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                  Creiamo eccellenza attraverso maestria e dedizione
                </h2>
                <p className="text-xl text-text-primary-light/80 leading-relaxed">
                  Ogni progetto è un&apos;opera d&apos;arte, dove tradizione e innovazione si incontrano per creare dimore senza tempo.
                </p>
              </div>
              <Button asChild variant="pill-light" size="lg" className="shrink-0">
                <Link href="/chi-siamo">
                  Chi Siamo
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
            </motion.div>

            {/* Values Grid */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto"
            >
              {SITE_CONFIG.values.map((value) => (
                <motion.div
                  key={value.id}
                  variants={fadeInUp}
                  className="group"
                >
                  {/* Image */}
                  <div className="aspect-[16/10] rounded-2xl mb-6 overflow-hidden relative transition-transform duration-300 group-hover:scale-[1.02]">
                    <Image
                      src={VALUE_IMAGES[value.title] || "/img/Maestri_della_Pietra.png"}
                      alt={value.title}
                      fill
                      className={`object-cover ${
                        value.title === "Maestri della Pietra" ? "object-[center_top]" : "object-center"
                      }`}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 size-12 rounded-full bg-accent-red/20 flex items-center justify-center">
                      {VALUE_ICONS[value.icon]}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                      <p className="text-text-primary-light/80 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
      </section>

      {/* ========================================================================
          SECTION 4: PROCESSO - 2 Colonne Layout
      ======================================================================== */}
      <section className="py-32 bg-bg-light">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto items-center">
            
            {/* Left - Title */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
                {SITE_CONFIG.process.title}
              </h2>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                {SITE_CONFIG.process.description}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Con oltre 100 progetti realizzati, abbiamo perfezionato un approccio che garantisce risultati eccellenti, 
                rispetto dei tempi concordati e la massima serenità per i nostri clienti durante tutto il percorso costruttivo.
              </p>
              
              <div className="pt-4">
                <Button asChild variant="pill" size="lg">
                  <Link href="/servizi">
                    {SITE_CONFIG.process.cta}
                    <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================================
          SECTION 5: PROGETTI - Card Scura su Sfondo Chiaro
      ======================================================================== */}
      <section className="pt-40 pb-40 bg-bg-light">
        <div className="w-[calc(100%-32px)] mx-auto sm:w-[calc(100%-48px)] md:w-[calc(100%-64px)] lg:w-[calc(100%-80px)] xl:w-[calc(100%-96px)] 2xl:w-[calc(100%-115px)] max-w-[3325px] bg-bg-dark text-text-primary-light rounded-2xl p-12">
          
          {/* Projects Grid - 3x2 Layout */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto"
          >
            {/* Blocco Testo - Prima riga, prima colonna */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col justify-between space-y-6"
            >
              <div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                  Progetti Realizzati
                </h2>
                <p className="text-xl text-text-primary-light/80 leading-relaxed">
                  Ogni progetto racconta una storia unica di passione, maestria e dedizione. 
                  Scopri alcune delle dimore che abbiamo creato nella Valle d&apos;Itria.
                </p>
              </div>
              <Button asChild variant="pill-light" size="lg" className="w-fit">
                <Link href="/servizi">
                  Vedi tutti i progetti
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
            </motion.div>

            {/* Progetti 1-5 */}
            {SITE_CONFIG.projects.slice(0, 5).map((project) => (
              <motion.div key={project.id} variants={fadeInUp}>
                <ProjectCard
                  imageSrc={PROJECT_IMAGES[project.client] || project.image}
                  imageAlt={project.client}
                  client={project.client}
                  location={project.location}
                  description={project.description}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

    </div>
  );
}



