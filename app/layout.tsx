import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans", display: "swap" });
export const metadata: Metadata = {
  title: "Banks Oven | Custom Cakes & Sweet Celebrations",
  description: "Custom wedding cakes, birthday cakes, luxury pastries and short-notice orders in Rumuodara, Port Harcourt.",
  openGraph: { title: "Banks Oven — Made for your sweetest moments", description: "Custom cakes and confectionery in Port Harcourt.", type: "website" }
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${playfair.variable} ${dmSans.variable}`}>{children}</body></html>;
}