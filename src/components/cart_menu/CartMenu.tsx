import styles from "./styles.module.css";

import CartOption from "../cart_option/CartOption";

import { useCartStore } from "../../store/use_cart_store/useCartStore";

export default function CartMenu() {
  const {
    state: { cart },
    actions: { removeGame },
  } = useCartStore();

  return (
    <div className={styles.cart_menu}>
      <div className={styles.options}>
        {cart.length === 0 && (
          <p className={styles.empty_cart}>Nenhum produto no seu carrinho.</p>
        )}
        {cart.map((cartInfo, pos) => (
          <CartOption
            src={cartInfo.src}
            alt={cartInfo.alt}
            width={cartInfo.width}
            height={cartInfo.height}
            title={cartInfo.title}
            price={cartInfo.price}
            onRemove={() => removeGame(pos)}
            key={cartInfo.id}
          />
        ))}
      </div>
      <div className={styles.total}>
        <h3 className={styles.title}>Total</h3>
        <div className={styles.price}>
          R$
          {cart
            .reduce((prev, current) => prev + current.price, 0)
            .toFixed(2)
            .toString()
            .replace(".", ",")}
        </div>
      </div>
    </div>
  );
}
