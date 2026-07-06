import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Pak Cool Services ke mutabiq SEO Optimized Metadata
export const metadata = {
  title: "Hussain Cool Services | Expert AC, Fridge & Deep Freezer Repair Karachi",
  description: "Karachi ki trusted shop jahan Ustad Hussain Khan 18+ saal ke experience ke sath aapke AC, Refrigerator, Dispenser, aur Deep Freezer ki instant home service provide karte hain.",
  keywords: ["AC repair Karachi", "Fridge repair", "Inverter AC repair", "Deep Freezer servicing", "Hussain Cool Services"],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        {children}
      </body>
    </html>
  );
}