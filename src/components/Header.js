import { user } from '../page/dummy';

export default function Header({ onToggleSidebar }) {
  return (
    <header className="topbar">
      <div className="d-flex align-items-center gap-3">
        <button className="btn btn-light d-lg-none" onClick={onToggleSidebar} aria-label="Buka menu">
          <i className="bi bi-list fs-5" />
        </button>
        <h1 className="topbar-title">Enterprise Technology Hybrid Online Learning</h1>
      </div>

      <div className="d-flex align-items-center gap-3">
        <button className="btn btn-link position-relative p-0 text-dark" aria-label="Notifikasi">
          <i className="bi bi-bell fs-5" />
          <span className="badge rounded-pill bg-danger position-absolute top-0 start-100 translate-middle">
            55
          </span>
        </button>
        <div className="user-chip">
          <div className="avatar">{user.nama[0]}</div>
          <div className="d-none d-md-block lh-sm">
            <div className="fw-semibold">{user.nama}</div>
            <small className="text-secondary">{user.peran}</small>
          </div>
        </div>
      </div>
    </header>
  );
}
