import { useState } from 'react';

export default function WhatsAppForm() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    destination: '',
    dates: '',
    guests: '',
    notes: '',
  });

  const WHATSAPP_NUMBER = '919876543210'; // replace with real number

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const msg =
      `New enquiry:\n` +
      `Name: ${form.name}\n` +
      `Contact: ${form.phone}\n` +
      `Destination: ${form.destination}\n` +
      `Dates: ${form.dates}\n` +
      `Guests: ${form.guests}\n` +
      `Notes: ${form.notes}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  return (
    <form onSubmit={onSubmit} className="max-w-xl space-y-3 p-4 rounded-xl border bg-white shadow">
      <h3 className="text-lg font-semibold">Quick enquiry</h3>

      <Field label="Full name">
        <input
          name="name"
          value={form.name}
          onChange={onChange}
          placeholder="Your name"
          className="input"
          required
        />
      </Field>

      <Field label="Phone or Email">
        <input
          name="phone"
          value={form.phone}
          onChange={onChange}
          placeholder="+91 98xx-xx-xxxx or email"
          className="input"
          required
        />
      </Field>

      <Field label="Destination">
        <input
          name="destination"
          value={form.destination}
          onChange={onChange}
          placeholder="Nainital, Munsyari, Valley of Flowers..."
          className="input"
        />
      </Field>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Field label="Dates">
          <input
            name="dates"
            value={form.dates}
            onChange={onChange}
            placeholder="e.g., 15–18 Oct"
            className="input"
          />
        </Field>
        <Field label="Guests">
          <input
            name="guests"
            value={form.guests}
            onChange={onChange}
            placeholder="4 adults, 1 child"
            className="input"
          />
        </Field>
      </div>

      <Field label="Notes">
        <textarea
          name="notes"
          value={form.notes}
          onChange={onChange}
          placeholder="Pickup city, trek preference, budget..."
          rows={3}
          className="input"
        />
      </Field>

      <button
        type="submit"
        className="w-full sm:w-auto rounded-full px-4 py-2.5 text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700"
      >
        Send on WhatsApp
      </button>
    </form>
  );
}

/* Simple labeled field wrapper */
function Field({ label, children }) {
  return (
    <label className="block">
      <span className="block text-xs font-medium text-slate-600 mb-1">{label}</span>
      {children}
    </label>
  );
}

/* Tailwind utility class for inputs */
const inputBase =
  'w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 placeholder:text-slate-400';

// allow className "input" via global style injection
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `.input{${inputBase
    .split(' ')
    .map((c) => '')
    .join('')}}`;
}
