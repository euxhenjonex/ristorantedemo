import Hero from './components/Hero';
import Image from 'next/image';
import Link from 'next/link';
import { Star, Utensils, Wine, Clock } from 'lucide-react';

export default function Home() {
  return (
    <>
      <Hero />

      {/* Quick Features - chiaro in 5 secondi */}
      <section className="py-12 bg-zinc-950 border-b border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto text-center">
            <div className="flex flex-col items-center gap-2">
              <Utensils size={24} className="text-gold-500" />
              <span className="text-xs md:text-sm text-gray-400">Kuzhinë Italiane</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Wine size={24} className="text-gold-500" />
              <span className="text-xs md:text-sm text-gray-400">Verëra të Zgjedhura</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Clock size={24} className="text-gold-500" />
              <span className="text-xs md:text-sm text-gray-400">Çdo Ditë 12-23</span>
            </div>
          </div>
        </div>
      </section>

      {/* Experience / Promo Section */}
      <section className="py-20 md:py-28 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 md:order-1">
              <h2 className="text-3xl md:text-5xl font-serif text-white">
                Pjata të kuruara me <span className="text-gold-500 italic">Pasion</span>
              </h2>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                Çdo pjatë në Bistro Tirana është një vepër arti. Ingredientë të freskët, receta tradicionale me një prekje moderne.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/menu"
                  className="text-gold-500 border border-gold-500 px-6 py-3 uppercase tracking-widest text-sm hover:bg-gold-500 hover:text-black transition-all text-center"
                >
                  Shiko Menunë
                </Link>
                <Link
                  href="/rezervo"
                  className="text-white border border-white/30 px-6 py-3 uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-all text-center"
                >
                  Rezervo Tani
                </Link>
              </div>
            </div>
            <div className="relative order-1 md:order-2">
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
                  <Image
                    src="/menu-item-1.png"
                    alt="Burrata & Prosciutto"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden translate-y-8">
                  <Image
                    src="/menu-item-3.png"
                    alt="Tagliata Viçi"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-20 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-serif text-white mb-3">
              Galeria <span className="text-gold-500 italic">Jonë</span>
            </h2>
            <p className="text-gray-500 text-sm">Pamje nga kuzhina dhe ambienti</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            <div className="relative aspect-square rounded-lg overflow-hidden group">
              <Image
                src="/menu-item-1.png"
                alt="Piatti Bistro Tirana"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 768px) 50vw, 25vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden group">
              <Image
                src="/menu-item-2.png"
                alt="Piatti Bistro Tirana"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 768px) 50vw, 25vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden group">
              <Image
                src="/menu-item-3.png"
                alt="Piatti Bistro Tirana"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 768px) 50vw, 25vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden group">
              <Image
                src="/menu-item-4.png"
                alt="Piatti Bistro Tirana"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 768px) 50vw, 25vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 md:py-24 bg-zinc-900 border-t border-white/5">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center gap-1 mb-6 text-gold-500">
            <Star size={20} fill="currentColor" />
            <Star size={20} fill="currentColor" />
            <Star size={20} fill="currentColor" />
            <Star size={20} fill="currentColor" />
            <Star size={20} fill="currentColor" />
          </div>
          <p className="text-gold-500 text-sm uppercase tracking-widest mb-4">4.9 në Google Reviews</p>
          <h3 className="text-xl md:text-3xl font-serif text-white mb-6 max-w-2xl mx-auto leading-relaxed">
            &ldquo;Ushqim i shkëlqyer dhe shërbim fantastik. Vendi ideal për një darkë romantike në Tiranë.&rdquo;
          </h3>
          <p className="text-gray-500 text-sm mb-10">— Arta M.</p>

          <a
            href="https://google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white border border-white/20 px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all text-sm"
          >
            <Star size={16} />
            <span>Lini një recensione</span>
          </a>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-black to-zinc-950">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
            Gati për një <span className="text-gold-500 italic">përvojë</span> të veçantë?
          </h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            Rezervoni tavolinën tuaj online në vetëm disa sekonda.
          </p>
          <Link
            href="/rezervo"
            className="inline-block bg-gold-500 text-black px-10 py-4 uppercase tracking-widest font-bold text-sm hover:bg-gold-400 transition-all shadow-[0_0_30px_rgba(204,153,38,0.3)]"
          >
            Rezervo Tavolinë
          </Link>
        </div>
      </section>
    </>
  );
}
