import { Wind, Refrigerator, ShieldAlert } from 'lucide-react';

const services = [
  {
    icon: <Wind className="h-8 w-8 text-blue-600" />,
    title: "AC Services & Repairing",
    desc: "AC Installation, Master Service, Gas Charging (R22, R410, R32) aur Compressor replacement."
  },
  {
    icon: <Refrigerator className="h-8 w-8 text-blue-600" />,
    title: "Fridge & Deep Freezer",
    desc: "Gas leakage fixing, thermostat change, cooling issue permanent solution at your doorstep."
  },
  {
    icon: <ShieldAlert className="h-8 w-8 text-blue-600" />,
    title: "Inverter AC Specialization",
    desc: "Latest DC Inverter AC error codes aur PCB circuit repair specialist technicians."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl font-bold text-slate-900">Humari Maharat (Services)</h2>
        <p className="text-slate-600 mt-2">Ghar baithe behtareen aur tasalli-bakhsh kaam karwayein</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((item, idx) => (
          <div key={idx} className="border border-slate-100 rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition">
            <div className="bg-blue-50 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
              {item.icon}
            </div>
            <h3 className="font-bold text-xl text-slate-800 mb-2">{item.title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}