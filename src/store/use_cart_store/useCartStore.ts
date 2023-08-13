import { create } from "zustand";

type CartProps = {
  id: number;
  src: string;
  alt: string;
  width: number;
  height: number;
  title: string;
  price: number;
};

type ActionsProps = {
  addGame: (info: CartProps) => void;
  removeGame: (pos: number) => void;
};

type StoreProps = {
  state: {
    cart: CartProps[];
  };
  actions: ActionsProps;
};

export const useCartStore = create<StoreProps>((set) => ({
  state: {
    cart: [],
  },
  actions: {
    addGame: (info) =>
      set((state) => ({
        state: { cart: [...state.state.cart, info] },
      })),
    removeGame: (pos) =>
      set((state) => ({
        state: {
          cart: state.state.cart.filter((obj, posOjb) => posOjb !== pos),
        },
      })),
  },
}));
