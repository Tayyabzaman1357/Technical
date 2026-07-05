'use client';

import { Phone, MessageSquare } from 'lucide-react';

export default function MobileStickyCall() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-slate-200 px-4 py-3 flex gap-3 z-50 shadow-[0_-4px_12px_rgba(0,0,0,0.08)]">
      
      {/* 📞 Phone Call Button */}
      <a 
        href="tel:+923103250549" 
        onClick={(e) => {
          // Agar galti se laptop/desktop par click ho, toh breakdown ke bajaye WhatsApp khol do
          if (typeof window !== 'undefined' && window.innerWidth > 768) {
            e.preventDefault();
            window.open("https://wa.me/923103250549?text=Hi, mujhe AC/Fridge service ke liye call karni hai.", "_blank");
          }
        }}
        className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3.5 rounded-xl shadow-md font-black text-sm cursor-pointer active:scale-95 transition-transform duration-150"
      >
        <Phone className="h-4 w-4 fill-white text-blue-600" />
        <span>Call Now</span>
      </a>

      {/* 💬 Instant WhatsApp Button */}
      <a 
        href="https://wa.me/923103250549?text=Assalam-o-Alaikum%20Pak%20Cool%20Services%2C%20mujhe%20AC%2FFridge%20repairing%20ki%20service%20chahiye." 
        target="_blank"
        rel="noreferrer"
        className="flex-1 inline-flex items-center justify-center gap-2 bg-emerald-600 text-white font-black py-3.5 rounded-xl text-sm shadow-md active:scale-95 transition-transform duration-150"
      >
        <MessageSquare className="h-4 w-4 fill-white text-emerald-600" />
        <span>WhatsApp</span>
      </a>

    </div>
  );
}