import { BsCart4 } from "react-icons/bs";

import styles from "./styles.module.css";

import Logo from "../logo/Logo";
import Input from "../forms/input/Input";

export default function Header() {
  return (
    <header className={styles.header} role={"banner"}>
      <Logo />
      <div className={styles.header__container}>
        <Input fullWidth={true} type={"text"} placeHolder={"Buscar"} />
      </div>
      <BsCart4 size={40} className="icon_cart" />
    </header>
  );
}
