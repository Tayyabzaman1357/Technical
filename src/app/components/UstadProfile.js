import { Award, Briefcase, ThumbsUp, CheckCircle } from 'lucide-react';

export default function UstadProfile() {
  return (
    <section id="ustad-profile" className="py-20 bg-slate-50 border-t border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Experience & Stats Content */}
          <div className="space-y-6 order-2 md:order-1">
            <div>
              <span className="bg-blue-100 text-blue-800 text-xs font-black px-3 py-1.5 rounded-md uppercase tracking-wider">
                Our Master Technician
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3 leading-tight">
                Mulaqat Karein Humare <br />
                <span className="text-blue-600">Chief Ustad: Hussain Khan Se</span>
              </h2>
            </div>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Dukan ke tamam baray aur complex maslay jaise Inverter AC ke PCB circuit repairs aur deep freezer gas leakage testing, Ustad Hussain Khan khud apni nigrani me check karte hain. Karachi ki market me unka kaam hi unki pehchan hai.
            </p>

            {/* Experience Stats Grid */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-slate-200/60">
                <div className="p-2.5 bg-blue-50 text-blue-600 rounded-lg">
                  <Briefcase className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xl font-black text-slate-900">18+ Years</div>
                  <div className="text-xs text-slate-500 font-medium">Field Experience</div>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-slate-200/60">
                <div className="p-2.5 bg-amber-50 text-amber-600 rounded-lg">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xl font-black text-slate-900">5000+</div>
                  <div className="text-xs text-slate-500 font-medium">Happy Customers</div>
                </div>
              </div>
            </div>

            {/* Specialties Checklist */}
            <div className="space-y-2.5 pt-2">
              <div className="flex items-center gap-2.5 text-slate-700 font-semibold text-sm">
                <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                <span>DC Inverter AC Error Codes Expert</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-700 font-semibold text-sm">
                <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                <span>Imported Refrigerator & No-Frost Specialist</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-700 font-semibold text-sm">
                <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                <span>Commercial Dispenser & Deep Freezer Repairing</span>
              </div>
            </div>
          </div>

          {/* Right Side: Professional Photo Holder */}
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-full max-w-[400px] aspect-[4/5] rounded-3xl overflow-hidden bg-slate-200 border-4 border-white shadow-2xl shadow-slate-300 group">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent z-10"></div>
              
              {/* Image element - Isme exact dynamic query match portrait lagai hai */}
              <img 
                src="/ustadimg.jpeg" 
                alt="Ustad Hussain Khan - Chief Technician" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />

              {/* Float Content on Image Overlay */}
              <div className="absolute bottom-6 left-6 right-6 z-20 text-white">
                <div className="flex items-center gap-1 text-yellow-400 mb-1">
                  <ThumbsUp className="h-4 w-4 fill-yellow-400" />
                  <span className="text-xs font-black uppercase tracking-wider">100% Recommended</span>
                </div>
                <h4 className="text-xl font-black">Ustad Hussain Khan</h4>
                <p className="text-xs text-slate-300 mt-0.5">Senior Technical Head - Hussain Cool Services</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}