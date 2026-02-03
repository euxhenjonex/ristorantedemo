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

  // Lock body scroll when mobile menu open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-night-950/95 backdrop-blur-lg py-3 shadow-[0_1px_0_rgba(184,155,106,0.08)]'
          : 'bg-transparent py-5 md:py-6'
      }`}
    >
      <div className="container mx-auto px-5 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/logo-portside.png"
            alt="Port Side Beach"
            width={36}
            height={36}
            className={`transition-all duration-500 ${isScrolled ? 'w-8 h-8' : 'w-9 h-9 md:w-10 md:h-10'}`}
            priority
          />
          <div className="flex flex-col">
            <span
              className="text-base md:text-lg tracking-[0.15em] text-sand-50 font-light leading-none"
              style={{ fontFamily: 'var(--font-cormorant)' }}
            >
              PORT SIDE
            </span>
            <span className="font-accent text-[0.45rem] tracking-[0.3em] uppercase text-sand-400/60 mt-0.5">
              Beach
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="font-accent text-[0.7rem] uppercase tracking-[0.2em] text-sand-200/60 hover:text-sand-100 transition-colors duration-300">
            Home
          </Link>
          <Link href="/menu" className="font-accent text-[0.7rem] uppercase tracking-[0.2em] text-sand-200/60 hover:text-sand-100 transition-colors duration-300">
            Menu
          </Link>
          <a href="/#events" className="font-accent text-[0.7rem] uppercase tracking-[0.2em] text-sand-200/60 hover:text-sand-100 transition-colors duration-300">
            Events
          </a>
          <a href="#footer" className="font-accent text-[0.7rem] uppercase tracking-[0.2em] text-sand-200/60 hover:text-sand-100 transition-colors duration-300">
            Contact
          </a>
          <Link
            href="/rezervo"
            className="bg-sand-400/90 text-night-950 px-5 py-2 font-accent uppercase text-[0.65rem] tracking-[0.2em] hover:bg-sand-300 transition-all duration-300"
          >
            Reserve
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-sand-100 w-11 h-11 flex items-center justify-center"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu - slide from right */}
      <div
        className={`md:hidden fixed inset-0 top-0 z-40 transition-all duration-500 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-night-950/80 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-[75vw] max-w-[320px] bg-night-900 border-l border-sand-900/30 flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Close button */}
          <div className="flex justify-end p-5">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-sand-200/60 w-11 h-11 flex items-center justify-center"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Links */}
          <nav className="flex flex-col gap-1 px-8 pt-4">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="font-accent text-sm uppercase tracking-[0.2em] text-sand-100/80 py-4 border-b border-sand-900/20 hover:text-sand-50 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/menu"
              onClick={() => setMobileMenuOpen(false)}
              className="font-accent text-sm uppercase tracking-[0.2em] text-sand-100/80 py-4 border-b border-sand-900/20 hover:text-sand-50 transition-colors"
            >
              Menu
            </Link>
            <a
              href="/#events"
              onClick={() => setMobileMenuOpen(false)}
              className="font-accent text-sm uppercase tracking-[0.2em] text-sand-100/80 py-4 border-b border-sand-900/20 hover:text-sand-50 transition-colors"
            >
              Events
            </a>
            <a
              href="#footer"
              onClick={() => setMobileMenuOpen(false)}
              className="font-accent text-sm uppercase tracking-[0.2em] text-sand-100/80 py-4 border-b border-sand-900/20 hover:text-sand-50 transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Reserve CTA */}
          <div className="px-8 mt-8">
            <Link
              href="/rezervo"
              onClick={() => setMobileMenuOpen(false)}
              className="block bg-sand-400 text-night-950 w-full text-center py-4 uppercase font-accent text-xs tracking-[0.2em] hover:bg-sand-300 transition-colors"
            >
              Reserve a Table
            </Link>
          </div>

          {/* Bottom info */}
          <div className="mt-auto px-8 pb-8">
            <p className="text-sand-400/40 text-xs tracking-wider">
              Open daily 08:00 - 00:00
            </p>
            <p className="text-sand-400/30 text-xs mt-1">
              Rruga Currila, Durr&euml;s
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
