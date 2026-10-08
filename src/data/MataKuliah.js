import { matakuliah } from '../page/dummy';

export default function Matakuliah() {
  return (
    <>
      <h4 className="page-title"><i className="bi bi-book" /> Matakuliah</h4>
      <div className="row g-3">
        {matakuliah.map((m) => (
          <div className="col-md-6 col-xl-4" key={m.id}>
            <div className="card-ui p-4 h-100 hover-lift">
              <span className="badge text-bg-primary mb-2">{m.sks} SKS</span>
              <h6 className="fw-bold">{m.nama}</h6>
              <p className="text-secondary small mb-3">{m.dosen}</p>
              <small className="text-secondary">Kehadiran {m.hadir}%</small>
              <div className="progress mt-1" style={{ height: 6 }}>
                <div className="progress-bar" style={{ width: `${m.hadir}%`, background: '#123c6e' }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
