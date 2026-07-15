"use client";
import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Link from "next/link";

// Framer motion variants
const fadeInUp: Variants = {
  hidden: { 
    opacity: 0, 
    y: 40 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.16, 1, 0.3, 1] 
    }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

// Modal animation variants
const modalVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } 
  },
  exit: { 
    opacity: 0, 
    scale: 0.95, 
    y: 15,
    transition: { duration: 0.3, ease: "easeInOut" } 
  }
};

export default function Home() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  
  // Luxury Modal States
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [inquiryForm, setInquiryForm] = useState({ name: "", email: "" });

  const bestsellers = [
    { 
      name: "Aurelia Solitaire Band", 
      desc: "18k Yellow Gold, 1.2ct Diamond", 
      longDesc: "Crafted with the finest ethically-sourced brilliant cut diamond, set gracefully upon a tapered solid yellow gold band. Designed to catch light from every angle with breathtaking fire.",
      price: "$2,450", 
      mediaSrc: "/aurelia-ring.mp4",
      specs: { metal: "18k Yellow Gold", stone: "1.2ct Round Brilliant", clarity: "VVS2, Color F", certification: "GIA Certified" }
    },
    { 
      name: "Nures Signature Oval", 
      desc: "Platinum, 2.0ct VVS1 Diamond", 
      longDesc: "An exquisite oval-cut solitaire showcasing master craftsmanship. Hand-set in pristine, heavy platinum with an ultra-slim micropavé band for the modern connoisseur.",
      price: "$4,200", 
      mediaSrc: "/Nures -ring.mp4",
      specs: { metal: "Platinum (950)", stone: "2.0ct Oval Cut", clarity: "VVS1, Color E", certification: "GIA Certified" }
    },
    { 
      name: "The Celestial Tear", 
      desc: "18k Rose Gold, Pear Cut Solitaire", 
      longDesc: "A timeless tear-drop silhouette suspended in a halo of light. The warm rose gold band complements the pear-shaped diamond's delicate curves, invoking modern romance.",
      price: "$3,150", 
      mediaSrc: "/The Celestial Tear-ring.mp4",
      specs: { metal: "18k Rose Gold", stone: "1.5ct Pear Cut", clarity: "VS1, Color G", certification: "AGSL Certified" }
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

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
    <div className="relative min-h-screen bg-[#FAF8F5] text-[#1E1F22] font-sans selection:bg-[#C5A880] selection:text-[#FAF8F5] overflow-x-hidden">
      
      {/* 1. ANIMATED NAVIGATION HEADER */}
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 w-full z-50 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#C5A880]/10"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          
          {/* Circular Clustered Logo Container */}
          <Link href="/" className="flex items-center hover:opacity-90 transition-opacity">
            <div className="h-14 w-14 rounded-full overflow-hidden border border-[#C5A880]/20 shadow-sm flex items-center justify-center bg-stone-50">
              <img 
                src="/Logo.jpg" 
                alt="Lustum Nures Logo" 
                className="h-full w-full object-cover scale-105"
                onError={(e) => {
                  console.error("Logo failed to load");
                }}
              />
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-10 text-xs uppercase tracking-[0.2em] font-medium text-[#1E1F22]/80">
            {["Collections", "Story", "Bestsellers", "Contact"].map((item, idx) => (
              <Link 
                key={idx} 
                href={`#${item.toLowerCase()}`} 
                className="relative group py-1 hover:text-[#C5A880] transition-colors duration-300"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C5A880] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link 
                href="#contact" 
                className="border border-[#1E1F22] text-xs uppercase tracking-[0.15em] px-6 py-2.5 hover:bg-[#1E1F22] hover:text-[#FAF8F5] transition-all duration-300 font-medium inline-block"
              >
                Book Consultation
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.header>

      {/* 2. REFINED HERO SECTION */}
      <section className="min-h-screen w-full flex flex-col md:flex-row items-center justify-between pt-24 md:pt-16 pb-12 px-6 md:px-16 gap-12 bg-[#FAF8F5]">
        
        {/* Left Side: Text Content */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="w-full md:w-[45%] flex flex-col justify-center space-y-8 mt-8 md:mt-0"
        >
          <motion.span 
            variants={fadeInUp} 
            className="text-[10px] tracking-[0.25em] text-[#C5A880] uppercase font-semibold"
          >
            The Grand Opening
          </motion.span>
          
          <motion.h1 
            variants={fadeInUp} 
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-[#1E1F22] tracking-tight leading-[1.05]"
          >
            LUSTUM <br />
            <span className="italic text-[#C5A880] font-light">NURES</span>
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp} 
            className="text-stone-600 max-w-md text-sm leading-relaxed font-light"
          >
            Luxury doesn't need to speak loudly. Discover handcrafted gold and solitaire diamond rings designed to capture life's rarest moments.
          </motion.p>
          
          <motion.div variants={fadeInUp}>
            <Link href="#collections">
              <button className="w-fit bg-[#1E1F22] text-[#FAF8F5] px-10 py-4 text-xs tracking-[0.15em] uppercase hover:bg-stone-800 transition-all duration-300">
                Shop Collection
              </button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Side: Smooth Framed Video */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="w-full md:w-[52%] h-[450px] md:h-[580px] relative overflow-hidden bg-stone-100 shadow-sm"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/ring-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>

      </section>

      {/* 3. THE BRAND STORY / EDITORIAL */}
      <motion.section 
        id="story" 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="py-24 md:py-32 bg-[#FAF8F5] relative"
      >
        <div className="max-w-5xl mx-auto px-6 text-center">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#C5A880] font-semibold mb-6 block">Our Legacy</span>
          <h2 className="font-serif text-3xl md:text-5xl text-[#1E1F22] mb-8 font-light leading-snug">
            Crafted for the connoisseur. <br />
            <span className="italic text-[#C5A880]">Timeless elegance meets modern artistry.</span>
          </h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "48px" }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-[1px] bg-[#C5A880] mx-auto mb-8" 
          />
          <p className="text-stone-600 max-w-2xl mx-auto leading-relaxed text-sm md:text-base font-light tracking-wide">
            Every piece from Lustum Nures tells a story of meticulous curation and master craftsmanship. We source only conflict-free solitaires and certified 22k gold to design pieces that are as unique as your own thumbprint.
          </p>
        </div>
      </motion.section>

      {/* 4. FEATURED COLLECTIONS */}
      <section id="collections" className="py-24 bg-[#FAF8F5] border-t border-stone-200/30">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#C5A880] font-semibold mb-2 block">Curated Vault</span>
              <h2 className="font-serif text-3xl md:text-5xl text-[#1E1F22] font-light">Featured Collections</h2>
            </div>
           
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                num: "01",
                title: "The Solitaire Promise",
                desc: "Pristine hand-cut diamonds mounted on delicate gold bands.",
                bgMedia: "/videos/aurelia-ring.mp4" 
              },
              {
                num: "02",
                title: "Bridal Heirloom",
                desc: "Grand intricate sets carrying the warmth of generational blessings.",
                bgMedia: "/videos/Nures -ring.mp4" 
              },
              {
                num: "03",
                title: "The Minimalist Band",
                desc: "Subtle, daily-wear statements crafted in solid rose and yellow gold.",
                bgMedia: "/videos/The Celestial Tear-ring.mp4" 
              }
            ].map((col, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6 }}
                className="group relative bg-[#FAF8F5] border border-stone-200/50 p-8 pt-24 flex flex-col justify-between aspect-[3/4] overflow-hidden transition-all duration-500"
              >
                {/* Dynamic Background Video/Image on Card Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none mix-blend-multiply">
                  <video
                    src={col.bgMedia}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover grayscale"
                  />
                </div>

                <div>
                  <span className="font-sans text-xs tracking-widest text-[#C5A880] font-semibold block mb-4">{col.num} /</span>
                  <h3 className="font-serif text-2xl text-[#1E1F22] font-normal group-hover:text-[#C5A880] transition-colors duration-300">
                    {col.title}
                  </h3>
                  <p className="text-stone-500 text-xs mt-3 leading-relaxed font-light">
                    {col.desc}
                  </p>
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-stone-200/60 pt-4">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#1E1F22] group-hover:translate-x-1 transition-transform duration-300">
                    Explore Series
                  </span>
                  <span className="text-stone-400 text-xs">→</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. BESTSELLERS SECTION WITH LUXURY MODAL COUPLING */}
      <section id="bestsellers" className="py-24 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-6">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#C5A880] font-semibold mb-2 block">Most Coveted</span>
            <h2 className="font-serif text-3xl md:text-5xl text-[#1E1F22] font-light">The Bestsellers</h2>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {bestsellers.map((prod, index) => {
              const isVideo = prod.mediaSrc.endsWith(".mp4");

              return (
                <motion.div 
                  key={index} 
                  variants={fadeInUp}
                  className="group cursor-pointer"
                >
                  {/* Media Container */}
                  <div className="bg-stone-100 overflow-hidden relative aspect-[4/5] flex items-center justify-center border border-stone-200/40 shadow-sm rounded-sm">
                    {isVideo ? (
                      <video
                        src={prod.mediaSrc}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    ) : (
                      <img 
                        src={prod.mediaSrc} 
                        alt={prod.name}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    )}
                    
                    {/* Hover Overlays */}
                    <div className="absolute inset-0 bg-[#1E1F22]/20 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                      <motion.button 
                        onClick={() => setSelectedProduct(prod)}
                        whileHover={{ scale: 1.05, backgroundColor: "#1E1F22", color: "#FAF8F5" }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-[#FAF8F5] text-[#1E1F22] border border-[#1E1F22]/10 px-6 py-3 text-xs uppercase tracking-[0.2em] font-medium transition-colors duration-300 shadow-md"
                      >
                        Inquire Piece
                      </motion.button>
                    </div>
                  </div>

                  <div className="mt-6 flex justify-between items-start" onClick={() => setSelectedProduct(prod)}>
                    <div>
                      <h3 className="font-serif text-lg text-[#1E1F22] font-normal group-hover:text-[#C5A880] transition-colors duration-300">
                        {prod.name}
                      </h3>
                      <p className="text-stone-400 text-xs font-light mt-1">{prod.desc}</p>
                    </div>
                    <span className="font-sans text-stone-700 text-sm font-medium">{prod.price}</span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* LUXURY INQUIRY MODAL (AnimatePresence Layer) */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
          >
            {/* Click outside container to close */}
            <div className="absolute inset-0" onClick={() => setSelectedProduct(null)} />

            {/* Modal Box */}
            <motion.div 
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative bg-[#FAF8F5] w-full max-w-4xl rounded-sm overflow-hidden shadow-2xl border border-[#C5A880]/20 flex flex-col md:flex-row z-10 max-h-[90vh] md:max-h-none overflow-y-auto md:overflow-visible"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-20 text-[#1E1F22] hover:text-[#C5A880] transition-colors p-2 text-xl focus:outline-none"
              >
                ✕
              </button>

              {/* Left: HD Render Video / Visual Box */}
              <div className="w-full md:w-1/2 bg-stone-100 relative aspect-square md:aspect-auto md:min-h-[500px]">
                {selectedProduct.mediaSrc.endsWith(".mp4") ? (
                  <video
                    src={selectedProduct.mediaSrc}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img 
                    src={selectedProduct.mediaSrc} 
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              {/* Right: Detailed Craft Specs & Quick Consultation */}
              <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-between bg-[#FAF8F5]">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A880] font-semibold">Bespoke Collection</span>
                  <h3 className="font-serif text-2xl md:text-3xl text-[#1E1F22] mt-1 font-normal">{selectedProduct.name}</h3>
                  <p className="font-sans text-stone-700 font-medium text-lg mt-1">{selectedProduct.price}</p>
                  
                  <p className="text-stone-500 text-xs font-light mt-4 leading-relaxed">
                    {selectedProduct.longDesc}
                  </p>

                  {/* Metal specs grid */}
                  <div className="mt-6 border-t border-b border-stone-200/60 py-4 grid grid-cols-2 gap-y-2.5 gap-x-4 text-[11px]">
                    <div>
                      <span className="text-stone-400 block uppercase tracking-wider">Metal Type</span>
                      <span className="text-[#1E1F22] font-medium">{selectedProduct.specs.metal}</span>
                    </div>
                    <div>
                      <span className="text-stone-400 block uppercase tracking-wider">Center Stone</span>
                      <span className="text-[#1E1F22] font-medium">{selectedProduct.specs.stone}</span>
                    </div>
                    <div>
                      <span className="text-stone-400 block uppercase tracking-wider">Clarity & Color</span>
                      <span className="text-[#1E1F22] font-medium">{selectedProduct.specs.clarity}</span>
                    </div>
                    <div>
                      <span className="text-stone-400 block uppercase tracking-wider">Certification</span>
                      <span className="text-[#1E1F22] font-medium">{selectedProduct.specs.certification}</span>
                    </div>
                  </div>
                </div>

                {/* Micro inquiry submission form */}
                <div className="mt-8">
                  {inquirySubmitted ? (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-emerald-50 border border-emerald-200 p-4 text-center rounded-sm"
                    >
                      <p className="text-emerald-800 text-xs font-semibold uppercase tracking-wider">Inquiry Received</p>
                      <p className="text-stone-500 text-[11px] mt-1">Our concierge team will reach out within 24 hours.</p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleInquirySubmit} className="space-y-3">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-[#1E1F22] font-semibold">Request Consultation</p>
                      <div className="grid grid-cols-2 gap-3">
                        <input 
                          type="text" 
                          placeholder="Your Name" 
                          required
                          value={inquiryForm.name}
                          onChange={(e) => setInquiryForm({ ...inquiryForm, name: e.target.value })}
                          className="bg-stone-100/50 border border-stone-200 text-xs px-3 py-2.5 focus:outline-none focus:border-[#C5A880] text-[#1E1F22] transition-colors"
                        />
                        <input 
                          type="email" 
                          placeholder="Email Address" 
                          required
                          value={inquiryForm.email}
                          onChange={(e) => setInquiryForm({ ...inquiryForm, email: e.target.value })}
                          className="bg-stone-100/50 border border-stone-200 text-xs px-3 py-2.5 focus:outline-none focus:border-[#C5A880] text-[#1E1F22] transition-colors"
                        />
                      </div>
                      <button 
                        type="submit"
                        className="w-full bg-[#1E1F22] text-[#FAF8F5] hover:bg-[#C5A880] transition-colors duration-300 text-[10px] uppercase tracking-[0.25em] py-3 font-semibold"
                      >
                        Send Message to Concierge
                      </button>
                    </form>
                  )}
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 6. APPOINTMENT FORM SECTION */}
      <section id="contact" className="py-24 bg-[#1E1F22] text-[#FAF8F5] relative overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.4, 0.3]
          }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-[#C5A880]/15 rounded-full blur-[140px]" 
        />

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:col-span-5"
            >
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#C5A880] font-semibold mb-4 block">Private Salon</span>
              <h2 className="font-serif text-3xl md:text-5xl font-light mb-6 leading-tight">
                Design Your <br /><span className="italic text-[#C5A880]">Heirloom</span>
              </h2>
              <p className="text-stone-400 text-sm font-light leading-relaxed mb-8">
                Schedule a virtual preview or visit our private viewing salon to craft tailored diamond collections unique to you.
              </p>
              <div className="space-y-4 text-xs tracking-widest text-[#C5A880] uppercase">
                <p>📍 Mayfair, London / Virtual Salon</p>
                <p>✉️ concierge@lustumnures.com</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:col-span-7 bg-[#FAF8F5]/5 p-8 md:p-12 border border-[#C5A880]/20 backdrop-blur-sm"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative group">
                  <label className="block text-[10px] uppercase tracking-widest text-[#C5A880] mb-2 font-semibold">Your Name</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Enter your name" 
                    className="w-full bg-transparent border-b border-stone-600 focus:border-[#C5A880] transition-colors py-3 text-sm font-light outline-none text-[#FAF8F5] placeholder-stone-600"
                  />
                </div>

                <div className="relative group">
                  <label className="block text-[10px] uppercase tracking-widest text-[#C5A880] mb-2 font-semibold">Email Address</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="Enter your email" 
                    className="w-full bg-transparent border-b border-stone-600 focus:border-[#C5A880] transition-colors py-3 text-sm font-light outline-none text-[#FAF8F5] placeholder-stone-600"
                  />
                </div>

                <div className="relative group">
                  <label className="block text-[10px] uppercase tracking-widest text-[#C5A880] mb-2 font-semibold">What are you looking to craft?</label>
                  <textarea 
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="E.g., Bespoke solitaire band..." 
                    className="w-full bg-transparent border-b border-stone-600 focus:border-[#C5A880] transition-colors py-3 text-sm font-light outline-none text-[#FAF8F5] placeholder-stone-600 resize-none"
                  />
                </div>

                <motion.button 
                  type="submit" 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-[#C5A880] text-[#1E1F22] tracking-[0.2em] text-xs uppercase py-4 font-semibold hover:bg-[#FAF8F5] transition-all duration-300"
                >
                  Request Consultation
                </motion.button>

                <AnimatePresence>
                  {submitted && (
                    <motion.p 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="text-[#C5A880] text-xs text-center mt-4 tracking-wider"
                    >
                      Thank you. Our luxury concierge will contact you shortly.
                    </motion.p>
                  )}
                </AnimatePresence>
              </form>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
}
