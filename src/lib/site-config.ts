export const SITE_CONFIG = {
  brand: {
    name: "Impresa Edile",
    endorsement: "di Marco Rossi",
    tagline: "Costruzioni & Restauri",
    payoff: "L'arte della pietra, la certezza del chiavi in mano.",
    description: "Custodiamo l'anima architettonica della Valle d'Itria, trasformando trulli e masserie in dimore di lusso attraverso un processo costruttivo trasparente, artigianale e senza pensieri per il cliente.",
    email: "info@impresa.it",
    phone: "+39 123 456 7890",
    address: "Ostuni, Puglia",
  },
  
  logo: {
    type: "text" as "text" | "image" | "custom",
    
    text: {
      main: "Impresa Edile",
      highlight: "",
      className: "tracking-tight font-bold",
    },
    
    image: {
      src: "/logo.svg",
      alt: "Impresa Edile Logo",
      width: 140,
      height: 45,
      darkInvert: false,
    },
  },

  navigation: {
    main: [
      { name: "Home", href: "/" },
      { name: "Servizi", href: "/servizi" },
      { name: "Chi Siamo", href: "/chi-siamo" },
      { name: "Contatti", href: "/contatti" },
    ],
    footer: {
      columns: [
        {
          title: "Servizi",
          links: [
            { label: "Restauro Trulli", href: "/servizi#restauro" },
            { label: "Costruzioni", href: "/servizi#costruzioni" },
            { label: "Piscine & Esterni", href: "/servizi#esterni" },
            { label: "Ristrutturazioni", href: "/servizi#ristrutturazioni" },
          ],
        },
        {
          title: "Azienda",
          links: [
            { label: "Chi Siamo", href: "/chi-siamo" },
            { label: "La Nostra Storia", href: "/chi-siamo#storia" },
            { label: "Preventivo", href: "/preventivo" },
            { label: "Contatti", href: "/contatti" },
          ],
        },
        {
          title: "Legale",
          links: [
            { label: "Privacy Policy", href: "/privacy" },
            { label: "Termini di Servizio", href: "/termini" },
            { label: "Cookie Policy", href: "/cookie" },
          ],
        },
      ],
      legal: [
        { label: "Privacy", href: "/privacy" },
        { label: "Termini", href: "/termini" },
        { label: "Cookie", href: "/cookie" },
      ],
    },
  },

  socials: [
    { name: "LinkedIn", href: "https://linkedin.com/company/", platform: "linkedin" },
    { name: "Instagram", href: "https://instagram.com/", platform: "instagram" },
    { name: "Facebook", href: "https://facebook.com/", platform: "facebook" },
  ],

  services: [
    {
      id: "restauro",
      title: "Restauro Trulli",
      description: "Conserviamo l'autenticità della pietra a secco, rispettando le tecniche tradizionali e preservando il valore storico di ogni trullo.",
      image: "/img/Restauro_Trulli_3.png",
      features: [
        "Restauro conservativo",
        "Pietra a secco tradizionale",
        "Rispetto delle normative",
        "Materiali autentici",
      ],
    },
    {
      id: "costruzioni",
      title: "Costruzioni Ex-novo",
      description: "Realizziamo ville e masserie chiavi in mano, unendo l'architettura tradizionale pugliese al comfort e alle tecnologie moderne.",
      image: "/img/Costruzioni_Ex_Novo_3.png",
      features: [
        "Progettazione completa",
        "Gestione chiavi in mano",
        "Stile pugliese autentico",
        "Comfort moderno",
      ],
    },
    {
      id: "esterni",
      title: "Piscine & Esterni",
      description: "Progettiamo e realizziamo spazi esterni da sogno: piscine, giardini, pergolati e aree relax perfettamente integrate nel paesaggio pugliese.",
      image: "/img/Piscina_1.png",
      features: [
        "Piscine di design",
        "Giardini mediterranei",
        "Illuminazione esterna",
        "Aree relax",
      ],
    },
  ],

  reviews: [
    {
      id: 1,
      name: "Anca Maria Popescu",
      role: "Cliente",
      rating: 5,
      text: "Professionalità e competenza. Siamo stati seguiti ovunque, dalla progettazione alla consegna. Il trullo è stato restaurato rispettando ogni dettaglio storico.",
      image: "/reviews/placeholder-1.jpg",
    },
    {
      id: 2,
      name: "Marco Rossi",
      role: "Proprietario Villa",
      rating: 5,
      text: "La bravura dello staff è evidente in ogni fase del lavoro. Hanno trasformato la nostra masseria in una dimora da sogno, mantenendo l'anima pugliese.",
      image: "/reviews/placeholder-2.jpg",
    },
    {
      id: 3,
      name: "Sarah Johnson",
      role: "Investitore Internazionale",
      rating: 5,
      text: "Marjan e il suo team hanno gestito tutto il progetto con grande trasparenza. Non parlavo italiano ma mi hanno seguito passo dopo passo. Consigliatissimo!",
      image: "/reviews/placeholder-3.jpg",
    },
  ],

  projects: [
    {
      id: 1,
      client: "Villa Rossini",
      location: "Ostuni, Valle d'Itria",
      description: "Restauro conservativo di masseria storica del 1700",
      image: "/projects/placeholder-1.jpg",
      category: "restauro",
    },
    {
      id: 2,
      client: "Trullo dei Fiori",
      location: "Cisternino, Puglia",
      description: "Restauro trullo con ampliamento e piscina",
      image: "/projects/placeholder-2.jpg",
      category: "restauro",
    },
    {
      id: 3,
      client: "Casa Bianca",
      location: "Martina Franca",
      description: "Costruzione ex-novo villa di lusso",
      image: "/projects/placeholder-3.jpg",
      category: "costruzione",
    },
    {
      id: 4,
      client: "Masseria del Sole",
      location: "Ceglie Messapica",
      description: "Ristrutturazione completa con esterni",
      image: "/projects/placeholder-4.jpg",
      category: "ristrutturazione",
    },
    {
      id: 5,
      client: "Villa Paradiso",
      location: "Ostuni",
      description: "Progetto chiavi in mano con giardino mediterraneo",
      image: "/img/villaparadisopng.png",
      category: "costruzione",
    },
    {
      id: 6,
      client: "Trullo Antico",
      location: "Locorotondo",
      description: "Recupero architettonico pietra a secco",
      image: "/projects/placeholder-6.jpg",
      category: "restauro",
    },
  ],

  values: [
    {
      id: "passionate",
      title: "Maestri della Pietra",
      description: "Custodiamo l'antica arte della pietra a secco, unendo tecniche tradizionali e visione contemporanea per creare dimore senza tempo.",
      icon: "heart",
    },
    {
      id: "craftsmanship",
      title: "Eccellenza Artigianale",
      description: "Ogni progetto è curato nei minimi dettagli da maestranze specializzate, con materiali autentici e lavorazioni d'eccellenza.",
      icon: "hammer",
    },
    {
      id: "trust",
      title: "Affidabilità Totale",
      description: "Dal primo incontro alla consegna chiavi in mano, ti accompagniamo con trasparenza e dedizione in ogni fase del percorso.",
      icon: "shield",
    },
  ],

  process: {
    title: "Un Processo Senza Pensieri",
    subtitle: "Dalla prima visione alla realtà costruita",
    description: "Gestiamo ogni aspetto del progetto con un metodo collaudato che garantisce qualità, tempi certi e massima trasparenza. Il nostro approccio chiavi in mano elimina ogni preoccupazione, permettendoti di concentrarti sul risultato finale.",
    cta: "Scopri il nostro metodo",
  },

  metadata: {
    title: {
      default: "Impresa Edile | Costruzioni & Restauri a Ostuni",
      template: "%s | Impresa Edile",
    },
    description: "Specialisti in restauro trulli e costruzioni chiavi in mano a Ostuni. L'arte della pietra, la certezza del chiavi in mano.",
    keywords: ["restauro trulli", "costruzioni Ostuni", "masserie Puglia", "Marco Rossi", "Valle d'Itria", "pietra a secco"],
  },
};

export type SiteConfig = typeof SITE_CONFIG;

