import { Refrigerator, Snowflake } from 'lucide-react';

const featuredStock = [
  {
    id: 1,
    type: "AC",
    title: "Dawlance 1.5 Ton DC Inverter",
    condition: "Brand New",
    price: "Rs. 145,000",
    saving: "Save 10%",
    features: ["75% Energy Saving", "T3 Twin Rotary Compressor", "12 Years Warranty"]
  },
  {
    id: 2,
    type: "Fridge",
    title: "Haier Digital Inverter Refrigerator",
    condition: "9/10 Condition (Used)",
    price: "Rs. 68,000",
    saving: "Best Price",
    features: ["12 Cubic Feet", "No Frost Technology", "100% Copper Condenser"]
  },
  {
    id: 3,
    type: "AC",
    title: "Gree 1 Ton Fairy Inverter AC",
    condition: "Brand New",
    price: "Rs. 118,000",
    saving: "Top Rated",
    features: ["WiFi Enabled", "Eco-Friendly R32 Gas", "Fast Cooling Mod"]
  }
];

export default function Products() {
  return (
    <section id="products" className="py-20 bg-slate-50 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
        <div>
          <span className="text-blue-600 font-bold text-sm uppercase tracking-widest block mb-2">Dukan ka Ready Stock</span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">Featured Appliances For Sale</h2>
        </div>
        <p className="text-slate-500 max-w-md mt-4 md:mt-0">Humare paas naye aur imported premium used AC aur Fridges wholesale rates par her waqt majood hote hain.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {featuredStock.map((item) => (
          <div key={item.id} className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 flex flex-col">
            <div className="bg-slate-100 h-48 flex items-center justify-center relative">
              <span className={`absolute top-4 left-4 text-xs font-bold px-2.5 py-1 rounded-md text-white ${item.condition.includes('New') ? 'bg-green-600' : 'bg-amber-600'}`}>
                {item.condition}
              </span>
              <span className="absolute top-4 right-4 bg-blue-100 text-blue-800 text-xs font-bold px-2 py-0.5 rounded">
                {item.saving}
              </span>
              {item.type === "AC" ? (
                <Snowflake className="h-20 w-20 text-blue-400" />
              ) : (
                <Refrigerator className="h-20 w-20 text-blue-400" />
              )}
            </div>
            
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="font-extrabold text-xl text-slate-900 tracking-tight">{item.title}</h3>
              <div className="text-2xl font-black text-blue-600 my-3">{item.price}</div>
              
              <ul className="space-y-2 mb-6 text-slate-600 text-sm flex-1">
                {item.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    {feat}
                  </li>
                ))}
              </ul>
              
              <a 
                href={`https://wa.me/923001234567?text=Assalam-o-Alaikum, mujhe aap ke stock se *${encodeURIComponent(item.title)}* ki details chahiye.`}
                target="_blank"
                rel="noreferrer"
                className="w-full text-center bg-emerald-600 text-white font-bold py-3 rounded-xl hover:bg-emerald-700 transition"
              >
                Buy via WhatsApp
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}