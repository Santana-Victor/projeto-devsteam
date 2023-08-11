import styles from "./styles.module.css";

interface ButtonProps {
  children: string;
  fullWidth: boolean;
}

export default function Button({ children, fullWidth }: ButtonProps) {
  return (
    <button
      className={
        fullWidth ? `${styles.button} ${styles.full_width}` : `${styles.button}`
      }
      role={"button"}
    >
      {children}
    </button>
  );
}
