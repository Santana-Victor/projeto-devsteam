import styles from "./styles.module.css";

import PriceCard from "../price_card/PriceCard";
import Button from "../../forms/button/Button";

interface SaleCardProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  discount: number;
  fullPrice: number;
}

export default function SaleCard({
  src,
  alt,
  width,
  height,
  discount,
  fullPrice,
}: SaleCardProps) {
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
        <Button fullWidth={true}>Adicionar ao carrinho</Button>
      </div>
    </div>
  );
}
