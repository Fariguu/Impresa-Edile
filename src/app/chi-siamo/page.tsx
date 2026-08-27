"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/app/components/ui/button";
import { SectionHeader } from "@/app/components/ui/section-header";
import { SITE_CONFIG } from "@/lib/site-config";

const VALUE_IMAGES: Record<string, string> = {
  "Maestri della Pietra": "/img/Maestri_della_Pietra.png",
  "Eccellenza Artigianale": "/img/Eccellenza_Artigianale.png",
  "Affidabilità Totale": "/img/Affidabilita.png",
};

export default function ChiSiamoPage() {
  return (
    <div className="relative">
      
      {/* HERO */}
      <section className="relative pt-32 pb-20 bg-bg-light">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center space-y-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Chi Siamo
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              {SITE_CONFIG.brand.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-28 bg-bg-light">
        <div className="w-[calc(100%-32px)] mx-auto sm:w-[calc(100%-48px)] md:w-[calc(100%-64px)] lg:w-[calc(100%-80px)] xl:w-[calc(100%-96px)] 2xl:w-[calc(100%-115px)] max-w-[3325px] bg-bg-dark text-text-primary-light rounded-2xl p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-bold">Mission</h2>
              <p className="text-xl text-text-primary-light/80 leading-relaxed">
                Custodire l&apos;anima architettonica della Valle d&apos;Itria, trasformando trulli e masserie 
                in dimore di lusso attraverso un processo costruttivo trasparente, artigianale e senza 
                pensieri per il cliente.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-bold">Vision</h2>
              <p className="text-xl text-text-primary-light/80 leading-relaxed">
                Diventare il punto di riferimento a Ostuni per chi cerca l&apos;autenticità della pietra 
                unita al comfort moderno, preservando il patrimonio architettonico pugliese per le 
                generazioni future.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* I NOSTRI VALORI */}
      <section className="py-28 bg-bg-light">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <SectionHeader
              title="I Nostri Valori"
              subtitle="I tre pilastri che guidano ogni nostro progetto"
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {SITE_CONFIG.values.map((valore, i) => (
              <motion.div
                key={valore.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                {/* Image */}
                <div className="aspect-[4/3] rounded-3xl mb-6 overflow-hidden relative">
                  <Image
                    src={VALUE_IMAGES[valore.title] || "/img/Maestri_della_Pietra.png"}
                    alt={valore.title}
                    fill
                    className={`object-cover ${
                      valore.title === "Maestri della Pietra" ? "object-[center_top]" : "object-center"
                    }`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">{valore.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {valore.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LA NOSTRA STORIA */}
      <section className="py-28 bg-bg-light">
        <div className="w-[calc(100%-32px)] mx-auto sm:w-[calc(100%-48px)] md:w-[calc(100%-64px)] lg:w-[calc(100%-80px)] xl:w-[calc(100%-96px)] 2xl:w-[calc(100%-115px)] max-w-[3325px] bg-bg-dark text-text-primary-light rounded-2xl p-12">
          <div className="max-w-5xl mx-auto">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8 mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold">La Nostra Storia</h2>
              <div className="space-y-6 text-xl text-text-primary-light/80 leading-relaxed">
                <p>
                  <strong className="text-text-primary-light font-semibold">Impresa Edile</strong> nasce dalla passione 
                  di <strong className="text-text-primary-light font-semibold">Marco Rossi</strong> per l&apos;architettura 
                  tradizionale pugliese e dalla volontà di preservare un patrimonio unico al mondo.
                </p>
                <p>
                  Con oltre 100 progetti realizzati nella Valle d&apos;Itria, ci siamo specializzati nel 
                  restauro conservativo di trulli storici e nella costruzione di ville e masserie che 
                  rispettano l&apos;identità architettonica del territorio, integrando le moderne tecnologie 
                  e il comfort contemporaneo.
                </p>
                <p>
                  Ogni pietra racconta una storia. Il nostro lavoro è assicurarci che questa storia 
                  continui a vivere, rispettando il passato e guardando al futuro con visione e maestria.
                </p>
              </div>
            </motion.div>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              <div className="text-center p-8 rounded-3xl bg-text-primary-light/5 border-2 border-text-primary-light/10">
                <div className="text-5xl md:text-6xl font-bold text-[#c9b8a8] mb-3">100+</div>
                <div className="text-lg text-text-primary-light/80">Progetti Realizzati</div>
              </div>
              <div className="text-center p-8 rounded-3xl bg-text-primary-light/5 border-2 border-text-primary-light/10">
                <div className="text-5xl md:text-6xl font-bold text-[#c9b8a8] mb-3">15+</div>
                <div className="text-lg text-text-primary-light/80">Anni di Esperienza</div>
              </div>
              <div className="text-center p-8 rounded-3xl bg-text-primary-light/5 border-2 border-text-primary-light/10">
                <div className="text-5xl md:text-6xl font-bold text-[#c9b8a8] mb-3">98%</div>
                <div className="text-lg text-text-primary-light/80">Clienti Soddisfatti</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-bg-light">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold">
              Vuoi Conoscere Meglio il Nostro Lavoro?
            </h2>
            <p className="text-xl text-muted-foreground">
              Contattaci per una consulenza gratuita o per visitare alcuni dei nostri progetti realizzati.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" variant="pill">
                <Link href="/contatti">
                  Contattaci
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
              <Button asChild variant="pill-dark" size="lg">
                <Link href="/servizi">I Nostri Servizi</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
