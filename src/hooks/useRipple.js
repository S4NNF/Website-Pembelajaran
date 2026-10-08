import { useState } from 'react';

// Efek riak (ripple) saat elemen diklik.
export default function useRipple() {
  const [ripples, setRipples] = useState([]);

  const trigger = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const id = Date.now() + Math.random();
    setRipples((prev) => [
      ...prev,
      { id, x: e.clientX - rect.left, y: e.clientY - rect.top },
    ]);
  };

  const remove = (id) => setRipples((prev) => prev.filter((r) => r.id !== id));

  return { ripples, trigger, remove };
}
