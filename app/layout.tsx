import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lustum Nures",
  description: "Luxury handcrafted gold and solitaire diamond rings",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#FAF8F5] text-[#1E1F22] selection:bg-[#C5A880] selection:text-[#FAF8F5]`}>
        
        {/* GLOBAL HEADER */}
        <header className="fixed top-0 left-0 w-full z-50 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#C5A880]/10">
          <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
            
            {/* Logo */}
            <Link href="/" className="flex items-center hover:opacity-90 transition-opacity">
              <div className="h-14 w-14 rounded-full overflow-hidden border border-[#C5A880]/20 shadow-sm flex items-center justify-center bg-stone-50">
                <img 
                  src="/videos/Logo.jpg" 
                  alt="Lustum Nures Logo" 
                  className="h-full w-full object-cover scale-105"
                />
              </div>
            </Link>
            
            {/* Nav Links (Pointing to separate pages now!) */}
            <nav className="hidden md:flex items-center space-x-10 text-xs uppercase tracking-[0.2em] font-medium text-[#1E1F22]/80">
              <Link href="/collections" className="hover:text-[#C5A880] transition-colors">Collections</Link>
              <Link href="/story" className="hover:text-[#C5A880] transition-colors">Story</Link>
              <Link href="/bestsellers" className="hover:text-[#C5A880] transition-colors">Bestsellers</Link>
              <Link href="/contact" className="hover:text-[#C5A880] transition-colors">Contact</Link>
            </nav>

            <div>
              <Link 
                href="/contact" 
                className="border border-[#1E1F22] text-xs uppercase tracking-[0.15em] px-6 py-2.5 hover:bg-[#1E1F22] hover:text-[#FAF8F5] transition-all duration-300 font-medium inline-block"
              >
                Book Consultation
              </Link>
            </div>
          </div>
        </header>

        {/* PAGES CONTENT GOES HERE */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* GLOBAL FOOTER */}
        <footer className="bg-[#FAF8F5] pt-16 pb-8 border-t border-stone-200">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
              <div>
                <h4 className="font-serif text-xl tracking-[0.2em] mb-4">LUSTUM <span className="text-[#C5A880]">N</span></h4>
                <p className="text-stone-500 text-xs font-light leading-relaxed">
                  Experience unparalleled luxury. Crafted ethically with pure passion, certified stones, and pristine design philosophies.
                </p>
              </div>
              <div>
                <h5 className="text-xs uppercase tracking-widest text-[#C5A880] font-semibold mb-4">Explore</h5>
                <ul className="space-y-2 text-xs text-stone-600 font-light">
                  <li><Link href="/collections" className="hover:text-[#1E1F22]">All Collections</Link></li>
                  <li><Link href="/story" className="hover:text-[#1E1F22]">Philosophy</Link></li>
                </ul>
              </div>
              <div>
                <h5 className="text-xs uppercase tracking-widest text-[#C5A880] font-semibold mb-4">Assistance</h5>
                <ul className="space-y-2 text-xs text-stone-600 font-light">
                  <li><Link href="/contact" className="hover:text-[#1E1F22]">Private Appointments</Link></li>
                </ul>
              </div>
              <div>
                <h5 className="text-xs uppercase tracking-widest text-[#C5A880] font-semibold mb-4">Newsletter</h5>
                <p className="text-stone-500 text-xs font-light mb-3">Join the inner circle for private vault collection openings.</p>
              </div>
            </div>
            <div className="border-t border-stone-200/60 pt-8 flex flex-col md:flex-row justify-between items-center text-[11px] text-stone-400 font-light tracking-widest">
              <p>© 2026 LUSTUM NURES JEWELRY. ALL RIGHTS RESERVED.</p>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}
