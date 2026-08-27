"use client";

import { motion } from "framer-motion";
import { Building2, Hammer, Waves, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/app/components/ui/button";
import { SectionHeader } from "@/app/components/ui/section-header";
import { SITE_CONFIG } from "@/lib/site-config";

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  restauro: <Building2 className="size-16 text-text-primary-dark" />,
  costruzioni: <Hammer className="size-16 text-text-primary-dark" />,
  esterni: <Waves className="size-16 text-text-primary-dark" />,
};

const SERVICE_ICONS_LIGHT: Record<string, React.ReactNode> = {
  restauro: <Building2 className="size-16 text-text-primary-light" />,
  costruzioni: <Hammer className="size-16 text-text-primary-light" />,
  esterni: <Waves className="size-16 text-text-primary-light" />,
};

export default function ServiziPage() {
  return (
    <div className="relative">
      
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 bg-bg-light">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center space-y-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              I Nostri Servizi
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Esperti in restauro conservativo e costruzioni chiavi in mano nella Valle d&apos;Itria
            </p>
          </motion.div>
        </div>
      </section>

      {/* SERVICES DETAILED - Alternating Backgrounds */}
      {SITE_CONFIG.services.map((service, index) => {
        const isEven = index % 2 === 0;
        const isCostruzioni = service.id === "costruzioni";
        
        // Per Costruzioni Ex-novo, usa lo stile card scura
        if (isCostruzioni) {
          return (
            <section
              key={service.id}
              id={service.id}
              className="py-28 bg-bg-light"
            >
              <div className="w-[calc(100%-32px)] mx-auto sm:w-[calc(100%-48px)] md:w-[calc(100%-64px)] lg:w-[calc(100%-80px)] xl:w-[calc(100%-96px)] 2xl:w-[calc(100%-115px)] max-w-[3325px] bg-bg-dark text-text-primary-light rounded-2xl p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto items-center">
                  
                  {/* Content */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6 lg:order-1"
                  >
                    <div className="inline-flex items-center justify-center size-24 rounded-3xl bg-current/10">
                      {SERVICE_ICONS_LIGHT[service.id]}
                    </div>
                    
                    <div>
                      <h2 className="text-4xl md:text-5xl font-bold mb-4">{service.title}</h2>
                      <p className="text-lg leading-relaxed text-text-primary-light/80">
                        {service.description}
                      </p>
                    </div>

                    {/* Features List */}
                    <div className="space-y-4 pt-4">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-3">
                          <CheckCircle2 className="size-6 shrink-0 text-text-primary-light" />
                          <span className="text-lg">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-6">
                      <Button asChild variant="pill-light" size="lg">
                        <Link href="/preventivo">
                          Richiedi Preventivo
                          <ArrowRight className="ml-2 size-4" />
                        </Link>
                      </Button>
                    </div>
                  </motion.div>

                  {/* Image */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="lg:order-2"
                  >
                    <div className="aspect-[4/3] rounded-3xl overflow-hidden relative">
                      <Image
                        src={service.image || "/img/Costruzioni_Ex_Novo_3.png"}
                        alt={service.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>
          );
        }
        
        // Per gli altri servizi, mantieni lo stile alternato originale
        const bgClass = isEven ? "bg-bg-light" : "bg-bg-dark";
        const textClass = isEven ? "text-text-primary-dark" : "text-text-primary-light";
        const mutedClass = isEven ? "text-muted-foreground" : "text-text-primary-light/80";
        const icon = isEven ? SERVICE_ICONS[service.id] : SERVICE_ICONS_LIGHT[service.id];
        const buttonVariant = isEven ? "pill" : "pill-light";
        
        return (
          <section
            key={service.id}
            id={service.id}
            className={`py-28 ${bgClass} ${textClass}`}
          >
            <div className="container mx-auto px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto items-center">
                
                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`space-y-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}
                >
                  <div className="inline-flex items-center justify-center size-24 rounded-3xl bg-current/10">
                    {icon}
                  </div>
                  
                  <div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">{service.title}</h2>
                    <p className={`text-lg leading-relaxed ${mutedClass}`}>
                      {service.description}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-4 pt-4">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <CheckCircle2 className={`size-6 shrink-0 ${isEven ? "text-accent-red" : "text-text-primary-light"}`} />
                        <span className="text-lg">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6">
                    <Button asChild variant={buttonVariant} size="lg">
                      <Link href="/preventivo">
                        Richiedi Preventivo
                        <ArrowRight className="ml-2 size-4" />
                      </Link>
                    </Button>
                  </div>
                </motion.div>

                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className={isEven ? "lg:order-2" : "lg:order-1"}
                >
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden relative">
                    <Image
                      src={service.image || "/img/Restauro_Trulli_3.png"}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        );
      })}

      {/* PROCESS SECTION */}
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
              title="Il Nostro Processo"
              subtitle="Un metodo collaudato per garantire risultati eccellenti"
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[
              {
                step: "01",
                title: "Consulenza",
                description: "Incontro gratuito per capire le tue esigenze e valutare il progetto sul territorio"
              },
              {
                step: "02",
                title: "Progettazione",
                description: "Sviluppo del progetto completo con rendering 3D e preventivo dettagliato trasparente"
              },
              {
                step: "03",
                title: "Realizzazione",
                description: "Esecuzione dei lavori con materiali autentici e maestranze specializzate nella pietra"
              },
              {
                step: "04",
                title: "Consegna",
                description: "Consegna chiavi in mano con garanzia completa e assistenza post-vendita dedicata"
              }
            ].map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-center space-y-4 p-8 rounded-3xl border-2 border-border/40 hover:border-accent-red/40 transition-colors duration-300"
              >
                <div className="text-6xl font-bold text-accent-red/20">
                  {step.step}
                </div>
                <h3 className="text-2xl font-bold">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-28 bg-bg-light">
        <div className="w-[calc(100%-32px)] mx-auto sm:w-[calc(100%-48px)] md:w-[calc(100%-64px)] lg:w-[calc(100%-80px)] xl:w-[calc(100%-96px)] 2xl:w-[calc(100%-115px)] max-w-[3325px] bg-bg-dark text-text-primary-light rounded-2xl p-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Pronto a Iniziare il Tuo Progetto?
            </h2>
            <p className="text-xl text-text-primary-light/80">
              Contattaci oggi per una consulenza gratuita e senza impegno
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" variant="accent">
                <Link href="/preventivo">Richiedi Preventivo</Link>
              </Button>
              <Button asChild size="lg" variant="pill-light">
                <Link href="/contatti">Contattaci</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
