'use client';
import { Phone, MessageSquare } from 'lucide-react';

export default function MobileStickyCall() {
  const handleWhatsAppClick = () => {
    // Message ko thoda professional aur clear kar diya hai
    const message = "Hi Pak Cool Services! Mujhe AC / Fridge ki service/complaint register karwani hai.";
    const whatsappUrl = `https://wa.me/923103250549?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-t border-slate-200 p-3 flex gap-3 md:hidden shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
      {/* Direct Call Button */}
      <a 
        href="tel:+923103250549" 
        className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white font-black rounded-xl py-3 text-sm active:scale-95 transition"
      >
        <Phone className="h-4 w-4 fill-white text-blue-600" />
        <span>Call Direct</span>
      </a>

      {/* Quick WhatsApp Button */}
      <button 
        onClick={handleWhatsAppClick}
        className="flex-1 flex items-center justify-center gap-2 bg-emerald-600 text-white font-black rounded-xl py-3 text-sm active:scale-95 transition"
      >
        <MessageSquare className="h-4 w-4 fill-white text-emerald-600" />
        <span>WhatsApp</span>
      </button>
    </div>
  );
}