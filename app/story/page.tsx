"use client";
import React from "react";

export default function StoryPage() {
  return (
    <div className="pt-32 pb-24 bg-[#FAF8F5]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <span className="text-[11px] uppercase tracking-[0.3em] text-[#C5A880] font-semibold mb-6 block">Our Legacy</span>
        <h1 className="font-serif text-4xl md:text-6xl text-[#1E1F22] mb-8 font-light">Crafted for the Connoisseur</h1>
        <div className="h-[1px] bg-[#C5A880] w-12 mx-auto mb-8" />
        <p className="text-stone-600 leading-relaxed text-base md:text-lg font-light tracking-wide mb-12">
          Every piece from Lustum Nures tells a story of meticulous curation and master craftsmanship. We source only conflict-free solitaires and certified 22k gold to design pieces that are as unique as your own thumbprint.
        </p>
        <div className="aspect-[21/9] w-full overflow-hidden bg-stone-100 border border-stone-200/40">
          <video src="/videos/ring-video.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}
