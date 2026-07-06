import { ShieldCheck, Wrench, Clock, Star } from 'lucide-react';

export default function Hero() {
  return (
    <div className="bg-gradient-to-b from-blue-600 to-blue-800 text-white py-12 md:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 -mt-12 -mr-12 w-64 h-64 md:w-96 md:h-96 bg-blue-500 rounded-full opacity-20 blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">
        <div className="text-center md:text-left">
          <div className="inline-flex items-center gap-1.5 bg-blue-500/40 border border-blue-400/30 text-blue-100 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider mb-4 md:mb-6">
            <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" /> Karachi Ka No.1 AC & Fridge Center
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black leading-tight tracking-tight">
            AC Cooling Nahi Kar Raha? <br className="hidden md:block" />
            <span className="text-yellow-400 block mt-1">Ghar Baithe Theek Karwayein!</span>
          </h1>
          <p className="mt-4 md:mt-6 text-blue-100 text-base md:text-xl font-medium max-w-xl mx-auto md:mx-0 leading-relaxed">
            No Hidden Charges. Master AC service, professional gas refilling, aur fridge repair ab 1 ghante ki guarantee ke sath.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <a href="#contact" className="w-full sm:w-auto text-center bg-yellow-400 text-slate-900 px-6 py-3.5 rounded-xl shadow-xl hover:bg-yellow-300 transition font-black text-base active:scale-98">
              Book Expert Technician
            </a>
            <a href="#products" className="w-full sm:w-auto text-center bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3.5 rounded-xl shadow-md hover:bg-white/20 transition font-bold text-base">
              Explore Available Stock
            </a>
          </div>
        </div>

        {/* Responsive Layout Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 md:mt-0">
          <div className="bg-white/10 backdrop-blur-md p-5 rounded-xl border border-white/10 shadow-xl flex items-start gap-4 sm:block">
            <div className="bg-yellow-400 text-slate-900 w-10 h-10 rounded-lg flex items-center justify-center font-bold shadow-md flex-shrink-0">
              <Wrench className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-bold text-base sm:mt-3">Certified Mechanics</h3>
              <p className="text-xs text-blue-100/80 mt-1">Karachi ke professional technicians.</p>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md p-5 rounded-xl border border-white/10 shadow-xl flex items-start gap-4 sm:block">
            <div className="bg-yellow-400 text-slate-900 w-10 h-10 rounded-lg flex items-center justify-center font-bold shadow-md flex-shrink-0">
              <Clock className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-bold text-base sm:mt-3">Fix Within 60 Mins</h3>
              <p className="text-xs text-blue-100/80 mt-1">Punctual service, aap ke select kiye huay time par hazir.</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-xl border border-slate-100 sm:col-span-2 flex items-center gap-3.5 text-slate-900">
            <div className="bg-green-100 p-2.5 rounded-xl flex-shrink-0">
              <ShieldCheck className="h-8 w-8 text-green-600" />
            </div>
            <div>
              <h3 className="font-black text-base sm:text-lg text-slate-900 leading-tight">7-Days Work Warranty</h3>
              <p className="text-xs text-slate-600 mt-0.5">Agar 7 din ke andar dobara masla aaye, toh service bilkul Free hogi.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}