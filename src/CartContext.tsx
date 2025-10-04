import { createContext, useState, type ReactNode } from "react";

interface CartType {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartContextType {
  cart: CartType[];
  addToCart: (item: CartType) => void;
  updateQuantity: (id: number, quantity: number) => void;
  removeFromCart: (id: number) => void;
}

const defaultCartContext: CartContextType = {
  cart: [],
  addToCart: () => { },
  updateQuantity: () => { },
  removeFromCart: () => { },
};

export const CartContext = createContext<CartContextType>(
 defaultCartContext
);


interface CartProps {
  children: ReactNode;

}

export function CartProvider({ children }: CartProps) {
  const [cart, setCart] = useState<CartType[]>([]);

  const addToCart = (item: CartType) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      updateQuantity(item.id, existingItem.quantity + item.quantity);
    } else {
      setCart([...cart, { ...item, quantity: item.quantity }]);
    }
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }

    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, updateQuantity, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
}


