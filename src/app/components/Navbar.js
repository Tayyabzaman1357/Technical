import { Phone, Snowflake } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2">
            <Snowflake className="h-8 w-8 text-blue-600 animate-pulse" />
            <span className="font-bold text-xl text-slate-800 tracking-wide">
              Pak Cool <span className="text-blue-600">Services</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-slate-600 font-medium">
            <a href="#services" className="hover:text-blue-600 transition">Services</a>
            <a href="#products" className="hover:text-blue-600 transition">Products</a>
            <a href="#contact" className="hover:text-blue-600 transition">Book Now</a>
          </div>
          <a 
            href="tel:+923001234567" 
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition font-semibold"
          >
            <Phone className="h-4 w-4" /> Call Now
          </a>
        </div>
      </div>
    </nav>
  );
}