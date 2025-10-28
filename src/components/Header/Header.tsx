import { Badge, Button, Flex } from "@mantine/core";
import Logo from "../../assets/icons/logo.svg?react";
import CartIcon from "../../assets/icons/Icon.svg?react";
import style from "./Header.module.css";
import { useTypedSelector } from "../../hooks/redux";

interface HeaderProps {
  onClick: () => void;
}

function Header({ onClick }: HeaderProps) {
  const cart = useTypedSelector((state) => state.cartReducer.cart);

  return (
    <div className={style.header}>
      <Logo />
      <Button
        variant="filled"
        color="#74C286"
        radius="md"
        pr={30}
        pl={30}
        onClick={onClick}
      >
        <Flex
          mih={50}
          gap="xs"
          justify="center"
          align="center"
          direction="row"
          wrap="wrap"
        >
          {Boolean(cart.length) && (
            <Badge variant="white" size="md" circle color="black">
              {cart.length}
            </Badge>
          )}
          Cart
          <CartIcon />
        </Flex>
      </Button>
    </div>
  );
}

export default Header;
