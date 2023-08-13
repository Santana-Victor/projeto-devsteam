import { useState } from "react";
import { BsCart4 } from "react-icons/bs";

import styles from "./styles.module.css";

import CartMenu from "../../cart_menu/CartMenu";

import { useCartStore } from "../../../store/use_cart_store/useCartStore";

export default function CartButton() {
  const [open, setOpen] = useState(false);
  const {
    state: { cart },
  } = useCartStore();

  return (
    <>
      <button
        className={styles.cart_button}
        role={"button"}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <BsCart4 size={40} className={styles.icon_cart} fill="#ffffff" />
        {cart.length > 0 && (
          <div className={styles.quantity}>{cart.length}</div>
        )}
      </button>
      {open && <CartMenu />}
    </>
  );
}
