"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import { Label } from "@/app/components/ui/label";
import { Mail, Phone, MapPin, Clock, CheckCircle2, Linkedin, Instagram, Facebook } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-config";
import { Magnetic } from "@/app/components/shared/Magnetic";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";

// Dynamically import the map component to avoid SSR issues
const DynamicMap = dynamic(() => import("./MapComponent"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-secondary/20">
      <MapPin className="size-16 text-accent-red animate-pulse" />
    </div>
  ),
});

export default function ContattiPage() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    messaggio: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ nome: "", email: "", messaggio: "" });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
              Contattaci
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Siamo a tua disposizione per qualsiasi informazione sui nostri servizi
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTACT INFO & FORM */}
      <section className="py-28 bg-bg-light">
        <div className="w-[calc(100%-32px)] mx-auto sm:w-[calc(100%-48px)] md:w-[calc(100%-64px)] lg:w-[calc(100%-80px)] xl:w-[calc(100%-96px)] 2xl:w-[calc(100%-115px)] max-w-[3325px] bg-bg-dark text-text-primary-light rounded-2xl p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto items-center">
            
            {/* CONTACT INFO */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-4xl font-bold mb-6">Informazioni di Contatto</h2>
                <p className="text-xl text-text-primary-light/80 leading-relaxed mb-8">
                  Puoi contattarci direttamente tramite i seguenti canali o compilare il form. 
                  Ti risponderemo nel minor tempo possibile.
                </p>
              </div>

              {/* Contact Items */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="size-14 rounded-full bg-accent-red/20 flex items-center justify-center shrink-0">
                    <Mail className="size-6 text-text-primary-light" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <a
                      href={`mailto:${SITE_CONFIG.brand.email}`}
                      className="text-text-primary-light/80 hover:text-accent-red transition-colors"
                    >
                      {SITE_CONFIG.brand.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="size-14 rounded-full bg-accent-red/20 flex items-center justify-center shrink-0">
                    <Phone className="size-6 text-text-primary-light" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Telefono</h3>
                    <a
                      href={`tel:${SITE_CONFIG.brand.phone}`}
                      className="text-text-primary-light/80 hover:text-accent-red transition-colors"
                    >
                      {SITE_CONFIG.brand.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="size-14 rounded-full bg-accent-red/20 flex items-center justify-center shrink-0">
                    <MapPin className="size-6 text-text-primary-light" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Sede</h3>
                    <p className="text-text-primary-light/80">
                      {SITE_CONFIG.brand.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="size-14 rounded-full bg-accent-red/20 flex items-center justify-center shrink-0">
                    <Clock className="size-6 text-text-primary-light" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Orari</h3>
                    <p className="text-text-primary-light/80">
                      Lun - Ven: 9:00 - 18:00<br />
                      Sabato: 9:00 - 13:00
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-6">
                <h3 className="font-semibold text-lg mb-4">Seguici sui Social</h3>
                <div className="flex gap-3">
                  {SITE_CONFIG.socials.map((social) => (
                    <Magnetic key={social.name} intensity={0.2}>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="size-14 flex items-center justify-center rounded-full bg-text-primary-light/10 hover:bg-accent-red text-text-primary-light transition-colors duration-300"
                        aria-label={social.name}
                      >
                        {social.platform === "linkedin" && <Linkedin className="size-5" />}
                        {social.platform === "instagram" && <Instagram className="size-5" />}
                        {(social.platform === "facebook" || social.platform === "x") && <Facebook className="size-5" />}
                      </a>
                    </Magnetic>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* QUICK CONTACT FORM */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center justify-center lg:justify-end"
            >
              <div className="w-full max-w-lg p-10 rounded-3xl bg-bg-light text-text-primary-dark">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold mb-3">Invia un Messaggio</h2>
                  <p className="text-muted-foreground">
                    Compila il form per un contatto rapido
                  </p>
                </div>
                
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    
                    <div className="space-y-2">
                      <Label htmlFor="nome">Nome *</Label>
                      <Input
                        id="nome"
                        name="nome"
                        type="text"
                        placeholder="Il tuo nome"
                        value={formData.nome}
                        onChange={handleChange}
                        className="rounded-2xl"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="tua@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="rounded-2xl"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="messaggio">Messaggio *</Label>
                      <Textarea
                        id="messaggio"
                        name="messaggio"
                        placeholder="Come possiamo aiutarti?"
                        rows={5}
                        value={formData.messaggio}
                        onChange={handleChange}
                        className="rounded-2xl"
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" variant="pill" className="w-full">
                      Invia Messaggio
                    </Button>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center space-y-4"
                  >
                    <div className="inline-flex items-center justify-center size-16 rounded-full bg-accent-red/20">
                      <CheckCircle2 className="size-8 text-accent-red" />
                    </div>
                    <h3 className="text-2xl font-bold">Messaggio Inviato!</h3>
                    <p className="text-muted-foreground">
                      Ti risponderemo al più presto.
                    </p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="py-28 bg-bg-light">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-12 text-center">Dove Siamo</h2>
            
            {/* Leaflet Map */}
            <div className="aspect-[16/9] rounded-3xl overflow-hidden border-2 border-border/40">
              <DynamicMap />
            </div>
            
            {/* Address Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 text-center"
            >
              <div className="inline-flex items-center gap-3 text-lg">
                <MapPin className="size-6 text-accent-red" />
                <p className="font-semibold">Piazza della Libertà, 67, 72017 Ostuni BR</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
