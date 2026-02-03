'use client';

import Image from 'next/image';
import Link from 'next/link';
import { menuItems } from '../data/menu';
import Reveal from './Reveal';

const featured = menuItems.filter(item => item.featured && item.image);

export default function MenuHighlights() {
  return (
    <section className="py-20 md:py-28 bg-night-900 relative overflow-hidden">
      {/* Subtle texture */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(184,155,106,0.5) 1px, transparent 0)',
        backgroundSize: '40px 40px',
      }} />

      <div className="container mx-auto px-5 relative">
        {/* Section header */}
        <Reveal>
          <div className="mb-14 md:mb-20">
            <p className="font-accent text-[0.65rem] tracking-[0.3em] uppercase text-sand-400/50 mb-3">
              From Our Kitchen
            </p>
            <h2
              className="text-3xl md:text-5xl lg:text-6xl text-sand-50 font-light leading-[1.1]"
              style={{ fontFamily: 'var(--font-cormorant)' }}
            >
              Small plates,<br />
              <span className="italic text-sand-300">big cravings</span>
            </h2>
          </div>
        </Reveal>

        {/* Mobile: horizontal scroll / Desktop: grid */}
        <div className="flex md:grid md:grid-cols-4 gap-4 md:gap-6 overflow-x-auto snap-x-mandatory scrollbar-hide pb-4 md:pb-0 -mx-5 px-5 md:mx-0 md:px-0">
          {featured.map((item, i) => (
            <Reveal key={item.id} delay={i * 100} className="flex-shrink-0 w-[72vw] sm:w-[55vw] md:w-auto">
              <Link href="/menu" className="group block">
                {/* Image */}
                <div className="relative aspect-[3/4] overflow-hidden bg-night-800 mb-4">
                  <Image
                    src={item.image!}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 72vw, 25vw"
                    loading="lazy"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-night-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  {/* Price badge */}
                  <div className="absolute bottom-3 right-3 bg-night-950/80 backdrop-blur-sm px-3 py-1.5 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                    <span className="font-accent text-xs tracking-wider text-sand-300">{item.price}</span>
                  </div>
                </div>

                {/* Text */}
                <h3
                  className="text-lg md:text-xl text-sand-100 mb-1 group-hover:text-sand-50 transition-colors"
                  style={{ fontFamily: 'var(--font-cormorant)' }}
                >
                  {item.name}
                </h3>
                <p className="text-sand-400/50 text-sm leading-relaxed line-clamp-2">
                  {item.description}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* View full menu link */}
        <Reveal delay={400}>
          <div className="mt-12 md:mt-16 text-center md:text-left">
            <Link
              href="/menu"
              className="inline-flex items-center gap-3 font-accent text-xs tracking-[0.2em] uppercase text-sand-400/60 hover:text-sand-300 transition-colors group"
            >
              <span>View Full Menu</span>
              <span className="w-8 h-px bg-sand-400/30 group-hover:w-12 transition-all duration-300" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
