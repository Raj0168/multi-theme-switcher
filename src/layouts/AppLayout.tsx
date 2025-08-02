import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import type { RootState } from "../redux/store";
import "./../styles/App.css";
import styles from "./AppLayout.module.css";

interface Props {
  children: React.ReactNode;
}

export default function AppLayout({ children }: Props) {
  const { currentTheme, fontScale } = useSelector((s: RootState) => s.theme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", currentTheme);
  }, [currentTheme]);

  return (
    <div
      className={styles.layout}
      style={{
        fontSize: `var(--fs-${fontScale})`,
        fontFamily: "var(--font)",
      }}
    >
      <Header />
      <main className={styles.content}>{children}</main>
      <Footer />
    </div>
  );
}
