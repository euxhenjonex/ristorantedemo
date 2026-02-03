import Link from 'next/link';
import Image from 'next/image';
import { Instagram, MapPin, Clock, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="footer" className="bg-night-950 border-t border-sand-900/15">
      {/* Google Maps - Durres beachfront */}
      <div className="w-full h-56 md:h-72 relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.8!2d19.4497!3d41.3246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1350273086e93db%3A0x0!2sRruga+Currila%2C+Durr%C3%ABs!5e0!3m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%) sepia(10%)' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Port Side Beach Location"
          className="absolute inset-0"
        />
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-night-950 via-night-950/40 to-transparent" />
      </div>

      <div className="py-16 md:py-20">
        <div className="container mx-auto px-5">
          <div className="grid md:grid-cols-4 gap-12 text-center md:text-left">

            {/* Brand */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-2.5 justify-center md:justify-start mb-3">
                <Image
                  src="/logo-portside.png"
                  alt="Port Side Beach"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
                <h3
                  className="text-xl tracking-[0.12em] text-sand-100 font-light"
                  style={{ fontFamily: 'var(--font-cormorant)' }}
                >
                  PORT SIDE
                </h3>
              </div>
              <p className="text-sand-400/50 text-sm leading-relaxed max-w-[220px] mx-auto md:mx-0">
                Where time slows down. Boho taste, seaside soul on the Adriatic shore.
              </p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col items-center md:items-start gap-4">
              <h4 className="font-accent uppercase text-[0.65rem] tracking-[0.25em] text-sand-400/40 mb-1">
                Contact
              </h4>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Rruga+Currila+Durres+Albania"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sand-200/60 hover:text-sand-200 transition-colors"
              >
                <MapPin size={14} className="text-sand-400/50 flex-shrink-0" />
                <span className="text-sm">Rruga Currila, Durr&euml;s</span>
              </a>
              <div className="flex items-center gap-3 text-sand-200/60">
                <Clock size={14} className="text-sand-400/50 flex-shrink-0" />
                <span className="text-sm">Every day: 08:00 - 00:00</span>
              </div>
              <a href="tel:+35568801118" className="flex items-center gap-3 text-sand-200/60 hover:text-sand-200 transition-colors">
                <Phone size={14} className="text-sand-400/50 flex-shrink-0" />
                <span className="text-sm">+355 68 801 1118</span>
              </a>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col items-center md:items-start gap-3">
              <h4 className="font-accent uppercase text-[0.65rem] tracking-[0.25em] text-sand-400/40 mb-1">
                Navigate
              </h4>
              <Link href="/" className="text-sm text-sand-200/50 hover:text-sand-200 transition-colors">Home</Link>
              <Link href="/menu" className="text-sm text-sand-200/50 hover:text-sand-200 transition-colors">Menu</Link>
              <Link href="/rezervo" className="text-sm text-sand-200/50 hover:text-sand-200 transition-colors">Reserve</Link>
            </div>

            {/* Social */}
            <div className="flex flex-col items-center md:items-start gap-4">
              <h4 className="font-accent uppercase text-[0.65rem] tracking-[0.25em] text-sand-400/40 mb-1">
                Follow Us
              </h4>
              <a
                href="https://instagram.com/portside.beach"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sand-200/60 hover:text-sand-200 transition-colors group"
              >
                <span className="w-10 h-10 border border-sand-400/15 flex items-center justify-center hover:bg-sand-400/10 hover:border-sand-400/30 transition-all">
                  <Instagram size={16} />
                </span>
                <span className="text-sm">@portside.beach</span>
              </a>
            </div>
          </div>

          <div className="mt-14 pt-8 border-t border-sand-900/10 text-center text-xs text-sand-400/25 tracking-wider">
            &copy; {new Date().getFullYear()} Port Side Beach. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
