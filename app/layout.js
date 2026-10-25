import { Archivo, Archivo_Black } from "next/font/google";
import "./globals.css";

// Vexlum's own brand fonts
const archivo = Archivo({ subsets: ["latin"], variable: "--font-body" });
const archivoBlack = Archivo_Black({ subsets: ["latin"], weight: "400", variable: "--font-heading" });

export const metadata = {
  title: "Vexlum – Home page concept",
  description: "A concept redesign of the Vexlum home page by Danish Munawar.",
  // This is a concept, so we ask search engines not to list it
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${archivo.variable} ${archivoBlack.variable}`}>
      <body>{children}</body>
    </html>
  );
}
