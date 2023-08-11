import styles from "./styles.module.css";

interface PriceCardProps {
  discount: number;
  fullPrice: number;
}

export default function PriceCard({ discount, fullPrice }: PriceCardProps) {
  return (
    <div className={styles.price_card}>
      <div className={styles.discount}>-{discount}%</div>
      <div className={styles.price}>
        <div className={styles.fullprice}>
          R${fullPrice.toFixed(2).toString().replace(".", ",")}
        </div>
        <div className={styles.discount_price}>
          R$
          {`${(fullPrice - (fullPrice * discount) / 100).toFixed(1)}0`.replace(
            ".",
            ","
          )}
        </div>
      </div>
    </div>
  );
}
