'use client';

import Image from 'next/image';
import Reveal from './Reveal';

const images = [
  { src: '/menu-item-1.png', alt: 'Port Side atmosphere', span: 'md:col-span-2 md:row-span-2' },
  { src: '/menu-item-2.png', alt: 'Seaside dining', span: '' },
  { src: '/menu-item-3.png', alt: 'Craft cocktails', span: '' },
  { src: '/menu-item-4.png', alt: 'Beach lounge vibes', span: 'md:col-span-2' },
];

export default function AtmosphereGallery() {
  return (
    <section className="py-20 md:py-28 bg-night-950 relative">
      <div className="container mx-auto px-5">
        {/* Section header */}
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-16 gap-4">
            <div>
              <p className="font-accent text-[0.65rem] tracking-[0.3em] uppercase text-sand-400/50 mb-3">
                The Atmosphere
              </p>
              <h2
                className="text-3xl md:text-5xl text-sand-50 font-light"
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                Feel the <span className="italic text-sand-300">moment</span>
              </h2>
            </div>
            <p className="text-sand-400/40 text-sm max-w-xs leading-relaxed">
              Sand between your toes, salt in the air, and the sound of waves as your evening soundtrack.
            </p>
          </div>
        </Reveal>

        {/* Asymmetric grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
          {images.map((img, i) => (
            <Reveal key={i} delay={i * 80} className={`${img.span} relative overflow-hidden group`}>
              <div className={`relative ${i === 0 ? 'aspect-square' : i === 3 ? 'aspect-[2/1]' : 'aspect-[3/4]'} w-full`}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover animate-ken-burns group-hover:scale-110 transition-transform duration-700"
                  sizes={i === 0 ? '(max-width: 768px) 50vw, 50vw' : i === 3 ? '(max-width: 768px) 100vw, 50vw' : '(max-width: 768px) 50vw, 25vw'}
                  loading="lazy"
                  style={{ animationDelay: `${i * -5}s` }}
                />
                {/* Dark overlay on hover */}
                <div className="absolute inset-0 bg-night-950/0 group-hover:bg-night-950/40 transition-colors duration-500 flex items-end justify-start p-4 md:p-6">
                  <span className="font-accent text-xs tracking-[0.15em] uppercase text-sand-50 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-3 group-hover:translate-y-0">
                    {img.alt}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
