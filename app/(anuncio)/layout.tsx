import { Footer } from "@/components/site/Footer";
import { GoogleAnalytics } from "@/components/site/GoogleAnalytics";
import { Header } from "@/components/site/Header";

export default function AdLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <GoogleAnalytics />
      <Header variant="lite" />
      <main id="contenido" className="flex-1">
        {children}
      </main>
      <Footer compact />
    </div>
  );
}
