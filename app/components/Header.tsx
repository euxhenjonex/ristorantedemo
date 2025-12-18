'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-6'}`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="relative h-12 w-48 md:h-14 md:w-56">
          <Image src="/logo.png" alt="Bistro Tirana" fill className="object-contain object-left" priority />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm uppercase tracking-widest hover:text-gold-400 transition-colors">Home</Link>
          <Link href="/menu" className="text-sm uppercase tracking-widest hover:text-gold-400 transition-colors">Menu</Link>
          <a href="#footer" className="text-sm uppercase tracking-widest hover:text-gold-400 transition-colors">Kontakt</a>
          <Link
            href="/rezervo"
            className="bg-gold-500 text-black px-6 py-2 uppercase text-xs font-bold tracking-widest hover:bg-gold-400 transition-colors"
          >
            Rezervo
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-t border-white/10 p-6 flex flex-col gap-6 items-center">
          <Link href="/" onClick={() => setMobileMenuOpen(false)} className="text-lg uppercase tracking-widest">Home</Link>
          <Link href="/menu" onClick={() => setMobileMenuOpen(false)} className="text-lg uppercase tracking-widest">Menu</Link>
          <a href="#footer" onClick={() => setMobileMenuOpen(false)} className="text-lg uppercase tracking-widest">Kontakt</a>
          <Link
            href="/rezervo"
            onClick={() => setMobileMenuOpen(false)}
            className="bg-gold-500 text-black w-full text-center py-3 uppercase font-bold tracking-widest rounded-lg"
          >
            Rezervo Tavolinë
          </Link>
        </div>
      )}
    </header>
  );
}
