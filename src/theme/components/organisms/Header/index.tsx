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
              <Link href={""}>
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
              <Link href={""}>
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

          <Flex
            style={{
              gap: theme.spacings.tiny,
              alignItems: "center",
              color: theme.color.white,
              background: theme.color.secondary,
              paddingTop: theme.spacings.medium,
              paddingBottom: theme.spacings.medium,
              paddingLeft: theme.spacings.bigger,
              paddingRight: theme.spacings.bigger,
              borderRadius: 20,
              cursor: "pointer",
            }}
            onClick={handleOpenModal}
          >
            Consultație Online
            <CaretRIcon size={16} fill="white" />
          </Flex>
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
