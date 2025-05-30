"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "../styles/layout.module.css";

export const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <Link
        className={`${styles.link} ${pathname === "/" ? styles.active : ""}`}
        href="/"
      >
        Home
      </Link>
      <Link
        className={`${styles.link} ${
          pathname === "/verify" ? styles.active : ""
        }`}
        href="/verify"
      >
        Verify
      </Link>
      <Link
        className={`${styles.link} ${
          pathname === "/quotes" ? styles.active : ""
        }`}
        href="/quotes"
      >
        Quotes
      </Link>
      <Link
        className={`${styles.link} ${
          pathname === "/quiz" ? styles.active : ""
        }`}
        href="/quiz"
      >
        Quiz
      </Link>
      <Link
        className={`${styles.link} ${
          pathname === "/newquiz" ? styles.active : ""
        }`}
        href="/newquiz"
      >
        New Quiz
      </Link>
    </nav>
  );
};
