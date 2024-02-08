import React, { useRef, useState } from "react";
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
import Form from "../Form";
import Modal from "../../molecules/Modal";
import FullScreenModal from "../../molecules/FullscreenModal";

const Header = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

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
            paddingLeft: theme.spacings.bigger,
            paddingRight: theme.spacings.bigger,
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
            paddingLeft: theme.spacings.bigger,
            paddingRight: theme.spacings.bigger,
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

          <Flex style={{ gap: theme.spacings.tiny, alignItems: "center" }}>
            <Button
              label="Consultație Online"
              onClick={handleOpenModal}
              style={{
                color: theme.color.white,
                background: theme.color.secondary,
                paddingTop: theme.spacings.medium,
                paddingBottom: theme.spacings.medium,
                paddingLeft: theme.spacings.bigger,
                paddingRight: theme.spacings.bigger,
                borderRadius: 20,
                cursor: "pointer",
              }}
            />

            <CaretRIcon size={9} fill="white" />
          </Flex>
          <FullScreenModal
            isVisible={isModalVisible}
            onClose={handleCloseModal}
          >
            <Form onClose={handleCloseModal} />
          </FullScreenModal>
        </Flex>
      </Box>
    </>
  );
};

const IconBox = styled.div`
  display: flex;
  padding: ${({ theme }) => theme.spacings.smaller}px;
`;

export default Header;
