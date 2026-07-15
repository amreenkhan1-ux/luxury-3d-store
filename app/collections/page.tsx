"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Check, ShoppingBag, ArrowRight } from "lucide-react";
import { supabase } from "@/lib/supabase"; // Tumhari lib file

export default function CollectionsProductsPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [orderForm, setOrderForm] = useState({
    qty: 1,
    metalColor: "Platinum", // Default
    ringSize: "6",
    engraving: "",
    clientName: "",
    clientEmail: "",
    clientPhone: ""
  });
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  // Database se products fetch karo
  useEffect(() => {
    async function fetchProducts() {
      const { data, error } = await supabase.from('products').select('*');
      if (error) console.error("Error fetching:", error);
      else {
        setProducts(data || []);
        if (data && data.length > 0) setSelectedProduct(data[0]);
      }
    }
    fetchProducts();
  }, []);

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderSubmitted(true);
    setTimeout(() => {
      setOrderSubmitted(false);
    }, 4500);
  };

  if (!selectedProduct) return <div className="p-20 text-center">Loading Luxury Collection...</div>;

  return (
    <div className="min-h-screen py-32 bg-[#FAF8F5] text-[#1E1F22] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl lg:text-5xl">Curated Collection</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Data Display */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            {products.map((prod) => (
              <div 
                key={prod.id} 
                onClick={() => setSelectedProduct(prod)}
                className={`p-5 cursor-pointer border ${selectedProduct.id === prod.id ? "border-[#C5A880]" : "border-stone-200"}`}
              >
                <img src={prod.image_url} alt={prod.name} className="w-full h-48 object-cover" />
                <h4 className="mt-4 font-serif text-base">{prod.name}</h4>
                <p className="text-xs text-stone-500 mt-1">${prod.price}</p>
              </div>
            ))}
          </div>

          {/* Right Column: Customization Form */}
          <div className="lg:col-span-5 bg-white p-8 shadow-xl">
            <h3 className="text-2xl font-serif mb-4">{selectedProduct.name}</h3>
            <p className="text-stone-500 text-sm mb-6">{selectedProduct.description}</p>
            
            <form onSubmit={handleOrderSubmit} className="space-y-4">
              <input 
                placeholder="Full Name" 
                className="w-full border-b p-2" 
                required 
                onChange={(e) => setOrderForm({...orderForm, clientName: e.target.value})}
              />
              <button type="submit" className="w-full bg-[#1E1F22] text-white py-4 mt-6">
                Reserve Piece
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
