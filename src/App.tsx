import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import ProductsList from "./Modules/ProductsList/ProductsList";
import Cart from "./Modules/Cart/Cart";

function App() {
  const [cartOpen, setCartOpen] = useState<boolean>(false);

  return (
    <>
      <Header onClick={() => setCartOpen(!cartOpen)} />
      <ProductsList />
      <Cart isOpen={cartOpen} />
    </>
  );
}

export default App;
