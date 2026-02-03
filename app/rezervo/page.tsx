'use client';

import { useState } from 'react';
import { Calendar, Clock, Phone, User, MessageCircle, ChevronDown } from 'lucide-react';

const daysAlbanian = ['E diel', 'E hënë', 'E martë', 'E mërkurë', 'E enjte', 'E premte', 'E shtunë'];
const monthsAlbanian = ['Janar', 'Shkurt', 'Mars', 'Prill', 'Maj', 'Qershor', 'Korrik', 'Gusht', 'Shtator', 'Tetor', 'Nëntor', 'Dhjetor'];

function generateDateOptions() {
  const options = [];
  const today = new Date();

  for (let i = 1; i <= 30; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);

    const dayName = daysAlbanian[date.getDay()];
    const day = date.getDate();
    const month = monthsAlbanian[date.getMonth()];

    const value = date.toISOString().split('T')[0];
    const label = `${dayName}, ${day} ${month}`;

    options.push({ value, label });
  }

  return options;
}

export default function RezervoPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    notes: ''
  });

  const dateOptions = generateDateOptions();

  const timeSlots = [
    '08:00', '08:30', '09:00', '09:30', '10:00', '10:30',
    '11:00', '11:30', '12:00', '12:30', '13:00', '13:30',
    '14:00', '14:30', '15:00', '15:30', '16:00', '16:30',
    '17:00', '17:30', '18:00', '18:30', '19:00', '19:30',
    '20:00', '20:30', '21:00', '21:30', '22:00', '22:30', '23:00', '23:30'
  ];

  const guestOptions = ['1', '2', '3', '4', '5', '6', '7', '8+'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const dateObj = new Date(formData.date);
    const dayName = daysAlbanian[dateObj.getDay()];
    const day = dateObj.getDate();
    const month = monthsAlbanian[dateObj.getMonth()];
    const formattedDate = `${dayName}, ${day} ${month}`;

    const message = `Hi! I'd like to reserve a table at Port Side Beach.

- Date: ${formattedDate}
- Time: ${formData.time}
- Guests: ${formData.guests}
- Name: ${formData.name}
- Phone: ${formData.phone}${formData.notes ? `
- Note: ${formData.notes}` : ''}

Thank you!`;

    const phoneNumber = '35568801118';
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-night-950 pt-28 pb-16">
      <div className="container mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-accent text-[0.65rem] tracking-[0.3em] uppercase text-sand-400/40 mb-3">
            Port Side Beach
          </p>
          <h1
            className="text-4xl md:text-5xl text-sand-50 font-light mb-4"
            style={{ fontFamily: 'var(--font-cormorant)' }}
          >
            Reserve a <span className="italic text-sand-300">Table</span>
          </h1>
          <p className="text-sand-400/40 text-sm max-w-md mx-auto">
            Secure your spot for an unforgettable experience by the sea.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
          <div className="bg-night-800/50 border border-sand-900/10 p-6 md:p-8 space-y-6">

            {/* Name */}
            <div>
              <label className="block font-accent text-[0.6rem] text-sand-400/50 mb-2 uppercase tracking-[0.15em]">
                Full Name
              </label>
              <div className="relative">
                <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-sand-400/25" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full bg-night-900/50 border border-sand-900/10 py-4 pl-12 pr-4 text-sand-100 placeholder:text-sand-400/20 focus:outline-none focus:border-sand-400/30 transition-colors text-sm"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block font-accent text-[0.6rem] text-sand-400/50 mb-2 uppercase tracking-[0.15em]">
                Phone Number
              </label>
              <div className="relative">
                <Phone size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-sand-400/25" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+355 68 xxx xxxx"
                  className="w-full bg-night-900/50 border border-sand-900/10 py-4 pl-12 pr-4 text-sand-100 placeholder:text-sand-400/20 focus:outline-none focus:border-sand-400/30 transition-colors text-sm"
                />
              </div>
            </div>

            {/* Date & Time Row */}
            <div className="grid grid-cols-2 gap-4">
              {/* Date Dropdown */}
              <div>
                <label className="block font-accent text-[0.6rem] text-sand-400/50 mb-2 uppercase tracking-[0.15em]">
                  Date
                </label>
                <div className="relative">
                  <Calendar size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-sand-400/25 pointer-events-none" />
                  <select
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full bg-night-900/50 border border-sand-900/10 py-4 pl-12 pr-10 text-sand-100 focus:outline-none focus:border-sand-400/30 transition-colors appearance-none cursor-pointer text-sm"
                  >
                    <option value="" disabled>Select date</option>
                    {dateOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-sand-400/25 pointer-events-none" />
                </div>
              </div>

              {/* Time */}
              <div>
                <label className="block font-accent text-[0.6rem] text-sand-400/50 mb-2 uppercase tracking-[0.15em]">
                  Time
                </label>
                <div className="relative">
                  <Clock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-sand-400/25 pointer-events-none" />
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full bg-night-900/50 border border-sand-900/10 py-4 pl-12 pr-10 text-sand-100 focus:outline-none focus:border-sand-400/30 transition-colors appearance-none cursor-pointer text-sm"
                  >
                    <option value="" disabled>Select time</option>
                    {timeSlots.map(slot => (
                      <option key={slot} value={slot}>{slot}</option>
                    ))}
                  </select>
                  <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-sand-400/25 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Guests */}
            <div>
              <label className="block font-accent text-[0.6rem] text-sand-400/50 mb-3 uppercase tracking-[0.15em]">
                Number of Guests
              </label>
              <div className="flex flex-wrap gap-2">
                {guestOptions.map(num => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, guests: num }))}
                    className={`w-12 h-12 border transition-all duration-300 text-sm ${
                      formData.guests === num
                        ? 'bg-sand-400 border-sand-400 text-night-950 font-medium'
                        : 'bg-night-900/50 border-sand-900/10 text-sand-200/50 hover:border-sand-400/20'
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block font-accent text-[0.6rem] text-sand-400/50 mb-2 uppercase tracking-[0.15em]">
                Notes (optional)
              </label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                placeholder="e.g. birthday, seaside table, allergies..."
                rows={3}
                className="w-full bg-night-900/50 border border-sand-900/10 py-4 px-4 text-sand-100 placeholder:text-sand-400/20 focus:outline-none focus:border-sand-400/30 transition-colors resize-none text-sm"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-[#25D366] text-white py-4 uppercase font-accent tracking-[0.2em] text-xs hover:bg-[#20bd5a] transition-all duration-300 flex items-center justify-center gap-3"
            >
              <MessageCircle size={18} fill="currentColor" />
              <span>Send via WhatsApp</span>
            </button>
          </div>

          {/* Info */}
          <p className="text-center text-sand-400/20 text-xs mt-6 tracking-wider">
            Fill in the form and WhatsApp will open with a pre-filled message.
          </p>
        </form>
      </div>
    </div>
  );
}
