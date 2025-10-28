import style from "./Cart.module.css";
import CartCard from "../../components/CartCard/CartCard";
import EmptyCart from "../../components/EmptyCart/EmptyCart";
import { useTypedSelector } from "../../hooks/redux";
import type { CartType } from "../../types";
interface CartProps {
  isOpen: boolean;
}

function Cart({ isOpen }: CartProps) {
  const cart = useTypedSelector((state) => state.cartReducer.cart);

  if (!isOpen) return null;

  if (cart.length === 0) {
    return <EmptyCart />;
  }

  const total = cart.reduce(
    (acc: number, item: CartType) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className={style.cartWindow}>
      <div className={style.cartList}>
        <ul>
          {cart.map((item: CartType) => (
            <li key={item.id} className={style.cartItem}>
              <CartCard
                id={item.id}
                image={item.image}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className={style.total}>
        <p>Total</p>
        <p>${total.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default Cart;
