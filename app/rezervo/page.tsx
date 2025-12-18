'use client';

import { useState } from 'react';
import { Calendar, Clock, Phone, User, MessageCircle } from 'lucide-react';

export default function RezervoPage() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        date: '',
        time: '',
        guests: '2',
        notes: ''
    });

    const timeSlots = [
        '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
        '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00'
    ];

    const guestOptions = ['1', '2', '3', '4', '5', '6', '7', '8+'];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Format date nicely
        const dateObj = new Date(formData.date);
        const formattedDate = dateObj.toLocaleDateString('sq-AL', {
            weekday: 'long',
            day: 'numeric',
            month: 'long'
        });

        // Build WhatsApp message
        const message = `Përshëndetje! 👋

Doja të rezervoja një tavolinë:

📅 Data: ${formattedDate}
🕐 Ora: ${formData.time}
👥 Persona: ${formData.guests}
👤 Emri: ${formData.name}
📞 Tel: ${formData.phone}${formData.notes ? `
📝 Shënim: ${formData.notes}` : ''}

Faleminderit!`;

        // Open WhatsApp with pre-filled message
        const phoneNumber = '35569123456';
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    // Get tomorrow's date as minimum
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const minDate = tomorrow.toISOString().split('T')[0];

    // Max date (30 days from now)
    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 30);
    const maxDateStr = maxDate.toISOString().split('T')[0];

    return (
        <div className="min-h-screen bg-black pt-24 pb-12">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12 animate-fade-in-up">
                    <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">
                        Rezervo <span className="text-gold-500 italic">Tavolinë</span>
                    </h1>
                    <p className="text-gray-400 max-w-md mx-auto">
                        Siguroni vendin tuaj për një përvojë të paharrueshme kulinare.
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="max-w-xl mx-auto animate-fade-in-up delay-100">
                    <div className="bg-zinc-900/50 border border-white/10 rounded-2xl p-6 md:p-8 space-y-6">

                        {/* Name */}
                        <div>
                            <label className="block text-sm text-gray-400 mb-2 uppercase tracking-wider">
                                Emri i plotë
                            </label>
                            <div className="relative">
                                <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Emri juaj"
                                    className="w-full bg-black/50 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-gold-500 transition-colors"
                                />
                            </div>
                        </div>

                        {/* Phone */}
                        <div>
                            <label className="block text-sm text-gray-400 mb-2 uppercase tracking-wider">
                                Numri i telefonit
                            </label>
                            <div className="relative">
                                <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    placeholder="+355 69 123 4567"
                                    className="w-full bg-black/50 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-gold-500 transition-colors"
                                />
                            </div>
                        </div>

                        {/* Date & Time Row */}
                        <div className="grid grid-cols-2 gap-4">
                            {/* Date */}
                            <div>
                                <label className="block text-sm text-gray-400 mb-2 uppercase tracking-wider">
                                    Data
                                </label>
                                <div className="relative">
                                    <Calendar size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
                                    <input
                                        type="date"
                                        name="date"
                                        value={formData.date}
                                        onChange={handleChange}
                                        required
                                        min={minDate}
                                        max={maxDateStr}
                                        className="w-full bg-black/50 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-gold-500 transition-colors appearance-none cursor-pointer"
                                    />
                                </div>
                            </div>

                            {/* Time */}
                            <div>
                                <label className="block text-sm text-gray-400 mb-2 uppercase tracking-wider">
                                    Ora
                                </label>
                                <div className="relative">
                                    <Clock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
                                    <select
                                        name="time"
                                        value={formData.time}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-black/50 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-gold-500 transition-colors appearance-none cursor-pointer"
                                    >
                                        <option value="" disabled>Zgjidh</option>
                                        {timeSlots.map(slot => (
                                            <option key={slot} value={slot}>{slot}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Guests */}
                        <div>
                            <label className="block text-sm text-gray-400 mb-3 uppercase tracking-wider">
                                Numri i personave
                            </label>
                            <div className="flex flex-wrap gap-2">
                                {guestOptions.map(num => (
                                    <button
                                        key={num}
                                        type="button"
                                        onClick={() => setFormData(prev => ({ ...prev, guests: num }))}
                                        className={`w-12 h-12 rounded-xl border transition-all ${
                                            formData.guests === num
                                                ? 'bg-gold-500 border-gold-500 text-black font-bold'
                                                : 'bg-black/50 border-white/10 text-gray-400 hover:border-gold-500/50'
                                        }`}
                                    >
                                        {num}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Notes */}
                        <div>
                            <label className="block text-sm text-gray-400 mb-2 uppercase tracking-wider">
                                Shënime (opsionale)
                            </label>
                            <textarea
                                name="notes"
                                value={formData.notes}
                                onChange={handleChange}
                                placeholder="P.sh. ditëlindje, tavolinë pranë dritares, alergji..."
                                rows={3}
                                className="w-full bg-black/50 border border-white/10 rounded-xl py-4 px-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-gold-500 transition-colors resize-none"
                            />
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="w-full bg-[#25D366] text-white py-4 rounded-xl uppercase tracking-widest font-bold text-sm hover:bg-[#20bd5a] transition-all flex items-center justify-center gap-3"
                        >
                            <MessageCircle size={20} fill="currentColor" />
                            <span>Dërgo në WhatsApp</span>
                        </button>
                    </div>

                    {/* Info */}
                    <p className="text-center text-gray-500 text-xs mt-6">
                        Plotësoni formularin dhe do t&apos;ju hapet WhatsApp me mesazhin gati.
                    </p>
                </form>
            </div>
        </div>
    );
}
