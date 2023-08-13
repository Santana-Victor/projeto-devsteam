import styles from "./styles.module.css";

import PriceCard from "../price_card/PriceCard";
import Button from "../../forms/buy_button/BuyButton";

import { useCartStore } from "../../../store/use_cart_store/useCartStore";

interface SaleCardProps {
  id: number;
  title: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  discount: number;
  fullPrice: number;
}

export default function SaleCard({
  id,
  title,
  src,
  alt,
  width,
  height,
  discount,
  fullPrice,
}: SaleCardProps) {
  const {
    actions: { addGame },
  } = useCartStore();

  return (
    <div className={styles.sale_card}>
      <img
        className={styles.image}
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={"lazy"}
      />
      <div className={styles.info}>
        <h3 className={styles.title}>Oferta exclusiva</h3>
        <PriceCard discount={discount} fullPrice={fullPrice} />
        <Button
          fullWidth={true}
          onClick={() =>
            addGame({
              id: id,
              title: title,
              src: src,
              alt: alt,
              width: width,
              height: height,
              price: Number(
                `${(fullPrice - (fullPrice * discount) / 100).toFixed(1)}0`
              ),
            })
          }
        >
          Adicionar ao carrinho
        </Button>
      </div>
    </div>
  );
}
