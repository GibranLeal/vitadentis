import { Footer } from "@/components/site/Footer";
import { GoogleAnalytics } from "@/components/site/GoogleAnalytics";
import { Header } from "@/components/site/Header";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <GoogleAnalytics />
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2"
      >
        Saltar al contenido
      </a>
      <Header />
      <main id="contenido" className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
