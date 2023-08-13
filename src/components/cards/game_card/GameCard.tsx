import styles from "./styles.module.css";

import BuyButton from "../../forms/buy_button/BuyButton";

import { useCartStore } from "../../../store/use_cart_store/useCartStore";
interface GamecardProps {
  id: number;
  title: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  category: string;
  fullPrice: number;
}

export default function GameCard({
  id,
  title,
  src,
  alt,
  width,
  height,
  category,
  fullPrice,
}: GamecardProps) {
  const {
    actions: { addGame },
  } = useCartStore();

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
          <div>R${fullPrice.toFixed(2).toString().replace(".", ",")}</div>
          <BuyButton
            fullWidth={false}
            onClick={() =>
              addGame({
                id: id,
                src: src,
                alt: alt,
                width: width,
                height: height,
                title: title,
                price: fullPrice,
              })
            }
          >
            Adicionar ao carrinho
          </BuyButton>
        </div>
      </div>
    </div>
  );
}
