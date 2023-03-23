import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.main}>
      <Link href="/login">Login</Link>
      <Link href="/registration">Registration</Link>
    </div>
  );
}
