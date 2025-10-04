import style from "./EmptyCart.module.css";
import Empty from "../../assets/icons/cart_empty.svg?react";

const EmptyCart = () => {
  return (
    <div className={style.cartWindow}>
      <Empty />
      <h3 className={style.text}>You cart is empty!</h3>
    </div>
  );
};

export default EmptyCart;
