import { user, matakuliah, tugas } from '../page/dummy';

export default function Beranda() {
  const tugasBelum = tugas.filter((t) => !t.selesai).length;
  const rata = Math.round(matakuliah.reduce((a, m) => a + m.hadir, 0) / matakuliah.length);

  return (
    <>
      <section className="hero">
        <small>Selamat datang,</small>
        <h2>{user.nama}!</h2>
        <p className="mb-3">{user.peran}</p>
        <div className="fw-semibold">
          <i className="bi bi-calendar3 me-2" />
          Rabu, 30 September 2026
        </div>
      </section>

      <h5 className="section-title"><i className="bi bi-bar-chart" /> Ringkasan Semester</h5>
      <div className="row g-3 mb-4">
        <div className="col-lg-9">
          <div className="card-ui h-100 p-4">
            <div className="row g-4">
              <Stat icon="bi-book" tone="blue" value={matakuliah.length} label="Matakuliah" sub="semester ini" />
              <Stat icon="bi-bar-chart" tone="green" value={`${rata}%`} label="Rata-rata Kehadiran" sub="semua matakuliah" />
              <Stat icon="bi-clipboard" tone="orange" value={tugasBelum} label="Tugas Belum Dikumpulkan" />
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="semester-card h-100">
            <small>Semester aktif</small>
            <h4>Ganjil 2026/2027</h4>
            <hr />
            <small>Sesi presensi ETHOL dibuka semester ini</small>
          </div>
        </div>
      </div>

      <div className="row g-3">
        <div className="col-lg-8">
          <div className="schedule-card">
            <div className="d-flex justify-content-between align-items-center px-4 py-3 border-bottom border-light border-opacity-25">
              <strong><i className="bi bi-calendar3 me-2" />Jadwal Hari Ini</strong>
              <small className="opacity-75">Rabu, 30 September 2026</small>
            </div>
            <p className="text-center py-5 mb-0 opacity-75">Tidak ada jadwal hari ini</p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card-ui p-4 h-100">
            <h6 className="fw-bold mb-3"><i className="bi bi-bar-chart me-2" />Kehadiran Saya</h6>
            {matakuliah.map((m) => (
              <div key={m.id} className="mb-3">
                <div className="d-flex justify-content-between small mb-1">
                  <span>{m.nama}</span><span className="fw-semibold">{m.hadir}%</span>
                </div>
                <div className="progress" style={{ height: 8 }}>
                  <div className="progress-bar" style={{ width: `${m.hadir}%`, background: '#123c6e' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function Stat({ icon, tone, value, label, sub }) {
  return (
    <div className="col-md-4 d-flex gap-3">
      <div className={`stat-icon ${tone}`}><i className={`bi ${icon}`} /></div>
      <div>
        <div className="stat-value">{value}</div>
        <div className="fw-semibold">{label}</div>
        {sub && <small className="text-secondary">{sub}</small>}
      </div>
    </div>
  );
}
