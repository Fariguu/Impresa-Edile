import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import { ThemeProvider } from "./components/shared/ThemeProvider";
import { SITE_CONFIG } from "@/lib/site-config";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: SITE_CONFIG.metadata.title.default,
  description: SITE_CONFIG.metadata.description,
  keywords: SITE_CONFIG.metadata.keywords,
  authors: [{ name: "Marco Rossi" }],
  creator: "Impresa Edile",
  publisher: "Impresa Edile",
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "https://.it",
    title: SITE_CONFIG.metadata.title.default,
    description: SITE_CONFIG.metadata.description,
    siteName: SITE_CONFIG.brand.name,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // Imposta sempre il tema chiaro come predefinito
                document.documentElement.classList.remove('dark');
                localStorage.setItem('theme', 'light');
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${poppins.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
