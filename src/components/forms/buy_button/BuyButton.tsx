import styles from "./styles.module.css";

interface ButtonProps {
  children: string;
  fullWidth: boolean;
  onClick: () => void;
}

export default function BuyButton({
  children,
  fullWidth,
  onClick,
}: ButtonProps) {
  return (
    <button
      className={
        fullWidth ? `${styles.button} ${styles.full_width}` : `${styles.button}`
      }
      role={"button"}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
