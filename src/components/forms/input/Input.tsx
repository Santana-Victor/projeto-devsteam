import styles from "./styles.module.css";

interface InputProps {
  fullWidth: boolean;
  type: string;
  placeHolder: string;
}

export default function Input({ fullWidth, type, placeHolder }: InputProps) {
  return (
    <input
      className={
        fullWidth ? `${styles.input} ${styles.full}` : `${styles.input}`
      }
      type={type}
      placeholder={placeHolder}
    />
  );
}
