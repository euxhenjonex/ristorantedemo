'use client';

import { events } from '../data/events';
import { Music, Calendar } from 'lucide-react';
import Reveal from './Reveal';

export default function EventsSection() {
  const featured = events.find(e => e.featured);
  const upcoming = events.filter(e => !e.featured);

  return (
    <section id="events" className="py-20 md:py-28 bg-night-800 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-sand-400/[0.02] blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-5 relative">
        {/* Section header */}
        <Reveal>
          <div className="mb-14 md:mb-20">
            <p className="font-accent text-[0.65rem] tracking-[0.3em] uppercase text-sand-400/50 mb-3">
              Nights at Port Side
            </p>
            <h2
              className="text-3xl md:text-5xl lg:text-6xl text-sand-50 font-light leading-[1.1]"
              style={{ fontFamily: 'var(--font-cormorant)' }}
            >
              Our type of<br />
              <span className="italic text-sand-300">clubbing</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-5 gap-6 md:gap-8">
          {/* Featured event - large card */}
          {featured && (
            <Reveal className="md:col-span-3">
              <div className="relative bg-night-700/50 border border-sand-900/15 p-6 md:p-10 h-full flex flex-col justify-between group hover:border-sand-400/15 transition-colors duration-500">
                {/* Genre tag */}
                <div className="flex items-center gap-2 mb-6">
                  <Music size={14} className="text-sand-400" />
                  <span className="font-accent text-[0.65rem] tracking-[0.2em] uppercase text-sand-400">
                    {featured.genre}
                  </span>
                </div>

                <div>
                  <h3
                    className="text-2xl md:text-4xl text-sand-50 font-light mb-3"
                    style={{ fontFamily: 'var(--font-cormorant)' }}
                  >
                    {featured.title}
                  </h3>
                  <p className="text-sand-200/40 text-sm md:text-base leading-relaxed mb-6 max-w-lg">
                    {featured.description}
                  </p>

                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-2 text-sand-300/60">
                      <Calendar size={14} />
                      <span>{featured.date}</span>
                    </div>
                    <span className="text-sand-400/20">|</span>
                    <span className="text-sand-300/60">{featured.time}</span>
                    {featured.artist && (
                      <>
                        <span className="text-sand-400/20">|</span>
                        <span className="text-sand-300/60">{featured.artist}</span>
                      </>
                    )}
                  </div>
                </div>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-16 h-16">
                  <div className="absolute top-3 right-3 w-8 h-px bg-sand-400/20" />
                  <div className="absolute top-3 right-3 w-px h-8 bg-sand-400/20" />
                </div>
              </div>
            </Reveal>
          )}

          {/* Upcoming events list */}
          <div className="md:col-span-2 flex flex-col gap-4">
            {upcoming.map((event, i) => (
              <Reveal key={event.id} delay={i * 100}>
                <div className="bg-night-700/30 border border-sand-900/10 p-5 md:p-6 hover:border-sand-400/10 transition-colors duration-500 group">
                  {/* Genre badge */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-accent text-[0.6rem] tracking-[0.15em] uppercase text-sand-400/50 bg-sand-400/5 px-2.5 py-1">
                      {event.genre}
                    </span>
                    <span className="text-sand-400/30 text-xs">{event.time}</span>
                  </div>

                  <h4
                    className="text-lg text-sand-100 mb-1.5 group-hover:text-sand-50 transition-colors"
                    style={{ fontFamily: 'var(--font-cormorant)' }}
                  >
                    {event.title}
                  </h4>

                  <div className="flex items-center gap-2 text-xs text-sand-400/40">
                    <Calendar size={12} />
                    <span>{event.date}</span>
                    {event.artist && (
                      <>
                        <span className="text-sand-400/20 mx-1">&middot;</span>
                        <span>{event.artist}</span>
                      </>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
