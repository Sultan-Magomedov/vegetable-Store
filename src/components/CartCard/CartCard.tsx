import { useContext } from "react";
import Stepper from "../Stepper/Stepper";
import style from "./CartCard.module.css";
import { CartContext } from "../../CartContext";

interface CartCardProps {
  id:number
  image: string;
  name: string;
  price: number;
  quantity: number;
}

function CartCard({
  id,
  image,
  name,
  price,
  quantity,
}: CartCardProps) {

const {updateQuantity}=useContext(CartContext)

  const handleQuantityChange = (newQuantity: number) => {
    updateQuantity(id,newQuantity);
  };

  return (
    <div className={style.flex}>
      <img src={image} height={80} alt={name}/>
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
