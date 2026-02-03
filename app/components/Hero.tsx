'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MapPin } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative h-[100dvh] min-h-[600px] flex items-center justify-center overflow-hidden bg-night-950">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/menu-item-1.png"
          className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-auto min-w-full object-cover"
        >
          <source src="/video hero.mp4" type="video/mp4" />
        </video>

        {/* Dark vignette overlays for desktop (sides) */}
        <div className="hidden md:block absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-night-950 via-night-950/80 to-transparent z-[1]" />
        <div className="hidden md:block absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-night-950 via-night-950/80 to-transparent z-[1]" />

        {/* Top-to-bottom gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-night-950/70 via-transparent to-night-950/90 z-[2]" />
        {/* Extra bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-night-950 to-transparent z-[2]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto flex flex-col items-center gap-5">
        {/* Logo */}
        <div
          className="transition-all duration-1000 ease-out flex flex-col items-center"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(20px)',
          }}
        >
          <Image
            src="/logo-portside.png"
            alt="Port Side Beach"
            width={100}
            height={100}
            className="w-20 h-20 md:w-24 md:h-24 mb-5"
            priority
          />
          <h1 className="text-[clamp(2.5rem,8vw,5.5rem)] font-light tracking-[0.15em] text-sand-50 leading-[0.95]"
            style={{ fontFamily: 'var(--font-cormorant)' }}
          >
            PORT SIDE
          </h1>
          <div className="flex items-center justify-center gap-3 mt-1">
            <span className="h-px w-8 bg-sand-400/50" />
            <span className="font-accent text-[0.65rem] md:text-xs tracking-[0.4em] uppercase text-sand-400">
              Beach
            </span>
            <span className="h-px w-8 bg-sand-400/50" />
          </div>
        </div>

        {/* Tagline */}
        <h2
          className="text-[clamp(1.25rem,3.5vw,2.25rem)] font-light text-sand-100/90 italic leading-snug mt-2"
          style={{
            fontFamily: 'var(--font-cormorant)',
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 1s ease-out 0.2s',
          }}
        >
          Where time slows down
        </h2>

        {/* Subtitle */}
        <p
          className="font-accent text-xs md:text-sm tracking-[0.25em] uppercase text-sand-300/70"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 1s ease-out 0.35s',
          }}
        >
          Boho taste, seaside soul
        </p>

        {/* Location badge */}
        <div
          className="flex items-center gap-2 text-sand-200/50 text-xs tracking-wider mt-1"
          style={{
            opacity: loaded ? 1 : 0,
            transition: 'opacity 1s ease-out 0.5s',
          }}
        >
          <MapPin size={12} />
          <span>Rruga Currila, Durr&#235;s</span>
        </div>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-3 mt-6 w-full sm:w-auto"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 1s ease-out 0.55s',
          }}
        >
          <Link
            href="/rezervo"
            className="group relative px-10 py-4 bg-sand-400 text-night-950 uppercase tracking-[0.2em] font-medium text-xs overflow-hidden transition-all duration-300 hover:bg-sand-300 hover:shadow-[0_0_40px_rgba(184,155,106,0.25)] text-center"
          >
            Reserve a Table
          </Link>

          <Link
            href="/menu"
            className="px-10 py-4 border border-sand-200/20 text-sand-100 uppercase tracking-[0.2em] text-xs transition-all duration-300 hover:border-sand-400/50 hover:text-sand-50 text-center backdrop-blur-sm"
          >
            View Menu
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        style={{
          opacity: loaded ? 1 : 0,
          transition: 'opacity 1.5s ease-out 1s',
        }}
      >
        <span className="font-accent text-[0.6rem] tracking-[0.3em] uppercase text-sand-400/40">
          Scroll
        </span>
        <div className="w-px h-8 relative overflow-hidden">
          <div className="w-full h-full bg-sand-400/30 animate-scroll-hint" />
        </div>
      </div>
    </section>
  );
}
