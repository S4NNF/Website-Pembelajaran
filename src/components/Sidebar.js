import SidebarItem from './SidebarItem';
import SidebarDropdown from './SidebarDropdown';

export default function Sidebar({ open, onNavigate }) {
  return (
    <aside className={`sidebar ${open ? 'open' : ''}`}>
      <div className="sidebar-brand">
        <div className="brand-mark">
          <i className="bi bi-mortarboard-fill" />
        </div>
        <span className="brand-name">ethol</span>
      </div>

      <nav className="sidebar-nav">
        <p className="sb-section">Utama</p>
        <SidebarItem to="/" end icon="bi-house" label="Beranda" onClick={onNavigate} />

        <hr className="sb-divider" />
        <p className="sb-section">Kuliah</p>
        <SidebarItem
          to="/matakuliah"
          icon="bi-book"
          label="Matakuliah"
          onClick={onNavigate}
          trailing={<i className="bi bi-chevron-right ms-auto sb-chevron-static" />}
        />
        <SidebarItem to="/jadwal" icon="bi-calendar3" label="Jadwal Online" onClick={onNavigate} />
        <SidebarItem to="/tugas" icon="bi-pencil-square" label="Tugas Online" onClick={onNavigate} />
        <SidebarDropdown
          icon="bi-mortarboard"
          label="Ujian Online"
          basePath="/ujian"
          onNavigate={onNavigate}
        >
          {[
            { to: '/ujian/kuis', label: 'Kuis' },
            { to: '/ujian/uts', label: 'UTS' },
            { to: '/ujian/uas', label: 'UAS' },
          ]}
        </SidebarDropdown>

        <hr className="sb-divider" />
        <p className="sb-section">Aksesibilitas</p>
        <SidebarItem
          to="/aksesibilitas"
          icon="bi-universal-access"
          label="Aksesibilitas"
          dot
          onClick={onNavigate}
        />

        <hr className="sb-divider" />
        <p className="sb-section">Lainnya</p>
        <SidebarItem
          icon="bi-box-arrow-left"
          label="Keluar"
          onClick={() => alert('Contoh: logika logout ditaruh di sini')}
        />
      </nav>
    </aside>
  );
}
