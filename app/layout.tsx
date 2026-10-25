import type { Metadata } from "next";
import { IBM_Plex_Mono, Karla, Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

const karla = Karla({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-karla",
  display: "swap",
});

const plex = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vitadentis.mx"),
  title: {
    default: "Dentista en Metepec | Vita Dentis",
    template: "%s | Vita Dentis",
  },
  description:
    "Odontología integral y estética en Metepec. El Dr. David Romero Morales y su equipo explican cada paso. Agenda tu cita en línea.",
  applicationName: "Vita Dentis",
  openGraph: {
    type: "website",
    locale: "es_MX",
    siteName: "Vita Dentis",
    images: [
      {
        url: "/marca/compartir.png",
        width: 1200,
        height: 1200,
        alt: "Vita Dentis",
      },
    ],
  },
  twitter: {
    card: "summary",
    images: ["/marca/compartir.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es-MX"
      className={`${sora.variable} ${karla.variable} ${plex.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
