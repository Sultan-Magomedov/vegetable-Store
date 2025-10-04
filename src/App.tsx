import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header"
import ProductsList from "./Modules/ProductsList/ProductsList";
import Cart from "./Modules/Cart/Cart";
import { CartProvider } from "./CartContext";

function App() {
  const [cartOpen, setCartOpen] = useState<boolean>(false);

  return (
    <CartProvider>
      <Header onClick={() => setCartOpen(!cartOpen)} />
      <ProductsList />
      <Cart isOpen={cartOpen} />
    </CartProvider>
  );
}

export default App;
