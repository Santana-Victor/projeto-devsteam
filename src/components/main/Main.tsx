import styles from "./styles.module.css";

export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <main className={styles.main} role={"main"}>
      {children}
    </main>
  );
}
