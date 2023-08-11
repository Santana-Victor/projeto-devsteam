import styles from "./styles.module.css";

import GameCard from "../cards/game_card/GameCard";

import { informationsGames } from "../../informations/informationsGames";

export default function Games() {
  return (
    <div className={styles.games}>
      {informationsGames.map((game) => (
        <GameCard
          title={game.title}
          src={game.src}
          alt={game.alt}
          width={game.width}
          height={game.height}
          category={game.category}
          fullPrice={game.fullPrice}
          key={game.id}
        />
      ))}
    </div>
  );
}
