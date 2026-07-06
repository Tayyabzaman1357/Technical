"use client";
import { useState } from "react";
import { MapPin, Phone, MessageSquare } from "lucide-react";

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [issue, setIssue] = useState("Ac complain");

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    // Your Real Business WhatsApp Endpoint
    const dukanWhatsAppNumber = "923103250549";
    const message = `🚨 *NEW SERVICE COMPLAINT* 🚨\n\n👤 *Customer Name:* ${name}\n📞 *Phone:* ${phone}\n🛠️ *Appliance:* ${issue}\n\n_Kindly check this status ASAP!_`;

    const whatsappUrl = `https://wa.me/${dukanWhatsAppNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-yellow-400 font-extrabold uppercase tracking-widest text-sm">
            Raabta Karein
          </span>
          <h2 className="text-4xl font-black mt-2">
            Dukan Ki Location & Timings
          </h2>
          <p className="text-slate-400 mt-4 leading-relaxed">
            Aap dukan par visit bhi kar sakte hain ya sirf niche diye gaye form
            se online complaint register karwa sakte hain.
          </p>

          <div className="mt-10 space-y-6">
            <div className="flex gap-4 items-start">
              <div className="bg-slate-800 p-3 rounded-xl border border-slate-700 text-blue-400">
                <MapPin />
              </div>
              <div>
                <h4 className="font-bold text-lg text-white">Shop Address</h4>
                <p className="text-slate-400 text-sm mt-0.5">
                  Modern TV, CB-27 Gulistan Society, Main Quaidabad, Karachi
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="bg-slate-800 p-3 rounded-xl border border-slate-700 text-blue-400">
                <Phone />
              </div>
              <div>
                <h4 className="font-bold text-lg text-white">
                  Direct Phone Call
                </h4>
                <p className="text-emerald-400 font-extrabold text-lg mt-0.5">
                  0310-3250549
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Real Dynamic Booking Card */}
        <div className="bg-slate-800/80 p-8 rounded-2xl border border-slate-700/60 shadow-2xl backdrop-blur-sm">
          <h3 className="text-2xl font-black text-white flex items-center gap-2 mb-2">
            <MessageSquare className="text-emerald-400 fill-emerald-400 h-5 w-5" />{" "}
            Quick Booking System
          </h3>
          <p className="text-slate-400 text-sm mb-6">
            Details enter kar ke button dabaayein, order seedha WhatsApp par mil
            jayega.
          </p>

          <form onSubmit={handleBookingSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                Aap ka Full Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700/70 rounded-xl p-3.5 text-white focus:outline-none focus:border-blue-500 transition font-medium"
                placeholder="Muhammad Asif"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                Mobile Number (WhatsApp)
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700/70 rounded-xl p-3.5 text-white focus:outline-none focus:border-blue-500 transition font-medium"
                placeholder="03103250549"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                Masla / Service Requirement
              </label>
              <select
                value={issue}
                onChange={(e) => setIssue(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700/70 rounded-xl p-3.5 text-white focus:outline-none focus:border-blue-500 transition font-medium text-base"
              >
                <option value="Ac complain">Ac complain</option>
                <option value="fridge">fridge</option>
                <option value="dispenser">dispenser</option>
                <option value="deepfreezer">deepfreezer</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold py-4 rounded-xl transition duration-150 shadow-lg shadow-emerald-900/20 text-base mt-2"
            >
              Send Order via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
