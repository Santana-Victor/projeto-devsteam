import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Section from "./components/section/Section";
import Subtitle from "./components/subtitle/Subtitle";
import GamesOffer from "./components/games_offer/GamesOffer";
import Games from "./components/games/Games";

export default function App() {
  return (
    <>
      <Header />
      <Main>
        <Section>
          <Subtitle>Promoções</Subtitle>
          <GamesOffer />
        </Section>
        <Section>
          <Subtitle>Outros jogos</Subtitle>
          <Games />
        </Section>
      </Main>
    </>
  );
}
