// OrderCallModal.jsx
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function OrderCallModal({ open, onClose }) {
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [sent, setSent] = useState(false);

  // Փակել Esc-ով + արգելել էջի scroll-ը modal-ի բաց ժամանակ
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  // Ամեն անգամ բացելիս մաքրել վիճակը
  useEffect(() => {
    if (open) {
      setPhone('');
      setError('');
      setSent(false);
    }
  }, [open]);

  if (!open) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const digits = phone.replace(/\D/g, '');
    // 374 + 8 թվանշան = 11
    if (digits.length < 11) {
      setError('Մուտքագրեք ճիշտ հեռախոսահամար');
      return;
    }
    setError('');
    // TODO: այստեղ ուղարկիր API-ին
    console.log('Order call:', digits);
    setSent(true);
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4"
      onMouseDown={onClose}
    >
      <div
        className="relative w-full max-w-[625px] bg-white rounded-xl shadow-2xl px-6 sm:px-12 pt-14 pb-10"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Փակել"
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition"
        >
          <X size={24} />
        </button>

        <h2 className="text-3xl font-bold text-gray-900">Հետզանգի պատվեր</h2>

        {sent ? (
          <>
            <p className="mt-6 text-lg text-gray-800 leading-8">
              Շնորհակալություն։ Մեր մասնագետները շուտով կկապվեն Ձեզ հետ։
            </p>
            <button
              onClick={onClose}
              className="mt-10 w-full bg-[#6200e0] hover:bg-purple-800 text-white font-medium py-4 rounded-md transition"
            >
              Փակել
            </button>
          </>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <p className="mt-6 text-lg text-gray-800 leading-8">
              Խնդրում ենք մուտքագրել Ձեր հեռախոսահամարը և մեր մասնագետները
              հնարավորինս արագ կապ կհաստատեն Ձեզ հետ։
            </p>

            <label
              htmlFor="phone"
              className="block mt-10 text-lg text-gray-800"
            >
              Հեռախոսահամար
            </label>
            <input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="374 XX XX XX"
              className={`mt-3 w-full border rounded-md px-4 py-3 text-lg outline-none transition focus:border-[#6200e0] ${
                error ? 'border-red-500' : 'border-gray-200'
              }`}
            />
            {error && <p className="mt-2 text-sm text-red-500">{error}</p>}

            <button
              type="submit"
              className="mt-12 w-full bg-[#6200e0] hover:bg-purple-800 text-white font-medium py-4 rounded-md transition"
            >
              Հաստատել
            </button>
          </form>
        )}
      </div>
    </div>
  );
}