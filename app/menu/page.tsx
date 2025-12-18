'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { menuItems, Category } from '../data/menu';

const categories: Category[] = ['Antipasti', 'Primi', 'Secondi', 'Dessert'];

export default function MenuPage() {
    const [activeCategory, setActiveCategory] = useState<Category>('Antipasti');

    const filteredItems = menuItems.filter(item => item.category === activeCategory);

    return (
        <div className="min-h-screen bg-black pt-24 pb-12">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl md:text-6xl font-serif text-center text-white mb-4 animate-fade-in-up">
                    Menuja Jonë
                </h1>
                <p className="text-center text-gray-400 mb-12 animate-fade-in-up delay-100 max-w-xl mx-auto">
                    Një udhëtim ndër shije të rafinuara.
                </p>

                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-16 animate-fade-in-up delay-200">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-6 py-2 rounded-full text-sm uppercase tracking-widest transition-all ${activeCategory === cat
                                    ? 'bg-gold-500 text-black font-bold'
                                    : 'bg-zinc-900 text-gray-400 hover:bg-zinc-800'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Menu Grid */}
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-16 max-w-5xl mx-auto">
                    {filteredItems.map((item) => (
                        <div key={item.id} className="flex gap-4 group animate-fade-in">
                            {/* Image if available */}
                            {item.image && (
                                <div className="w-20 h-20 md:w-24 md:h-24 flex-shrink-0 relative overflow-hidden rounded-lg bg-zinc-900 border border-white/10">
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
                                <div className="flex justify-between items-baseline border-b border-white/10 pb-2 mb-2">
                                    <h3 className="text-xl font-serif text-gold-100 group-hover:text-gold-400 transition-colors">
                                        {item.name}
                                    </h3>
                                    <span className="text-gold-500 font-bold ml-4">
                                        {item.price}
                                    </span>
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Note */}
                <div className="text-center mt-16 text-xs text-gray-600">
                    * Ju lutemi na njoftoni për alergji ose intoleranca ushqimore.
                </div>

                {/* CTA */}
                <div className="text-center mt-16 pt-12 border-t border-white/10">
                    <p className="text-gray-400 mb-6">Të pëlqeu menuja? Rezervo tavolinën tani.</p>
                    <Link
                        href="/rezervo"
                        className="inline-block bg-gold-500 text-black px-8 py-4 uppercase tracking-widest font-bold text-sm hover:bg-gold-400 transition-all"
                    >
                        Rezervo Tavolinë
                    </Link>
                </div>
            </div>
        </div>
    );
}
