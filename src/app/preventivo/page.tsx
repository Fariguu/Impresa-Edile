"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import { Label } from "@/app/components/ui/label";
import { Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-config";

export default function PreventivoPage() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefono: "",
    messaggio: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ nome: "", email: "", telefono: "", messaggio: "" });
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
              Richiedi Preventivo
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Raccontaci il tuo progetto. Ti risponderemo entro 24 ore con una consulenza personalizzata.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FORM & INFO */}
      <section className="py-28 bg-bg-dark text-text-primary-light">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            
            {/* FORM */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="p-10 rounded-3xl bg-bg-light text-text-primary-dark">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold mb-3">Compila il Form</h2>
                  <p className="text-muted-foreground text-lg">
                    Più dettagli ci fornisci, più accurato sarà il preventivo
                  </p>
                </div>
                
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    
                    <div className="space-y-2">
                      <Label htmlFor="nome">Nome e Cognome *</Label>
                      <Input
                        id="nome"
                        name="nome"
                        type="text"
                        placeholder="Mario Rossi"
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
                        placeholder="mario.rossi@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="rounded-2xl"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="telefono">Telefono</Label>
                      <Input
                        id="telefono"
                        name="telefono"
                        type="tel"
                        placeholder="+39 123 456 7890"
                        value={formData.telefono}
                        onChange={handleChange}
                        className="rounded-2xl"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="messaggio">Descrizione Progetto *</Label>
                      <Textarea
                        id="messaggio"
                        name="messaggio"
                        placeholder="Descrivi il tuo progetto: tipo di lavoro (restauro trullo, costruzione villa, etc.), ubicazione, tempistiche previste..."
                        rows={6}
                        value={formData.messaggio}
                        onChange={handleChange}
                        className="rounded-2xl"
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" variant="pill" className="w-full">
                      Invia Richiesta
                    </Button>

                    <p className="text-sm text-muted-foreground text-center">
                      Ti risponderemo entro 24 ore lavorative
                    </p>
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
                    <h3 className="text-2xl font-bold">Richiesta Inviata!</h3>
                    <p className="text-muted-foreground">
                      Grazie per averci contattato. Ti risponderemo al più presto.
                    </p>
                  </motion.div>
                )}
              </div>
            </motion.div>

            {/* INFO SIDEBAR */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-8"
            >
              
              {/* Contatti */}
              <div className="p-8 rounded-3xl bg-text-primary-light/5 border-2 border-text-primary-light/10">
                <h3 className="text-xl font-bold mb-2">Contatti Diretti</h3>
                <p className="text-text-primary-light/80 text-sm mb-6">
                  Preferisci parlare subito con noi?
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="size-5 text-accent-red mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium text-sm">Email</p>
                      <a
                        href={`mailto:${SITE_CONFIG.brand.email}`}
                        className="text-sm text-text-primary-light/80 hover:text-accent-red transition-colors break-all"
                      >
                        {SITE_CONFIG.brand.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="size-5 text-accent-red mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium text-sm">Telefono</p>
                      <a
                        href={`tel:${SITE_CONFIG.brand.phone}`}
                        className="text-sm text-text-primary-light/80 hover:text-accent-red transition-colors"
                      >
                        {SITE_CONFIG.brand.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="size-5 text-accent-red mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium text-sm">Sede</p>
                      <p className="text-sm text-text-primary-light/80">
                        {SITE_CONFIG.brand.address}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cosa Aspettarsi */}
              <div className="p-8 rounded-3xl bg-text-primary-light/5 border-2 border-text-primary-light/10">
                <h3 className="text-xl font-bold mb-6">Cosa Aspettarsi</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="size-10 rounded-full bg-accent-red flex items-center justify-center shrink-0">
                      <span className="text-sm font-bold text-white">1</span>
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Risposta Rapida</p>
                      <p className="text-sm text-text-primary-light/80">Entro 24 ore lavorative</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="size-10 rounded-full bg-accent-red flex items-center justify-center shrink-0">
                      <span className="text-sm font-bold text-white">2</span>
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Consulenza Gratuita</p>
                      <p className="text-sm text-text-primary-light/80">Sopralluogo se necessario</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="size-10 rounded-full bg-accent-red flex items-center justify-center shrink-0">
                      <span className="text-sm font-bold text-white">3</span>
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Preventivo Dettagliato</p>
                      <p className="text-sm text-text-primary-light/80">Costi e tempistiche trasparenti</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
