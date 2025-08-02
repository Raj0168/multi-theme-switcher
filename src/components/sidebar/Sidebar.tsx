import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      <div
        className={`${styles.overlay} ${isOpen ? styles.show : ""}`}
        onClick={onClose}
      />
      <aside className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
        <button className={styles.closeBtn} onClick={onClose}>
          &times;
        </button>
        <nav className={styles.nav}>
          <NavLink to="/" onClick={onClose}>
            Home
          </NavLink>
          <NavLink to="/contact" onClick={onClose}>
            Contact
          </NavLink>
          <NavLink to="/about" onClick={onClose}>
            About
          </NavLink>
        </nav>
      </aside>
    </>
  );
}
