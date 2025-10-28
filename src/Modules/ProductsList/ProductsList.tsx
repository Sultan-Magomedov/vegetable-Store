import { SimpleGrid } from "@mantine/core";
import { useState, useEffect } from "react";
import ky from "ky";
import MyCard from "../../components/Card/Card";
import type { ProductType } from "../../types";

function ProductsList() {
  const [products, setProducts] = useState<ProductType[]>([]);

  const getProducts = async () => {
    try {
      const data: ProductType[] = await ky(
        "https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json"
      ).json();
      setProducts(data);
    } catch (err: unknown) {
      if (err instanceof Error) console.log(err.message);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <h1 style={{ display: "flex", marginTop: "60px" }}>Catalog</h1>
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
