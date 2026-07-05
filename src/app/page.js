import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 antialiased selection:bg-blue-500 selection:text-white">
      <Navbar />
      <Hero />
      <Services />
      {/* Aap yahan Products section bhi add kar sakte hain future me */}
      <Contact />
    </main>
  );
}