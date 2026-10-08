import { useState } from 'react';

export default function Aksesibilitas() {
  const [besar, setBesar] = useState(false);
  const [kurangiGerak, setKurangiGerak] = useState(false);

  const ubahTeks = (v) => {
    setBesar(v);
    document.documentElement.style.fontSize = v ? '18px' : '';
  };
  const ubahGerak = (v) => {
    setKurangiGerak(v);
    document.body.classList.toggle('reduce-motion', v);
  };

  return (
    <>
      <h4 className="page-title"><i className="bi bi-universal-access" /> Aksesibilitas</h4>
      <div className="card-ui p-4" style={{ maxWidth: 520 }}>
        <div className="form-check form-switch mb-3">
          <input className="form-check-input" type="checkbox" id="teks" checked={besar} onChange={(e) => ubahTeks(e.target.checked)} />
          <label className="form-check-label" htmlFor="teks">Perbesar ukuran teks</label>
        </div>
        <div className="form-check form-switch">
          <input className="form-check-input" type="checkbox" id="gerak" checked={kurangiGerak} onChange={(e) => ubahGerak(e.target.checked)} />
          <label className="form-check-label" htmlFor="gerak">Kurangi animasi</label>
        </div>
      </div>
    </>
  );
}
