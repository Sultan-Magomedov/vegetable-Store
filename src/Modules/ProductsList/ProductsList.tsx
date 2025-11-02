import { SimpleGrid } from "@mantine/core";
import { useEffect } from "react";
import MyCard from "../../components/Card/Card";
import { useTypedDispatch, useTypedSelector } from "../../hooks/redux";
import { fetchProducts } from "../../store/reducers/ProductsSlice";

function ProductsList() {
  const { products, status, error } = useTypedSelector(
    (state) => state.productsReducer
  );
  const dispatch = useTypedDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <h1 style={{ display: "flex", marginTop: "60px" }}>Catalog</h1>
      {status === "loading" && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      <SimpleGrid cols={4}>
        {products.map((product) => (
          <MyCard
            key={product.id}
            id={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
          />
        ))}
      </SimpleGrid>
    </>
  );
}

export default ProductsList;
