import Link from 'next/link';
import { Facebook, Instagram, MapPin, Clock, Phone } from 'lucide-react';

export default function Footer() {
    return (
        <footer id="footer" className="bg-black border-t border-white/10">
            {/* Google Maps */}
            <div className="w-full h-64 md:h-80 relative">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.254879648188!2d19.818477776891367!3d41.32568199908887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1350310470fac5db%3A0x40092af10653720!2sRruga%20Myslym%20Shyri%2C%20Tirana%2C%20Albania!5e0!3m2!1sen!2s!4v1703000000000!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Bistro Tirana Location"
                    className="absolute inset-0"
                />
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black via-transparent to-transparent" />
            </div>

            <div className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-4 gap-10 text-center md:text-left">

                        {/* Brand */}
                        <div className="md:col-span-1">
                            <h3 className="text-2xl font-serif text-gold-500 mb-4">Bistro Tirana</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Kuzhinë italiane bashkëkohore në zemër të Tiranës.
                            </p>
                        </div>

                        {/* Contact Info */}
                        <div className="flex flex-col items-center md:items-start gap-4">
                            <h4 className="uppercase text-xs tracking-widest text-gray-500 mb-2">Kontakt</h4>
                            <a
                                href="https://www.google.com/maps/search/?api=1&query=Rruga+Myslym+Shyri+Tirana"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-gray-300 hover:text-gold-500 transition-colors"
                            >
                                <MapPin size={16} className="text-gold-500 flex-shrink-0" />
                                <span className="text-sm">Rruga Myslym Shyri 42, Tiranë</span>
                            </a>
                            <div className="flex items-center gap-3 text-gray-300">
                                <Clock size={16} className="text-gold-500 flex-shrink-0" />
                                <span className="text-sm">Çdo ditë: 12:00 - 23:00</span>
                            </div>
                            <a href="tel:+35569123456" className="flex items-center gap-3 text-gray-300 hover:text-gold-500 transition-colors">
                                <Phone size={16} className="text-gold-500 flex-shrink-0" />
                                <span className="text-sm">+355 69 123 4567</span>
                            </a>
                        </div>

                        {/* Quick Links */}
                        <div className="flex flex-col items-center md:items-start gap-4">
                            <h4 className="uppercase text-xs tracking-widest text-gray-500 mb-2">Menu</h4>
                            <Link href="/" className="text-sm text-gray-400 hover:text-gold-500 transition-colors">Home</Link>
                            <Link href="/menu" className="text-sm text-gray-400 hover:text-gold-500 transition-colors">Menuja</Link>
                            <Link href="/rezervo" className="text-sm text-gray-400 hover:text-gold-500 transition-colors">Rezervo</Link>
                        </div>

                        {/* Social */}
                        <div className="flex flex-col items-center md:items-start gap-4">
                            <h4 className="uppercase text-xs tracking-widest text-gray-500 mb-2">Na ndiqni</h4>
                            <div className="flex gap-3">
                                <a
                                    href="https://instagram.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold-500 hover:text-black hover:border-gold-500 transition-all"
                                    aria-label="Instagram"
                                >
                                    <Instagram size={18} />
                                </a>
                                <a
                                    href="https://facebook.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold-500 hover:text-black hover:border-gold-500 transition-all"
                                    aria-label="Facebook"
                                >
                                    <Facebook size={18} />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 pt-8 border-t border-white/5 text-center text-xs text-gray-600">
                        © {new Date().getFullYear()} Bistro Tirana. Të gjitha të drejtat e rezervuara.
                    </div>
                </div>
            </div>
        </footer>
    );
}
