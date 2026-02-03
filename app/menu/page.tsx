'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { menuItems, categories, Category } from '../data/menu';
import Reveal from '../components/Reveal';

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('Small Plates');

  const filteredItems = menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-night-950 pt-28 pb-16">
      <div className="container mx-auto px-5">
        {/* Header */}
        <Reveal>
          <div className="text-center mb-4">
            <p className="font-accent text-[0.65rem] tracking-[0.3em] uppercase text-sand-400/40 mb-3">
              Port Side Beach
            </p>
            <h1
              className="text-4xl md:text-6xl text-sand-50 font-light mb-4"
              style={{ fontFamily: 'var(--font-cormorant)' }}
            >
              Our Menu
            </h1>
            <p className="text-sand-400/40 text-sm max-w-md mx-auto">
              Where every bite tells a story of flavor
            </p>
          </div>
        </Reveal>

        {/* Category Tabs */}
        <Reveal delay={100}>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 my-12 md:my-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 md:px-6 py-2 font-accent text-[0.6rem] md:text-xs uppercase tracking-[0.15em] transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-sand-400 text-night-950'
                    : 'bg-night-800 text-sand-200/50 hover:text-sand-200 hover:bg-night-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 max-w-5xl mx-auto">
          {filteredItems.map((item, i) => (
            <Reveal key={item.id} delay={i * 50}>
              <div className="flex gap-4 group">
                {/* Image if available */}
                {item.image && (
                  <div className="w-20 h-20 md:w-24 md:h-24 flex-shrink-0 relative overflow-hidden bg-night-800 border border-sand-900/10">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="96px"
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                )}

                <div className="flex-grow">
                  <div className="flex justify-between items-baseline border-b border-sand-900/10 pb-2 mb-2">
                    <h3
                      className="text-lg md:text-xl text-sand-100 group-hover:text-sand-50 transition-colors"
                      style={{ fontFamily: 'var(--font-cormorant)' }}
                    >
                      {item.name}
                    </h3>
                    <span className="text-sand-400 font-accent text-xs tracking-wider ml-4 flex-shrink-0">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-sand-400/40 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Note */}
        <div className="text-center mt-16 text-xs text-sand-400/20">
          * Please inform us of any allergies or dietary requirements.
        </div>

        {/* CTA */}
        <Reveal>
          <div className="text-center mt-16 pt-12 border-t border-sand-900/10">
            <p className="text-sand-400/40 text-sm mb-6">Enjoying the menu? Reserve your table now.</p>
            <Link
              href="/rezervo"
              className="inline-block bg-sand-400 text-night-950 px-10 py-4 uppercase font-accent tracking-[0.25em] text-xs hover:bg-sand-300 transition-all duration-300"
            >
              Reserve a Table
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
