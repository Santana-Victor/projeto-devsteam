import styles from "./styles.module.css";

import Logo from "../logo/Logo";
import Input from "../forms/input/Input";
import CartButton from "../forms/cart_button/CartButton";

export default function Header() {
  return (
    <header className={styles.header} role={"banner"}>
      <Logo />
      <div className={styles.header__container}>
        <Input fullWidth={true} type={"text"} placeHolder={"Buscar"} />
      </div>
      <CartButton />
    </header>
  );
}
