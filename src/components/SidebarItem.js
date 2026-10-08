import { NavLink } from 'react-router-dom';
import useRipple from '../hooks/useRipple';

// Satu item menu di sidebar. Jika ada prop `to` -> link, jika tidak -> tombol.
export default function SidebarItem({
  to,
  icon,
  label,
  end = false,
  small = false,
  dot = false,
  trailing = null,
  onClick,
}) {
  const { ripples, trigger, remove } = useRipple();

  const content = (
    <>
      {icon && <i className={`bi ${icon} sb-icon`} />}
      <span className="sb-label">{label}</span>
      {dot && <span className="sb-dot" />}
      {trailing}
      {ripples.map((r) => (
        <span
          key={r.id}
          className="sb-ripple"
          style={{ left: r.x, top: r.y }}
          onAnimationEnd={() => remove(r.id)}
        />
      ))}
    </>
  );

  const handleClick = (e) => {
    trigger(e);
    onClick?.(e);
  };

  const cls = `sb-item ${small ? 'sb-item-sm' : ''}`;

  if (to) {
    return (
      <NavLink
        to={to}
        end={end}
        onClick={handleClick}
        className={({ isActive }) => `${cls} ${isActive ? 'active' : ''}`}
      >
        {content}
      </NavLink>
    );
  }

  return (
    <button type="button" onClick={handleClick} className={cls}>
      {content}
    </button>
  );
}
