import { useEffect, useState } from 'react';
import WhatsAppForm from './WhatsAppForm';

export default function EnquiryPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const footer = document.getElementById('site-footer');
    if (!footer) return;
    const io = new IntersectionObserver(
      (entries) => setVisible(entries[0]?.isIntersecting ?? false),
      { root: null, threshold: 0.05 }
    );
    io.observe(footer);
    return () => io.disconnect();
  }, []);

  return (
    <aside
      aria-hidden={!visible}
      className={`fixed left-4 bottom-6 z-[70] w-[320px] max-w-[86vw]
        bg-white border border-slate-200 shadow-2xl rounded-2xl
        transition-all duration-300
        ${visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'}
        hidden md:block`}
    >
      <div className="px-4 pt-4 pb-2 border-b">
        <h3 className="text-lg font-semibold">Plan your trip</h3>
        <p className="text-sm text-slate-600">Reached the end? Send details on WhatsApp.</p>
      </div>
      <div className="p-4">
        <WhatsAppForm />
      </div>
    </aside>
  );
}
