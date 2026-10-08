import { useState } from 'react';
import { tugas as dataAwal } from '../page/dummy';

export default function Tugas() {
  const [daftar, setDaftar] = useState(dataAwal);

  const toggle = (id) =>
    setDaftar((d) => d.map((t) => (t.id === id ? { ...t, selesai: !t.selesai } : t)));

  return (
    <>
      <h4 className="page-title"><i className="bi bi-pencil-square" /> Tugas Online</h4>
      <div className="d-grid gap-3">
        {daftar.map((t) => (
          <div key={t.id} className="card-ui p-3 d-flex align-items-center gap-3 hover-lift">
            <input
              className="form-check-input mt-0"
              type="checkbox"
              checked={t.selesai}
              onChange={() => toggle(t.id)}
              aria-label={`Tandai selesai: ${t.judul}`}
            />
            <div className="flex-grow-1">
              <div className={`fw-semibold ${t.selesai ? 'text-decoration-line-through text-secondary' : ''}`}>
                {t.judul}
              </div>
              <small className="text-secondary">{t.matkul}</small>
            </div>
            <span className={`badge ${t.selesai ? 'text-bg-success' : 'text-bg-warning'}`}>
              {t.selesai ? 'Selesai' : `Tenggat ${t.tenggat}`}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}
