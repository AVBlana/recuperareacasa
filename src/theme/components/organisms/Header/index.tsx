import React, { useContext, useRef, useState } from "react";
import { FbIcon, Text, YtIcon } from "../..";
import Image from "../../atoms/Image";
import styled, { useTheme } from "styled-components";
import Button from "../../atoms/Button";
import Link from "next/link";
import { PhoneIcon } from "../../molecules/Icons/PhoneIcon";
import { MailIcon } from "../../molecules/Icons/MailIcon";
import NavItem from "../../atoms/NavItem";
import { CaretRIcon } from "../../molecules/Icons/CaretRight";
import Box from "../../atoms/Box";
import Flex from "../../atoms/Flex";
import Modal from "../../molecules/Modal";
import FullScreenModal from "../../molecules/FullscreenModal";
import StepsForm from "../StepsForm";
import { StepsContext, StepsProvider } from "../StepsForm/context";
import { WhatsappIcon } from "../../molecules/Icons/WhatsappIcon";

const Header = () => {
  const { handleOpenModal, handleCloseModal, isModalVisible } =
    useContext(StepsContext);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const theme = useTheme();

  return (
    <>
      <Box
        style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100 }}
      >
        <Flex
          style={{
            background: theme.color.primary,
            paddingLeft: 80,
            paddingRight: 80,
            marginLeft: -theme.spacings.smaller,
            marginRight: -theme.spacings.smaller,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link href="mailto:info@recuperareacasa.ro">
            <Flex style={{ alignItems: "center" }}>
              <IconBox>
                <MailIcon size={16} fill={theme.color.secondary} />
              </IconBox>
              <Flex>
                <Text small white>
                  info@recuperareacasa.ro
                </Text>
              </Flex>
            </Flex>
          </Link>
          <Flex style={{ gap: theme.spacings.tiny }}>
            <Link href="phone:+40 727 860 759">
              <Flex style={{ alignItems: "center" }}>
                <IconBox>
                  <PhoneIcon size={16} fill={theme.color.secondary} />
                </IconBox>
                <Text small white>
                  +40 727 860 759
                </Text>
              </Flex>
            </Link>
            <Flex>
              <Link href={"https://wa.me/+40727860759"}>
                <IconBox>
                  <WhatsappIcon
                    size={16}
                    fill={theme.color.white}
                    overrideFillColor={theme.color.primary}
                  />
                </IconBox>
              </Link>
              <Link href={""}>
                <IconBox>
                  <FbIcon size={16} fill={theme.color.white} />
                </IconBox>
              </Link>
              <Link href={"https://www.youtube.com/@RecuperareAcasa"}>
                <IconBox>
                  <YtIcon size={16} fill={theme.color.white} />
                </IconBox>
              </Link>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          style={{
            paddingLeft: 80,
            paddingRight: 80,
            height: 80,
            background: theme.color.white,
            borderBottom: "solid",
            borderColor: theme.color.primary,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link href={"/"}>
            <Image
              width={70}
              height={70}
              src="/assets/logoRecuperareAcasa.png"
              alt=""
            />
          </Link>

          <Flex style={{ height: "100%" }}>
            <NavItem label="Despre" onClick={() => scrollToSection("despre")} />
            <NavItem
              label="Servicii"
              onClick={() => scrollToSection("servicii")}
            />
            <NavItem label="Echipa" onClick={() => scrollToSection("echipa")} />
            <NavItem
              label="Galerie"
              onClick={() => scrollToSection("galerie")}
            />
            <NavItem
              label="Contact"
              onClick={() => scrollToSection("contact")}
            />
          </Flex>

          <HeaderButton onClick={handleOpenModal}>
            Consultație Online
            <CaretRIcon size={16} fill="white" />
          </HeaderButton>
          <FullScreenModal
            key={isModalVisible ? "header-modal-key" : "header-no-modal-key"}
            isVisible={isModalVisible}
            onClose={handleCloseModal}
          >
            {isModalVisible && (
              <StepsProvider>
                <StepsForm onClose={handleCloseModal} />
              </StepsProvider>
            )}
          </FullScreenModal>
        </Flex>
      </Box>
    </>
  );
};

const HeaderButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: ${({ theme }) => theme.spacings.tiny}px;
  align-items: center;
  color: ${({ theme }) => theme.color.white};
  background: ${({ theme }) => theme.color.secondary};
  padding-top: ${({ theme }) => theme.spacings.medium}px;
  padding-bottom: ${({ theme }) => theme.spacings.medium}px;
  padding-left: ${({ theme }) => theme.spacings.bigger}px;
  padding-right: ${({ theme }) => theme.spacings.bigger}px;
  border-radius: 20px;
  cursor: pointer;
  border-style: solid;
  transition: transform 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.color.white};
    color: ${({ theme }) => theme.color.secondary};
    border-color: ${({ theme }) => theme.color.secondary};
    transform: scale(1.1);
    svg {
      fill: ${({ theme }) => theme.color.secondary};
    }
  }
`;

const IconBox = styled.div`
  display: flex;
  padding: ${({ theme }) => theme.spacings.smaller}px;

  &:hover {
    transform: scale(1.3); /* Increase the scale on hover */
    border-color: ${({ theme }) => theme.color.secondary};
    svg {
      fill: ${({ theme }) => theme.color.secondary};
    }
  }
`;

export default Header;
