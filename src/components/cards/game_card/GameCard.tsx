import styles from "./styles.module.css";

import Button from "../../forms/button/Button";

interface GamecardProps {
  title: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  category: string;
  fullPrice: number | string;
}

export default function GameCard({
  title,
  src,
  alt,
  width,
  height,
  category,
  fullPrice,
}: GamecardProps) {
  return (
    <div className={styles.game_card}>
      <img
        className={styles.image}
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={"lazy"}
      />
      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.category}>{category}</p>
        <div className={styles.price}>
          {typeof fullPrice === "number" ? (
            <div>R${fullPrice.toFixed(2).toString().replace(".", ",")}</div>
          ) : (
            <div>{fullPrice}</div>
          )}
          <Button fullWidth={false}>Adicionar ao carrinho</Button>
        </div>
      </div>
    </div>
  );
}
