# Impresa Edile - MVP Piattaforma Web

Questo repository contiene il codice sorgente di un Minimum Viable Product (MVP) sviluppato come concept e prototipo digitale per un'ipotetica impresa edile specializzata in costruzioni di pregio, ristrutturazioni e restauro conservativo di strutture tradizionali (trulli, masserie e dimore storiche).

L'obiettivo dell'MVP e presentare un'esperienza utente moderna, performante e accessibile, coniugando l'identita artigianale del settore edile con standard tecnologici e di design all'avanguardia.

---

## Panoramica del Progetto

La piattaforma e concepita per offrire:
- Una vetrina istituzionale chiara e autorevole per comunicare valori, storia e competenze dell'impresa.
- Una presentazione dettagliata dei servizi con suddivisione modulare e schede informative.
- Una galleria interattiva dei progetti realizzati con fotografie ottimizzate per la resa visiva.
- Canali di conversione diretta per i clienti, inclusi form di contatto rapido, richiesta di preventivo personalizzato e localizzazione tramite mappa interattiva.

---

## Architettura e Specifiche Tecniche

### Core Framework e Runtime
- **Next.js 16 (App Router)**: Utilizzo della versione 16 con motore di bundling e compilazione Turbopack per rendering ibrido, Server Components e routing avanzato basato su filesystem.
- **React 19**: Sfruttamento delle ultime funzionalita del runtime React per la gestione efficiente dello stato e del ciclo di vita dei componenti.
- **TypeScript 5**: Tipizzazione statica rigorosa in tutto il codebase, che garantisce manutenibilita, robustezza e prevenzione di errori a runtime.

### Stile e Design System
- **Tailwind CSS v4**: Adozione della nuova architettura basata su direttive CSS native (`@import "tailwindcss";`), tema configurato tramite `@theme inline` e token semantici.
- **Somerville Design System**: Palette cromatica personalizzata basata su coordinate colore OKLCH per modalita chiara e scura (Greige caldo `#EAE8E1`, Carbone scuro `#2A2829`, Accento `#4a2f2d`), spaziature fluide e raggi di curvatura consistenti.
- **Tipografia**: Caricamento ottimizzato del font Google `Poppins` tramite il modulo `next/font/google` con configurazione `display: swap` e sub-setting latino.

### Animazioni e Micro-Interazioni
- **Framer Motion**:
  - Animazioni di entrata graduale (fade-in, slide-up, stagger animation).
  - Componente magnetico (`Magnetic`) basato su `useMotionValue` e simulazione fisica con molle (`useSpring`) per pulsanti e link.
  - Menu di navigazione mobile con transizioni `clipPath` fluide e animazione personalizzata dell'icona toggle.
  - Navbar dinamica con rilevamento dello scroll e scomparsa automatica per ottimizzare l'area di lettura.
- **Rough Notation**: Effetti grafici di sottolineatura e risalto dinamico in stile manuale su parole chiave (utilizzati nel footer).

### Mappe e Servizi Cartografici
- **Leaflet & OpenStreetMap**: Integrazione cartografica tramite caricamento asincrono lato client (`next/dynamic` con flag `ssr: false`) in `MapComponent.tsx` per prevenire errori di rendering durante la compilazione SSR. Personalizzazione dei marker e popup informativi geolocalizzati.

### Componenti UI e Accessibilita
- **Radix UI Primitives**: Integrazione di componenti accessibili e conformi agli standard WAI-ARIA (`@radix-ui/react-slot`, `@radix-ui/react-label`, `@radix-ui/react-accordion`, `@radix-ui/react-dialog`, `@radix-ui/react-dropdown-menu`).
- **Utility Class Management**: Gestione dinamica delle classi CSS con `clsx`, `tailwind-merge` e `class-variance-authority` (CVA).
- **Iconografia**: Libreria vettoriale modulare fornita da `lucide-react`.

---

## Struttura della Codebase

```text
Impresa-Edile/
├── public/
│   └── img/                         # Risorse multimediali statiche (video hero, immagini progetti)
├── src/
│   ├── app/
│   │   ├── chi-siamo/
│   │   │   └── page.tsx             # Pagina istituzionale (Mission, Vision, Valori, Storia)
│   │   ├── components/
│   │   │   ├── navbar.tsx           # Barra di navigazione responsive con menu mobile
│   │   │   ├── footer.tsx           # Footer con navigazione, contatti ed evidenziazioni
│   │   │   ├── shared/
│   │   │   │   ├── HoverLink.tsx    # Link animato con sottolineatura direzionale
│   │   │   │   ├── Magnetic.tsx     # Wrapper per interazione magnetica al passaggio del mouse
│   │   │   │   ├── MenuToggle.tsx   # Icona hamburger/chiusura animata per mobile
│   │   │   │   └── ThemeProvider.tsx # Provider per la gestione del tema
│   │   │   └── ui/                  # Componenti atomici riutilizzabili (Button, Card, Input, ecc.)
│   │   ├── contatti/
│   │   │   ├── MapComponent.tsx     # Componente client-side per rendering Leaflet
│   │   │   └── page.tsx             # Pagina contatti, recapiti e form messaggio rapido
│   │   ├── preventivo/
│   │   │   └── page.tsx             # Form strutturato per richiesta preventivo
│   │   ├── servizi/
│   │   │   └── page.tsx             # Schede dettagliate dei servizi offerti e fasi del processo
│   │   ├── globals.css              # Stili globali, variabili di tema e classi di utilita
│   │   ├── layout.tsx               # Root layout dell'applicazione con font e metadata
│   │   └── page.tsx                 # Homepage principale con hero video e sezioni di riepilogo
│   └── lib/
│       ├── site-config.ts           # Configurazione centralizzata dei contenuti del sito
│       └── utils.ts                 # Funzioni helper per la composizione delle classi CSS
├── eslint.config.mjs                # Configurazione linter ESLint (flat config)
├── next.config.ts                   # Configurazione del framework Next.js
├── package.json                     # Definizione dipendenze e script di progetto
├── postcss.config.mjs               # Configurazione PostCSS per Tailwind CSS v4
├── tailwind.config.ts               # Estensioni opzionali del tema Tailwind
└── tsconfig.json                    # Configurazione del compilatore TypeScript
```

---

## Pagine e Percorsi dell'Applicazione

1. **Home (`/`)**:
   - Hero section a tutta larghezza con video di sfondo, overlay scuro e titolo ad alto impatto visivo.
   - Sezione servizi in griglia a 3 colonne.
   - Sezione valori con schede scure a contrasto su sfondo chiaro.
   - Presentazione del metodo di lavoro a 2 colonne.
   - Sezione portfolio progetti con griglia responsiva 3x2 e badge informativi.

2. **Servizi (`/servizi`)**:
   - Dettaglio per aree di intervento: Restauro Trulli, Costruzioni Ex-novo, Piscine ed Esterni.
   - Layout alternati a blocchi pieni e card per massimizzare la leggibilita.
   - Lista puntata dei vantaggi e delle caratteristiche per ciascun servizio.
   - Diagramma a quattro fasi del processo operativo (Consulenza, Progettazione, Realizzazione, Consegna).

3. **Chi Siamo (`/chi-siamo`)**:
   - Dichiarazioni di Mission e Vision aziendale.
   - Approfondimento sui tre pilastri valoriali (Maestri della Pietra, Eccellenza Artigianale, Affidabilita Totale).
   - Cronistoria dell'azienda e traguardi raggiunti (oltre 100 progetti, 15 anni di esperienza).

4. **Contatti (`/contatti`)**:
   - Scheda riassuntiva dei canali di contatto (Email, Telefono, Indirizzo sede, Orari di apertura).
   - Collegamenti diretti ai profili social.
   - Form di contatto rapido con validazione dei campi e stato di conferma.
   - Mappa interattiva integrata con marker personalizzato e popup descrittivo.

5. **Preventivo (`/preventivo`)**:
   - Modulo dedicato alla raccolta delle richieste di preventivo con campi specifici (nome, email, telefono, descrizione del progetto).
   - Box laterale con riepilogo delle tempistiche di risposta e dei passaggi successivi alla richiesta.

---

## Installazione e Avvio Locale

### Prerequisiti
- Node.js versione 20.x o superiore
- npm (Node Package Manager) versione 10.x o superiore

### Procedura di Configurazione

1. Clonare il repository o scaricare i file del progetto:
   ```bash
   git clone <URL_REPOSITORY>
   cd Impresa-Edile
   ```

2. Installare le dipendenze di progetto:
   ```bash
   npm install
   ```

3. Avviare il server di sviluppo locale:
   ```bash
   npm run dev
   ```
   L'applicazione sara accessibile all'indirizzo `http://localhost:3000`.

---

## Script di Controllo Qualita e Build

- **Verifica Statica dei Tipi (TypeScript)**:
  ```bash
  npx tsc --noEmit
  ```
- **Controllo e Linting del Codice (ESLint)**:
  ```bash
  npm run lint
  ```
- **Compilazione per Ambiente di Produzione**:
  ```bash
  npm run build
  ```
- **Avvio del Server in Modalita Produzione**:
  ```bash
  npm run start
  ```

---

## Licenza

Questo progetto e rilasciato sotto licenza MIT. Consultare il file `LICENSE` per ulteriori dettagli.
