'use client';

import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
    const phoneNumber = '393420587770';
    const message = encodeURIComponent('Përshëndetje! Doja të rezervoja një tavolinë.');

    return (
        <a
            href={`https://wa.me/${phoneNumber}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110 group"
            aria-label="Kontakto në WhatsApp"
        >
            <MessageCircle size={28} className="md:w-8 md:h-8" fill="currentColor" />

            {/* Tooltip */}
            <span className="absolute right-full mr-3 bg-white text-gray-800 text-sm px-3 py-2 rounded-lg shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                Na shkruaj në WhatsApp
            </span>

            {/* Pulse animation */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
        </a>
    );
}
