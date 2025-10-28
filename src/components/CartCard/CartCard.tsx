import Stepper from "../Stepper/Stepper";
import style from "./CartCard.module.css";
import { useTypedDispatch } from "../../hooks/redux";
import { updateQuantity } from "../../store/reducers/CartSlice";
import type { CartType } from "../../types";

function CartCard({ id, image, name, price, quantity }: CartType) {
  const dispatch = useTypedDispatch();

  const handleQuantityChange = (newQuantity: number) => {
    dispatch(updateQuantity({ id: id, quantity: newQuantity }));
  };

  return (
    <div className={style.flex}>
      <img src={image} height={80} alt={name} />
      <div className={style.flex3}>
        <p style={{ display: "flex" }}>{name}</p>
        <div className={style.flex2}>
          <p>${price}</p>
          <Stepper value={quantity} onChange={handleQuantityChange} />
        </div>
      </div>
    </div>
  );
}

export default CartCard;
