import Contact from "./components/Contact";
import Hero from "./components/Hero";
import MobileStickyCall from "./components/MobileStickyCall";

import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Services from "./components/Services";


export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 antialiased selection:bg-blue-500 selection:text-white">
      <Navbar />
      <Hero />
      <Services />
     <Products />
      <Contact />
      <MobileStickyCall />
    </main>
  );
}