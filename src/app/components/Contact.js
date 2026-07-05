export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold">Complaints / Service Booking</h2>
          <p className="text-slate-400 mt-2">
            Form bharein, humara technician 1 ghante ke andar aap se raabta karega.
          </p>
          
          <div className="mt-8 space-y-4 text-slate-300">
            <p><strong>📍 Dukan Address:</strong> Shop #4, Main Commercial Market, Karachi.</p>
            <p><strong>📞 Phone:</strong> +92 300 1234567</p>
            <p><strong>🕒 Timings:</strong> 10:00 AM - 10:00 PM (Sunday Closed)</p>
          </div>
        </div>

        {/* Actionable Form */}
        <form className="bg-slate-800 p-6 rounded-xl border border-slate-700 space-y-4 shadow-xl">
          <div>
            <label className="block text-sm font-medium mb-1">Aap ka Naam</label>
            <input type="text" className="w-full bg-slate-900 border border-slate-700 rounded p-2.5 text-white focus:outline-none focus:border-blue-500" placeholder="Ali Khan" required />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Phone Number</label>
            <input type="tel" className="w-full bg-slate-900 border border-slate-700 rounded p-2.5 text-white focus:outline-none focus:border-blue-500" placeholder="03001234567" required />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Masla Select Karein</label>
            <select className="w-full bg-slate-900 border border-slate-700 rounded p-2.5 text-white focus:outline-none focus:border-blue-500">
              <option>AC Service / Cleaning</option>
              <option>AC Cooling Issue / Gas Leakage</option>
              <option>Fridge Repairing</option>
              <option>New Appliance Buy Inquiry</option>
            </select>
          </div>
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded transition shadow-lg mt-2">
            Technician Bulayein
          </button>
        </form>
      </div>
    </section>
  );
}