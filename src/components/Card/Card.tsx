import { Group, Card, Text, Image, Button, Flex } from "@mantine/core";
import "@mantine/core/styles.css";
import CartIcon from "../../assets/icons/Icon.svg?react";
import { useContext, useState} from "react";
import { CartContext } from "../../CartContext";
import CardStepper from "../CardStepper/CardStepper";

interface MyCardProps {
  id:number
  image: string;
  name: string;
  price: number;
}

function MyCard({ id,image, name, price}: MyCardProps) {
  const {addToCart}=useContext(CartContext)
const [quantity, setQuantity] = useState<number>(1);

const handleQuantityChange=(newQuantity:number)=>{
setQuantity(newQuantity)
}
  const handleAddToCart = () => {
    addToCart({
      id: id,
      name: name,
      price: price,
      quantity: quantity,
      image:image
    });
    setQuantity(1)
  };

  return (
    <Card p="lg" radius="md" withBorder>
      <Card.Section>
        <Image src={image} alt={name} height={260} />
      </Card.Section>
      <Group justify="space-between">
        <Text >{name}</Text>
        <CardStepper value={quantity} onChange={handleQuantityChange} />
      </Group>
      <Group justify="space-between">
        <Text mt="md">${price}</Text>
        <Button
          variant="filled"
          color="#74C286"
          mt="md"
          radius="md"
          pr={40}
          pl={40}
          onClick={handleAddToCart}
        >
          <Flex
            mih={50}
            gap="xs"
            justify="center"
            align="center"
            direction="row"
            wrap="wrap"
          >
            Add to cart
            <CartIcon />
          </Flex>
        </Button>
      </Group>
    </Card>
  );
}

export default MyCard;
