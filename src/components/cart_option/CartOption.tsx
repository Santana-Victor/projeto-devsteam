import styles from "./styles.module.css";

import { useCartStore } from "../../store/use_cart_store/useCartStore";

interface CartOptionProps {
  id: number;
  src: string;
  alt: string;
  width: number;
  height: number;
  title: string;
  price: number;
}

export default function CartOption({
  id,
  src,
  alt,
  width,
  height,
  title,
  price,
}: CartOptionProps) {
  const {
    actions: { removeGame },
  } = useCartStore();

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
        <button
          className={styles.remove}
          role={"banner"}
          onClick={() => removeGame(id)}
        >
          remover
        </button>
      </div>
    </div>
  );
}
