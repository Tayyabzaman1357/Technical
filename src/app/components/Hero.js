import { ShieldCheck, Wrench, Clock } from 'lucide-react';

export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
            Fast & Reliable Repair
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mt-4 leading-tight">
            AC aur Fridge Ka Masla? <br />
            <span className="text-blue-600">Hum Hain Na!</span>
          </h1>
          <p className="mt-4 text-slate-600 text-lg">
            Professional AC installation, gas refilling, fridge repairing, aur brand new appliances behtareen keemat par.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition font-bold">
              Book Service Online
            </a>
            <a href="#products" className="bg-white text-slate-800 border border-slate-200 px-6 py-3 rounded-lg shadow-sm hover:bg-slate-50 transition font-bold">
              View Appliances
            </a>
          </div>
        </div>

        {/* USP Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
            <Wrench className="h-8 w-8 text-blue-600 mb-2" />
            <h3 className="font-bold text-slate-800">Expert Technicians</h3>
            <p className="text-xs text-slate-500 mt-1">10+ saal ka tajurba</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
            <Clock className="h-8 w-8 text-blue-600 mb-2" />
            <h3 className="font-bold text-slate-800">1-Hour Response</h3>
            <p className="text-xs text-slate-500 mt-1">Emergency service available</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 col-span-2 flex items-center gap-4">
            <ShieldCheck className="h-10 w-10 text-green-500 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-slate-800">100% Service Warranty</h3>
              <p className="text-xs text-slate-500 mt-0.5">Kaam pasand na aaye toh paise wapas.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}