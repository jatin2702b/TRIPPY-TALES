import { useState } from "react";

export default function WhatsAppInquiryForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    destination: "",
    dates: "",
    guests: "",
    notes: ""
  });

  // Use real international digits only (e.g., 919876543210)
  const WHATSAPP_NUMBER = "919876543210"; // <- update to your number

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message =
      `New Trippy Tales inquiry:\n` +
      `Name: ${form.name}\n` +
      `Contact: ${form.phone}\n` +
      `Destination: ${form.destination}\n` +
      `Dates: ${form.dates}\n` +
      `Guests: ${form.guests}\n` +
      `Notes: ${form.notes}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="relative">
      {/* Ambient blobs (lighter, smaller) */}
      <div className="pointer-events-none absolute -top-6 -left-6 h-24 w-24 rounded-full bg-emerald-400/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-8 -right-6 h-28 w-28 rounded-full bg-lime-400/20 blur-3xl" />

      {/* Compact card with capped size */}
      <div className="rounded-2xl border border-white/20 bg-white/70 backdrop-blur-xl shadow-xl ring-1 ring-emerald-500/10 max-w-md sm:max-w-lg">
        <div className="p-4 sm:p-5">
          <header className="mb-4">
            <h3 className="text-lg sm:text-xl font-semibold tracking-tight bg-[linear-gradient(90deg,#059669,#10B981,#84CC16)] bg-clip-text text-transparent">
              Quick trip enquiry
            </h3>
            <p className="mt-0.5 text-xs text-slate-600">
              Fill brief details and continue on WhatsApp. 
            </p>
          </header>

          {/* Limit component height; scroll inner content if necessary */}
          <div className="max-h-[70vh] overflow-auto pr-1">
            <form onSubmit={handleSubmit} className="space-y-3">
              {/* Smaller inputs */}
              <Field
                label="Full name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                compact
              />
              <Field
                label="Phone or Email"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+91 98xx-xx-xxxx or email"
                required
                compact
              />
              <Field
                label="Destination"
                name="destination"
                value={form.destination}
                onChange={handleChange}
                placeholder="Nainital, Munsyari, Valley of Flowers..."
                compact
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Field
                  label="Dates"
                  name="dates"
                  value={form.dates}
                  onChange={handleChange}
                  placeholder="e.g., 15–18 Oct"
                  compact
                />
                <Field
                  label="Guests"
                  name="guests"
                  value={form.guests}
                  onChange={handleChange}
                  placeholder="4 adults, 1 child"
                  compact
                />
              </div>

              <FieldArea
                label="Notes"
                name="notes"
                value={form.notes}
                onChange={handleChange}
                placeholder="Pickup city, trek preference, budget..."
                rows={3}
                compact
                className="max-h-28 overflow-y-auto"
              />

              {/* Tighter CTA */}
              <div className="pt-1">
                <button
                  type="submit"
                  className="
                    group relative inline-flex items-center justify-center
                    w-full sm:w-auto
                    rounded-full px-4 py-2.5
                    text-sm text-white font-medium
                    bg-[linear-gradient(90deg,#059669,#10B981,#22C55E,#84CC16)]
                    shadow-[0_8px_20px_-8px_rgba(34,197,94,0.65)]
                    transition-transform duration-200 hover:-translate-y-0.5
                    focus:outline-none focus:ring-4 focus:ring-emerald-300/40
                    overflow-hidden
                  "
                >
                  <span className="relative z-10">Send on WhatsApp</span>
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Reusable compact fields */
function Field({ label, compact, className = "", ...props }) {
  return (
    <div className="group">
      <label className="block text-[11px] font-medium text-slate-600 mb-1">{label}</label>
      <div className="rounded-xl p-[1px] bg-[linear-gradient(135deg,rgba(5,150,105,0.25),rgba(132,204,22,0.25))]">
        <input
          {...props}
          className={`
            w-full rounded-[12px]
            border border-white/60 bg-white/90
            px-3 ${compact ? "py-2 text-sm" : "py-2.5 text-base"}
            shadow-sm transition
            focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500
            placeholder:text-slate-400
            ${className}
          `}
        />
      </div>
    </div>
  );
}

function FieldArea({ label, compact, className = "", ...props }) {
  return (
    <div className="group">
      <label className="block text-[11px] font-medium text-slate-600 mb-1">{label}</label>
      <div className="rounded-xl p-[1px] bg-[linear-gradient(135deg,rgba(5,150,105,0.25),rgba(132,204,22,0.25))]">
        <textarea
          {...props}
          className={`
            w-full rounded-[12px]
            border border-white/60 bg-white/90
            px-3 ${compact ? "py-2 text-sm" : "py-2.5 text-base"}
            shadow-sm transition
            focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500
            placeholder:text-slate-400
            ${className}
          `}
        />
      </div>
    </div>
  );
}
