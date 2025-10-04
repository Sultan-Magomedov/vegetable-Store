import { Button, Flex } from "@mantine/core";
import Logo from "../../assets/icons/logo.svg?react";
import CartIcon from "../../assets/icons/Icon.svg?react";
import style from "./Header.module.css";

interface HeaderProps {
  onClick: () => void;
}

function Header({ onClick }: HeaderProps) {
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
        {" "}
        <Flex
          mih={50}
          gap="xs"
          justify="center"
          align="center"
          direction="row"
          wrap="wrap"
        >
          Cart
          <CartIcon />
        </Flex>
      </Button>
    </div>
  );
}

export default Header;
