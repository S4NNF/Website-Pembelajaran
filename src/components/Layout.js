import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <div className="app-shell">
      <Sidebar open={sidebarOpen} onNavigate={() => setSidebarOpen(false)} />
      {sidebarOpen && <div className="sidebar-backdrop" onClick={() => setSidebarOpen(false)} />}

      <div className="app-main">
        <Header onToggleSidebar={() => setSidebarOpen((o) => !o)} />
        {/* key = pathname -> animasi transisi diputar ulang tiap pindah halaman */}
        <main key={pathname} className="page page-enter">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
