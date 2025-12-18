import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Clock } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero.png"
                    alt="Bistro Tirana Interior"
                    fill
                    className="object-cover"
                    priority
                    quality={85}
                    sizes="100vw"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBQYSIRMxQWH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABkRAAIDAQAAAAAAAAAAAAAAAAECAAMRIf/aAAwDAQACEQMRAD8A2rX9wRaXtq3sbSFoxMqSM7BWPNsKDxI+Drz1UqVKouTW1bs//9k="
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center gap-6">
                <h2 className="text-gold-400 text-sm md:text-base uppercase tracking-[0.3em] font-medium animate-fade-in-up">
                    Ristorante në Tiranë
                </h2>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-tight animate-fade-in-up delay-100">
                    Shije <span className="italic text-gold-500">Moderne</span> <br />
                    Atmosferë <span className="italic text-gold-500">Unike</span>
                </h1>

                <p className="text-gray-200 text-base md:text-lg max-w-xl font-light leading-relaxed animate-fade-in-up delay-200">
                    Kuzhinë italiane bashkëkohore në zemër të Tiranës.
                </p>

                {/* Quick Info Bar */}
                <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-300 animate-fade-in-up delay-200">
                    <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-gold-500" />
                        <span>Rruga Myslym Shyri</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock size={16} className="text-gold-500" />
                        <span>12:00 - 23:00</span>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4 mt-6 animate-fade-in-up delay-300 w-full md:w-auto">
                    <Link
                        href="/rezervo"
                        className="group relative px-10 py-4 bg-gold-500 text-black uppercase tracking-widest font-bold text-sm overflow-hidden transition-all hover:bg-gold-400 w-full md:w-auto text-center shadow-[0_0_30px_rgba(204,153,38,0.4)] hover:shadow-[0_0_40px_rgba(204,153,38,0.6)] hover:scale-105"
                    >
                        <span className="relative z-10">Rezervo Tavolinë</span>
                    </Link>

                    <Link
                        href="/menu"
                        className="group relative px-10 py-4 bg-transparent border-2 border-white text-white uppercase tracking-widest font-bold text-sm overflow-hidden transition-all hover:bg-white hover:text-black w-full md:w-auto text-center"
                    >
                        <span className="relative z-10">Shiko Menunë</span>
                    </Link>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
                    <div className="w-1 h-2 bg-white/50 rounded-full" />
                </div>
            </div>
        </section>
    );
}
