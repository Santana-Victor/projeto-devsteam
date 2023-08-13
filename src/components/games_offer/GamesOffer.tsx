import styles from "./styles.module.css";

import SaleCard from "../cards/sale_card/SaleCard";

import { informationsDiscountGames } from "../../informations/informationsDiscountGames";

export default function GamesOffer() {
  return (
    <div className={styles.container}>
      {informationsDiscountGames.map((game) => (
        <SaleCard
          id={game.id}
          title={game.title}
          src={game.src}
          alt={game.alt}
          width={game.width}
          height={game.height}
          discount={game.discount}
          fullPrice={game.fullPrice}
          key={game.id}
        />
      ))}
    </div>
  );
}
