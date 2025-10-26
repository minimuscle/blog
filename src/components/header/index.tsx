import { Link } from "@tanstack/react-router";
import styles from "./header.module.css";

export function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.heading}>The Bug Report</h1>
        <div className={styles.links}>
          <Link to="/">Home</Link>
          <Link to="/">About</Link>
          <Link to="/">Contact</Link>
        </div>
      </div>
    </div>
  );
}
