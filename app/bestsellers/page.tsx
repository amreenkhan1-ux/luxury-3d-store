"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BestsellersPage() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [inquiryForm, setInquiryForm] = useState({ name: "", email: "" });

  const bestsellers = [
    { 
      name: "Aurelia Solitaire Band", 
      desc: "18k Yellow Gold, 1.2ct Diamond", 
      longDesc: "Crafted with the finest ethically-sourced brilliant cut diamond, set gracefully upon a tapered solid yellow gold band. Designed to catch light from every angle with breathtaking fire.",
      price: "$2,450", 
      mediaSrc: "/videos/aurelia-ring.mp4",
      specs: { metal: "18k Yellow Gold", stone: "1.2ct Round Brilliant", clarity: "VVS2, Color F", certification: "GIA Certified" }
    },
    { 
      name: "Nures Signature Oval", 
      desc: "Platinum, 2.0ct VVS1 Diamond", 
      longDesc: "An exquisite oval-cut solitaire showcasing master craftsmanship. Hand-set in pristine, heavy platinum with an ultra-slim micropavé band for the modern connoisseur.",
      price: "$4,200", 
      mediaSrc: "/videos/Nures -ring.mp4",
      specs: { metal: "Platinum (950)", stone: "2.0ct Oval Cut", clarity: "VVS1, Color E", certification: "GIA Certified" }
    },
    { 
      name: "The Celestial Tear", 
      desc: "18k Rose Gold, Pear Cut Solitaire", 
      longDesc: "A timeless tear-drop silhouette suspended in a halo of light. The warm rose gold band complements the pear-shaped diamond's delicate curves, invoking modern romance.",
      price: "$3,150", 
      mediaSrc: "/videos/The Celestial Tear-ring.mp4",
      specs: { metal: "18k Rose Gold", stone: "1.5ct Pear Cut", clarity: "VS1, Color G", certification: "AGSL Certified" }
    }
  ];

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySubmitted(true);
    setTimeout(() => {
      setInquirySubmitted(false);
      setSelectedProduct(null);
      setInquiryForm({ name: "", email: "" });
    }, 2500);
  };

  return (
    <div className="pt-32 pb-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#C5A880] font-semibold mb-2 block">Most Coveted</span>
          <h1 className="font-serif text-4xl md:text-6xl text-[#1E1F22] font-light">The Bestsellers</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {bestsellers.map((prod, index) => (
            <div key={index} className="group cursor-pointer" onClick={() => setSelectedProduct(prod)}>
              <div className="bg-stone-100 overflow-hidden relative aspect-[4/5] flex items-center justify-center border border-stone-200/40 shadow-sm">
                <video src={prod.mediaSrc} autoPlay loop muted playsInline className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-[#1E1F22]/20 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                  <button className="bg-[#FAF8F5] text-[#1E1F22] border border-[#1E1F22]/10 px-6 py-3 text-xs uppercase tracking-[0.2em] font-medium shadow-md">Inquire Piece</button>
                </div>
              </div>
              <div className="mt-6 flex justify-between items-start">
                <div>
                  <h3 className="font-serif text-lg text-[#1E1F22] group-hover:text-[#C5A880] transition-colors">{prod.name}</h3>
                  <p className="text-stone-400 text-xs font-light mt-1">{prod.desc}</p>
                </div>
                <span className="font-sans text-stone-700 text-sm font-medium">{prod.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
            <div className="absolute inset-0" onClick={() => setSelectedProduct(null)} />
            <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }} className="relative bg-[#FAF8F5] w-full max-w-4xl rounded-sm overflow-hidden shadow-2xl flex flex-col md:flex-row z-10 max-h-[90vh] md:max-h-none overflow-y-auto">
              <button onClick={() => setSelectedProduct(null)} className="absolute top-4 right-4 z-20 text-[#1E1F22] p-2 text-xl">✕</button>
              
              <div className="w-full md:w-1/2 bg-stone-100 relative aspect-square md:aspect-auto md:min-h-[500px]">
                <video src={selectedProduct.mediaSrc} autoPlay loop muted playsInline className="w-full h-full object-cover" />
              </div>

              <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-between bg-[#FAF8F5]">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A880] font-semibold">Bespoke Collection</span>
                  <h3 className="font-serif text-2xl text-[#1E1F22] mt-1">{selectedProduct.name}</h3>
                  <p className="font-sans text-stone-700 font-medium text-lg mt-1">{selectedProduct.price}</p>
                  <p className="text-stone-500 text-xs font-light mt-4 leading-relaxed">{selectedProduct.longDesc}</p>

                  <div className="mt-6 border-t border-b border-stone-200/60 py-4 grid grid-cols-2 gap-y-2.5 text-[11px]">
                    <div><span className="text-stone-400 block uppercase">Metal Type</span><span className="text-[#1E1F22] font-medium">{selectedProduct.specs.metal}</span></div>
                    <div><span className="text-stone-400 block uppercase">Center Stone</span><span className="text-[#1E1F22] font-medium">{selectedProduct.specs.stone}</span></div>
                    <div><span className="text-stone-400 block uppercase">Clarity & Color</span><span className="text-[#1E1F22] font-medium">{selectedProduct.specs.clarity}</span></div>
                    <div><span className="text-stone-400 block uppercase">Certification</span><span className="text-[#1E1F22] font-medium">{selectedProduct.specs.certification}</span></div>
                  </div>
                </div>

                <div className="mt-8">
                  {inquirySubmitted ? (
                    <div className="bg-emerald-50 border border-emerald-200 p-4 text-center">
                      <p className="text-emerald-800 text-xs font-semibold uppercase">Inquiry Received</p>
                    </div>
                  ) : (
                    <form onSubmit={handleInquirySubmit} className="space-y-3">
                      <div className="grid grid-cols-2 gap-3">
                        <input type="text" placeholder="Your Name" required value={inquiryForm.name} onChange={(e) => setInquiryForm({ ...inquiryForm, name: e.target.value })} className="bg-stone-100/50 border border-stone-200 text-xs px-3 py-2.5 outline-none focus:border-[#C5A880]" />
                        <input type="email" placeholder="Email" required value={inquiryForm.email} onChange={(e) => setInquiryForm({ ...inquiryForm, email: e.target.value })} className="bg-stone-100/50 border border-stone-200 text-xs px-3 py-2.5 outline-none focus:border-[#C5A880]" />
                      </div>
                      <button type="submit" className="w-full bg-[#1E1F22] text-[#FAF8F5] text-[10px] uppercase py-3 tracking-widest font-semibold">Send Message to Concierge</button>
                    </form>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
