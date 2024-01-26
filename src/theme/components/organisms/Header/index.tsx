import React, { useRef } from "react";
import { MenuIcon, SvgIcon, Text } from "../..";
import Image from "../../atoms/Image";
import styled from "styled-components";
import Button from "../../atoms/Button";
import Link from "next/link";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <Wrapper>
        <Image
          width={50}
          height={50}
          src="/assets/logoRecuperareAcasa.png"
          alt=""
        />
        <MenuBox>
          <Link href="/">Home</Link>

          <Button
            label="About us"
            onClick={() => scrollToSection("about")}
          ></Button>
          <Button
            label="Services"
            onClick={() => scrollToSection("services")}
          ></Button>
          <Button
            label="Prices"
            onClick={() => scrollToSection("prices")}
          ></Button>
          <Button
            label="Contact us"
            onClick={() => scrollToSection("contact")}
          ></Button>
        </MenuBox>

        <MenuIcon size={20} />
      </Wrapper>
    </>
  );
};

const MenuBox = styled.div`
  display: flex;
  gap: 10px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  align-items: center;
`;

export default Header;
