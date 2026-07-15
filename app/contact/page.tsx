"use client";
import React, { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="pt-32 pb-24 bg-[#1E1F22] text-[#FAF8F5]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#C5A880] font-semibold mb-4 block">Private Salon</span>
            <h1 className="font-serif text-4xl md:text-6xl font-light mb-6 leading-tight">Design Your Heirloom</h1>
            <p className="text-stone-400 text-sm font-light leading-relaxed mb-8">
              Schedule a virtual preview or visit our private viewing salon to craft tailored diamond collections unique to you.
            </p>
            <div className="space-y-4 text-xs tracking-widest text-[#C5A880] uppercase">
              <p>📍 Mayfair, London / Virtual Salon</p>
              <p>✉️ concierge@lustumnures.com</p>
            </div>
          </div>

          <div className="md:col-span-7 bg-[#FAF8F5]/5 p-8 md:p-12 border border-[#C5A880]/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-[#C5A880] mb-2">Your Name</label>
                <input type="text" required placeholder="Enter your name" className="w-full bg-transparent border-b border-stone-600 focus:border-[#C5A880] py-3 text-sm font-light outline-none text-[#FAF8F5]" />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-[#C5A880] mb-2">Email Address</label>
                <input type="email" required placeholder="Enter your email" className="w-full bg-transparent border-b border-stone-600 focus:border-[#C5A880] py-3 text-sm font-light outline-none text-[#FAF8F5]" />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-[#C5A880] mb-2">Message</label>
                <textarea rows={3} placeholder="Bespoke solitaire band..." className="w-full bg-transparent border-b border-stone-600 focus:border-[#C5A880] py-3 text-sm font-light outline-none text-[#FAF8F5] resize-none" />
              </div>
              <button type="submit" className="w-full bg-[#C5A880] text-[#1E1F22] tracking-[0.2em] text-xs uppercase py-4 font-semibold">Request Consultation</button>
              {submitted && <p className="text-[#C5A880] text-xs text-center mt-4">Thank you. Our luxury concierge will contact you shortly.</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
