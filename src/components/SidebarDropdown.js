import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import SidebarItem from './SidebarItem';

// Menu dengan submenu (contoh: Ujian Online). Buka/tutup dianimasikan.
export default function SidebarDropdown({ icon, label, basePath, children, onNavigate }) {
  const { pathname } = useLocation();
  const isInside = pathname.startsWith(basePath);
  const [open, setOpen] = useState(isInside);

  return (
    <div>
      <SidebarItem
        icon={icon}
        label={label}
        onClick={() => setOpen((o) => !o)}
        trailing={
          <i className={`bi bi-chevron-down sb-chevron ms-auto ${open ? 'open' : ''}`} />
        }
      />
      <div className={`sb-collapse ${open ? 'show' : ''}`}>
        <div className="sb-collapse-inner">
          {children.map((c) => (
            <SidebarItem key={c.to} small to={c.to} label={c.label} onClick={onNavigate} />
          ))}
        </div>
      </div>
    </div>
  );
}
