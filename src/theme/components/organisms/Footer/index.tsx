"use client";

import Link from "next/link";
import { FbIcon, Text, YtIcon } from "../..";
import Box from "../../atoms/Box";
import Flex from "../../atoms/Flex";
import styled, { useTheme } from "styled-components";
import NavItem from "../../atoms/NavItem";
import Image from "../../atoms/Image";
import { WhatsappIcon } from "../../molecules/Icons/WhatsappIcon";
import { useState, useCallback } from "react";

const Footer = () => {
  const theme = useTheme();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <StyledBackgroundBox>
        <Flex
          style={{
            gap: theme.media.isMobile ? 40 : theme.media.isTablet ? 40 : 60,
            flexDirection: theme.media.isMobile ? "column" : "row",
            flexWrap: theme.media.isTablet ? "wrap" : "nowrap",
            justifyContent: "space-between",
          }}
        >
          {/* Contact Section */}
          <Box
            style={{
              gap: theme.media.isMobile ? 20 : 30,
              alignItems: theme.media.isMobile ? "center" : "start",
              flex: theme.media.isTablet ? "1 0 40%" : "1",
            }}
          >
            <Text secondaryFont big primary>
              Contact
            </Text>
            <Box
              style={{
                alignItems: theme.media.isMobile ? "center" : "start",
                gap: theme.media.isMobile ? 5 : 0,
              }}
            >
              <Link href={"phone:+40 727 860 759"}>
                <Text
                  secondaryFont
                  bold
                  style={{
                    color: theme.color.secondary,
                    fontSize: theme.media.isMobile
                      ? theme.text.biggest
                      : theme.text.bigger,
                  }}
                >
                  +40 727 860 759
                </Text>
              </Link>
              <Link href={"mailto:recuperareacasa@gmail.com"}>
                <Text
                  secondaryFont
                  bold
                  style={{
                    color: theme.color.secondary,
                    fontSize: theme.media.isMobile
                      ? theme.text.big
                      : theme.text.small,
                  }}
                >
                  info@recuperareacasa.ro
                </Text>
              </Link>
            </Box>
            <Flex style={{ gap: 10 }}>
              <Link href="https://facebook.com/profile.php/?id=100094398126446">
                <StyledSocialBox>
                  <FbIcon size={20} fill={theme.color.primary}></FbIcon>
                </StyledSocialBox>
              </Link>
              <Link href="https://www.youtube.com/@RecuperareAcasa">
                <StyledSocialBox>
                  <YtIcon size={20} fill={theme.color.primary}></YtIcon>
                </StyledSocialBox>
              </Link>
              <Link href="https://wa.me/+40727860759" target="_blank">
                <StyledSocialBox style={{ padding: 10 }}>
                  <WhatsappIcon
                    size={20}
                    fill={theme.color.primary}
                    overrideFillColor={theme.color.white}
                  />
                </StyledSocialBox>
              </Link>
            </Flex>
          </Box>

          {/* Company Section */}
          <Box
            style={{
              gap: 30,
              display: theme.media.isMobile ? "none" : "flex",
              flex: theme.media.isTablet ? "1 0 40%" : "1",
            }}
          >
            <Text big secondaryFont>
              Companie
            </Text>
            <Box style={{ gap: 5 }}>
              <NavItem
                alignLeft
                label="Despre"
                onClick={() => scrollToSection("despre")}
              />
              <NavItem
                alignLeft
                label="Servicii"
                onClick={() => scrollToSection("servicii")}
              />
              <NavItem
                alignLeft
                label="Echipa"
                onClick={() => scrollToSection("echipa")}
              />
              <NavItem
                alignLeft
                label="Galerie"
                onClick={() => scrollToSection("galerie")}
              />
              <NavItem
                alignLeft
                label="Contact"
                onClick={() => scrollToSection("contact")}
              />
            </Box>
          </Box>

          {/* Working Hours Section */}
          <Box
            style={{
              minWidth: 140,
              gap: theme.media.isMobile ? 20 : 30,
              alignItems: theme.media.isMobile ? "center" : "start",
              flex: theme.media.isTablet ? "1 0 40%" : "1",
            }}
          >
            <Text big secondaryFont>
              Program de lucru
            </Text>
            <Box
              style={{
                gap: theme.media.isMobile ? 10 : 20,
              }}
            >
              <Box
                style={{
                  gap: 10,
                  flexDirection: theme.media.isMobile ? "row" : "column",
                }}
              >
                <Text small>Luni - Vineri:</Text>
                <Text small> 08:00 - 19:00</Text>
              </Box>
              <Box
                style={{
                  gap: 10,
                  flexDirection: theme.media.isMobile ? "row" : "column",
                }}
              >
                <Text small>Sâmbătă - Duminică:</Text>
                <Text small>Inchis</Text>
              </Box>
            </Box>
          </Box>

          {/* About Us , Map and Logo Section */}
          <Flex
            style={{
              justifyContent: "space-between",
              alignItems: theme.media.isMobile ? "center" : "flex-start",
              width: "100%",
              gap: theme.media.isMobile ? 40 : 60,
              marginTop: theme.media.isMobile
                ? 0
                : theme.media.isTablet
                ? 20
                : 0,
              flexDirection: theme.media.isMobile ? "column" : "row",
            }}
          >
            <Flex
              style={{
                gap: 60,
              }}
            >
              <Box
                style={{
                  maxWidth: 360,
                  gap: 30,
                  display: theme.media.isMobile ? "none" : "flex",
                }}
              >
                <Text big secondaryFont>
                  Despre Noi
                </Text>
                <Box style={{ gap: 10 }}>
                  <Text small style={{ lineHeight: "140%" }}>
                    Recuperare medicală la domiciliu oferă programe
                    personalizate ce includ tehnici de terapie manuală, masaj,
                    dry needling și kinetoterapie.
                  </Text>
                  <Text small style={{ lineHeight: "140%" }}>
                    Zona de acoperire a serviciilor noastre se afla în
                    perimetrul orașelor Cluj-Florești-Gilau.
                  </Text>
                </Box>
              </Box>
            </Flex>

            {/* Location Map Section */}
            <Box
              style={{
                gap: theme.media.isMobile ? 20 : 30,
                alignItems: theme.media.isMobile ? "center" : "start",
                flex: theme.media.isTablet ? "1 0 40%" : "1",
              }}
            >
              <Text big secondaryFont>
                Vezi locația noastră pe hartă și citește recenziile clienților!
              </Text>
              <Box
                style={{
                  width: "100%",
                  height: theme.media.isMobile ? "200px" : "150px",
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2732.1234567890123!2d23.4995405!3d46.7434508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47490f4532c4e24f%3A0xcfdb9e92fccc12ab!2sRecuperareAcasa%20SRL%20(Masaj%2FKinetoterapie%20la%20domiciliu)%20Cluj!5e0!3m2!1sen!2sro!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </Box>
            </Box>
            <Box>
              <Link href={"/"}>
                <StyledLogo>
                  <Image
                    width={200}
                    height={200}
                    src="/assets/logoRecuperareAcasa.png"
                    alt=""
                  />
                </StyledLogo>
              </Link>
            </Box>
          </Flex>
        </Flex>

        {/* Copyright Section */}
        <Flex
          style={{
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
            paddingTop: theme.media.isMobile ? 20 : 30,
            flexDirection: theme.media.isMobile ? "column" : "row",
          }}
        >
          <Text
            style={{
              fontSize: theme.media.isMobile
                ? theme.text.smallest
                : theme.text.smaller,
            }}
          >
            Copyright @ 2024
          </Text>

          <Text
            style={{
              fontSize: theme.media.isMobile
                ? theme.text.smallest
                : theme.text.smaller,
            }}
          >
            Recuperare Acasă. Toate drepturile rezervate
          </Text>
        </Flex>
      </StyledBackgroundBox>
    </>
  );
};

const StyledLogo = styled.div`
  transition: transform 0.3s ease;
  &:hover {
    transform: translateX(-20px) scale(1.3);
  }
`;

const StyledSocialBox = styled.div`
  display: flex;
  border-radius: 100px;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.color.primary};
  padding: 10px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.3);
    border-color: ${({ theme }) => theme.color.secondary};
    svg {
      fill: ${({ theme }) => theme.color.secondary};
    }
  }
`;

const StyledBackgroundBox = styled.div`
  background-image: url(./assets/footer-bg.png);
  padding-top: 40px;
  padding-bottom: 20px;
  padding-left: ${({ theme }) =>
    theme.media.isMobile ? "20" : theme.media.isTablet ? "40" : "80"}px;
  padding-right: ${({ theme }) =>
    theme.media.isMobile ? "20" : theme.media.isTablet ? "20" : "40"}px;
`;

export default Footer;
