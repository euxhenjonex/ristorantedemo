import Hero from './components/Hero';
import MenuHighlights from './components/MenuHighlights';
import AtmosphereGallery from './components/AtmosphereGallery';
import EventsSection from './components/EventsSection';
import Link from 'next/link';
import { UtensilsCrossed, Wine, Music } from 'lucide-react';
import Reveal from './components/Reveal';

export default function Home() {
  return (
    <>
      <Hero />

      {/* Brand Essence */}
      <section className="py-20 md:py-28 bg-night-950 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-night-900/50 to-transparent h-32 pointer-events-none" />
        <div className="container mx-auto px-5">
          <Reveal>
            <div className="max-w-3xl mx-auto text-center">
              <blockquote
                className="text-2xl md:text-4xl lg:text-5xl font-light text-sand-100/80 italic leading-snug mb-6"
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                &ldquo;Where time slows down&rdquo;
              </blockquote>
              <p className="text-sand-400/40 text-sm md:text-base leading-relaxed max-w-lg mx-auto">
                Nestled on the Adriatic shore, Port Side is a haven where Mediterranean flavors
                meet barefoot luxury. Every detail crafted for those who savor the slow life.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Quick Features */}
      <section className="py-12 md:py-16 bg-night-950 border-y border-sand-900/8">
        <div className="container mx-auto px-5">
          <Reveal>
            <div className="grid grid-cols-3 gap-4 md:gap-12 max-w-3xl mx-auto text-center">
              <div className="flex flex-col items-center gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 border border-sand-400/15 flex items-center justify-center">
                  <UtensilsCrossed size={18} className="text-sand-400/60" />
                </div>
                <div>
                  <span className="font-accent text-[0.6rem] md:text-xs tracking-[0.15em] uppercase text-sand-200/50 block">
                    Small Plates
                  </span>
                  <span className="text-sand-400/30 text-[0.55rem] md:text-xs mt-0.5 block">
                    Mediterranean tapas
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 border border-sand-400/15 flex items-center justify-center">
                  <Wine size={18} className="text-sand-400/60" />
                </div>
                <div>
                  <span className="font-accent text-[0.6rem] md:text-xs tracking-[0.15em] uppercase text-sand-200/50 block">
                    Craft Cocktails
                  </span>
                  <span className="text-sand-400/30 text-[0.55rem] md:text-xs mt-0.5 block">
                    Signature mixes
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 border border-sand-400/15 flex items-center justify-center">
                  <Music size={18} className="text-sand-400/60" />
                </div>
                <div>
                  <span className="font-accent text-[0.6rem] md:text-xs tracking-[0.15em] uppercase text-sand-200/50 block">
                    Live Music
                  </span>
                  <span className="text-sand-400/30 text-[0.55rem] md:text-xs mt-0.5 block">
                    Every weekend
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Menu Highlights */}
      <MenuHighlights />

      {/* Atmosphere Gallery */}
      <AtmosphereGallery />

      {/* Events Section */}
      <EventsSection />

      {/* Social Proof / Instagram */}
      <section className="py-20 md:py-24 bg-night-900 border-t border-sand-900/8">
        <div className="container mx-auto px-5 text-center">
          <Reveal>
            <div className="max-w-2xl mx-auto">
              <p className="font-accent text-[0.65rem] tracking-[0.3em] uppercase text-sand-400/40 mb-6">
                What people say
              </p>
              <blockquote
                className="text-xl md:text-3xl font-light text-sand-100/70 italic leading-relaxed mb-6"
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                &ldquo;The most beautiful beach spot in Durres. Incredible food, even better vibes.
                We keep coming back every summer.&rdquo;
              </blockquote>
              <p className="text-sand-400/30 text-sm mb-10">
                &mdash; via Google Reviews
              </p>

              <a
                href="https://instagram.com/portside.beach"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-sand-200/40 hover:text-sand-200 transition-colors group"
              >
                <span className="font-accent text-xs tracking-[0.15em] uppercase">Follow @portside.beach</span>
                <span className="w-6 h-px bg-sand-400/20 group-hover:w-10 transition-all duration-300" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Reservation CTA */}
      <section className="relative py-24 md:py-32 bg-night-950 overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-sand-400/[0.03] rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-5 relative">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <h2
                className="text-3xl md:text-5xl text-sand-50 font-light mb-4 leading-[1.15]"
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                Your table is <span className="italic text-sand-300">waiting</span>
              </h2>
              <p className="text-sand-400/40 text-sm md:text-base mb-10 max-w-md mx-auto">
                Reserve your spot and let the sea breeze do the rest.
                Open every day, 08:00 to midnight.
              </p>
              <Link
                href="/rezervo"
                className="inline-block bg-sand-400 text-night-950 px-12 py-4 uppercase font-accent tracking-[0.25em] text-xs hover:bg-sand-300 transition-all duration-300 animate-pulse-glow"
              >
                Reserve a Table
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
