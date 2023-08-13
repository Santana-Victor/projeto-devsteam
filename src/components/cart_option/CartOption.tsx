import styles from "./styles.module.css";

interface CartOptionProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  title: string;
  price: number;
  onRemove: () => void;
}

export default function CartOption({
  src,
  alt,
  width,
  height,
  title,
  price,
  onRemove,
}: CartOptionProps) {
  return (
    <div className={styles.container}>
      <img
        className={styles.image}
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={"lazy"}
      />
      <div className={styles.info}>
        <h4 className={styles.title}>{title}</h4>
        <span className={styles.price}>
          R${price.toFixed(2).toString().replace(".", ",")}
        </span>
        <button className={styles.remove} role={"banner"} onClick={onRemove}>
          remover
        </button>
      </div>
    </div>
  );
}
