import { jadwal } from '../page/dummy';

const HARI = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];

export default function Jadwal() {
  return (
    <>
      <h4 className="page-title">
        <i className="bi bi-calendar3" /> Jadwal Online
      </h4>
      <p className="text-muted small mb-3">
        Semester Ganjil 2026/2027 • {jadwal.length} jadwal
      </p>

      <div className="row g-3">
        {HARI.map((hari) => {
          const items = jadwal.filter((j) => j.hari === hari);
          return (
            <div className="col-12 col-md-6 col-xl-4" key={hari}>
              <div className="jadwal-card">
                <div className="jadwal-header">{hari}</div>

                {items.length === 0 ? (
                  <div className="jadwal-empty">Tidak Ada Jadwal</div>
                ) : (
                  items.map((j) => (
                    <div className="jadwal-item" key={j.id}>
                      <h6 className="jadwal-title">{j.matkul}</h6>
                      <div className="jadwal-row">
                        <i className="bi bi-people" /> {j.kelas}
                      </div>
                      <div className="jadwal-row">
                        <i className="bi bi-person" /> {j.dosen}
                      </div>
                      <div className="jadwal-row">
                        <i className="bi bi-clock" /> {j.jam}
                      </div>
                      <div className="jadwal-row">
                        <i className="bi bi-house-door" /> {j.ruang}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}