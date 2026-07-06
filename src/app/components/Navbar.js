'use client';
import { useState } from 'react';
import { Phone, Snowflake, Menu, X, ShieldCheck } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 sm:h-20 items-center">
          
          {/* Logo Brand Zone */}
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="bg-blue-600 p-1.5 sm:p-2 rounded-xl text-white shadow-md shadow-blue-200">
              <Snowflake className="h-5 w-5 sm:h-6 sm:w-6 animate-spin-[spin_3s_linear_infinite]" />
            </div>
            <div className="flex flex-col">
              <span className="font-black text-lg sm:text-xl text-slate-900 tracking-tight leading-none">
                Hussain Cool <span className="text-blue-600">Services</span>
              </span>
              <span className="text-[9px] text-emerald-600 font-bold tracking-widest uppercase mt-0.5 flex items-center gap-0.5">
                <ShieldCheck className="h-2.5 w-2.5 fill-emerald-100" /> Certified Shop
              </span>
            </div>
          </div>

          {/* Premium Desktop Links */}
          <div className="hidden md:flex items-center gap-8 text-slate-600 font-semibold text-sm">
            <a href="#services" className="hover:text-blue-600 transition-colors">Our Services</a>
            <a href="#products" className="hover:text-blue-600 transition-colors">Available Stock</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Complaints</a>
          </div>

          {/* Call Action Trigger */}
          <div className="flex items-center gap-2">
            <a 
              href="tel:+923103250549" 
              className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2.5 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition shadow-md font-black text-sm"
            >
              <Phone className="h-4 w-4 fill-white text-blue-600" />
              <span>0310-3250549</span>
            </a>

            {/* Mobile Menu Hamburger Button */}
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 rounded-lg bg-slate-50 border border-slate-200 md:hidden text-slate-700 active:scale-95 transition"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      {isOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-6 space-y-3 shadow-lg absolute w-full left-0 transition-all">
          <a 
            href="#services" 
            onClick={() => setIsOpen(false)}
            className="block text-slate-800 font-bold p-3 rounded-xl bg-slate-50 active:bg-blue-50"
          >
            Our Services
          </a>
          <a 
            href="#products" 
            onClick={() => setIsOpen(false)}
            className="block text-slate-800 font-bold p-3 rounded-xl bg-slate-50 active:bg-blue-50"
          >
            Available Stock
          </a>
          <a 
            href="#contact" 
            onClick={() => setIsOpen(false)}
            className="block text-slate-800 font-bold p-3 rounded-xl bg-slate-50 active:bg-blue-50"
          >
            Complaints & Booking
          </a>
          <a 
            href="tel:+923103250549"
            className="flex items-center justify-center gap-2 bg-blue-600 text-white p-3 rounded-xl font-black shadow-md text-center"
          >
            <Phone className="h-4 w-4 fill-white text-blue-600" /> Call Direct: 0310-3250549
          </a>
        </div>
      )}
    </nav>
  );
}