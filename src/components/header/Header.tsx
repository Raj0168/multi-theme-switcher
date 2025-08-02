import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setTheme, setFontScale } from "../../redux/slices/themeSlice";
import type { ThemeName, FontScale } from "../../types";
import type { RootState } from "../../redux/store";
import Sidebar from "../sidebar/Sidebar";
import styles from "./Header.module.css";

const paths: string[] = ["/", "/contact", "/about"];

export default function Header() {
  const dispatch = useDispatch();
  const { currentTheme, fontScale } = useSelector((s: RootState) => s.theme);
  const isDarkSidebar = currentTheme === "theme2";
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <NavLink to="/" className={styles.logo}>
          Theme App
        </NavLink>

        {!isDarkSidebar ? (
          <nav className={styles.nav}>
            {paths.map((path, i) => {
              const label =
                path === "/"
                  ? "Home"
                  : path.slice(1).replace(/^\w/, (c) => c.toUpperCase());
              return (
                <NavLink
                  key={i}
                  to={path}
                  className={({ isActive }) =>
                    `${styles.navLink} ${isActive ? styles.activeLink : ""}`
                  }
                  end={path === "/"}
                >
                  {label}
                </NavLink>
              );
            })}
          </nav>
        ) : null}

        <div className={styles.controls}>
          <select
            className={styles.dropdown}
            value={currentTheme}
            onChange={(e) => dispatch(setTheme(e.target.value as ThemeName))}
          >
            <option value="theme1">Minimal</option>
            <option value="theme2">Dark</option>
            <option value="theme3">Colorful</option>
          </select>

          <div className={styles.fontControls}>
            {(["small", "medium", "large"] as FontScale[]).map((size) => (
              <button
                key={size}
                onClick={() => dispatch(setFontScale(size))}
                className={`${styles.fontButton} ${
                  fontScale === size ? styles.active : ""
                }`}
              >
                {size === "small" ? "A-" : size === "medium" ? "A" : "A+"}
              </button>
            ))}
          </div>
          {isDarkSidebar && (
            <button
              className={styles.menuBtn}
              onClick={() => setSidebarOpen(true)}
              aria-label="Toggle sidebar"
            >
              ☰
            </button>
          )}
        </div>
      </header>

      {isDarkSidebar && (
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      )}
    </>
  );
}
