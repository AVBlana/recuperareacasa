"use client";

import Link from "next/link";
import { FbIcon, InstaIcon, Text, YtIcon } from "../..";
import Box from "../../atoms/Box";
import Flex from "../../atoms/Flex";
import styled, { useTheme } from "styled-components";
import NavItem from "../../atoms/NavItem";
import Image from "../../atoms/Image";
import { WhatsappIcon } from "../../molecules/Icons/WhatsappIcon";

const Footer = () => {
  const theme = useTheme();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <StyledBackgroundBox>
      <FooterGrid>

        {/* 1 — Logo */}
        <Flex style={{ alignItems: "flex-start", justifyContent: "flex-start" }}>
          <Link href="/">
            <StyledLogo>
              <Image
                width={theme.media.isMobile ? 90 : 120}
                height={theme.media.isMobile ? 90 : 120}
                src="/assets/logoRecuperareAcasa.png"
                alt=""
              />
            </StyledLogo>
          </Link>
        </Flex>

        {/* 2 — Contact */}
        <Box style={{ gap: 16 }}>
          <Text secondaryFont big primary>Contact</Text>
          <Box style={{ gap: 6 }}>
            <Link href="tel:+40727860759">
              <Text
                secondaryFont bold
                style={{ color: theme.color.secondary, fontSize: theme.text.bigger }}
              >
                +40 727 860 759
              </Text>
            </Link>
            <Link href="mailto:recuperareacasa@gmail.com">
              <Text
                secondaryFont bold
                style={{ color: theme.color.secondary, fontSize: theme.text.small }}
              >
                info@recuperareacasa.ro
              </Text>
            </Link>
          </Box>
          <Flex style={{ gap: 8 }}>
            <Link href="https://facebook.com/profile.php/?id=100094398126446">
              <StyledSocialBox>
                <FbIcon size={18} fill={theme.color.primary} />
              </StyledSocialBox>
            </Link>
            <Link href="https://www.instagram.com/recuperareacasa">
              <StyledSocialBox>
                <InstaIcon size={18} fill={theme.color.primary} />
              </StyledSocialBox>
            </Link>
            <Link href="https://www.youtube.com/@RecuperareAcasa">
              <StyledSocialBox>
                <YtIcon size={18} fill={theme.color.primary} />
              </StyledSocialBox>
            </Link>
            <Link href="https://wa.me/+40727860759" target="_blank">
              <StyledSocialBox style={{ padding: 9 }}>
                <WhatsappIcon size={18} fill={theme.color.primary} overrideFillColor={theme.color.white} />
              </StyledSocialBox>
            </Link>
          </Flex>
        </Box>

        {/* 3 — Companie (hidden on mobile) */}
        <HideOnMobile style={{ gap: 16 }}>
          <Text big secondaryFont>Companie</Text>
          <Box style={{ gap: 4 }}>
            <NavItem alignLeft label="Despre" onClick={() => scrollToSection("despre")} />
            <NavItem alignLeft label="Servicii" onClick={() => scrollToSection("servicii")} />
            <NavItem alignLeft label="Echipa" onClick={() => scrollToSection("echipa")} />
            <NavItem alignLeft label="Galerie" onClick={() => scrollToSection("galerie")} />
            <NavItem alignLeft label="Contact" onClick={() => scrollToSection("contact")} />
          </Box>
        </HideOnMobile>

        {/* 4 — Program */}
        <Box style={{ gap: 16 }}>
          <Text big secondaryFont>Program</Text>
          <Box style={{ gap: 12 }}>
            <Box style={{ gap: 2 }}>
              <Text small>Luni - Vineri</Text>
              <Text small semiBold primary>08:00 - 19:00</Text>
            </Box>
            <Box style={{ gap: 2 }}>
              <Text small>Sâmbătă - Duminică</Text>
              <Text small semiBold primary>Închis</Text>
            </Box>
          </Box>
        </Box>

        {/* 5 — Despre Noi (hidden on mobile) */}
        <HideOnMobile style={{ gap: 16 }}>
          <Text big secondaryFont>Despre Noi</Text>
          <Box style={{ gap: 8 }}>
            <Text small style={{ lineHeight: "155%" }}>
              Recuperare medicală la domiciliu — terapie manuală, masaj, dry needling și kinetoterapie.
            </Text>
            <Text small style={{ lineHeight: "155%" }}>
              Zona: Cluj · Florești · Gilău.
            </Text>
          </Box>
        </HideOnMobile>

        {/* 6 — Date firmă */}
        <Box style={{ gap: 16 }}>
          <Text big secondaryFont>Date firmă</Text>
          <Box style={{ gap: 5 }}>
            <Text small semiBold>RECUPERAREACASA S.R.L</Text>
            <Text small style={{ lineHeight: "150%" }}>
              Str. TĂUȚULUI Nr. 19D, Sc. 1, Ap. 1, Florești, Jud. Cluj
            </Text>
            <Text small>CUI: 48543710</Text>
            <Text small>Nr. ordine: J12/3204/26.07.2023</Text>
            <Text small>IBAN: RO82RZBR0000060025106494</Text>
          </Box>
        </Box>

        {/* 7 — Locație */}
        <Box style={{ gap: 16 }}>
          <Text big secondaryFont>Locație</Text>
          <MapBox>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2732.1234567890123!2d23.4995405!3d46.7434508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47490f4532c4e24f%3A0xcfdb9e92fccc12ab!2sRecuperareAcasa%20SRL%20(Masaj%2FKinetoterapie%20la%20domiciliu)%20Cluj!5e0!3m2!1sen!2sro!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </MapBox>
        </Box>

      </FooterGrid>

      {/* Copyright */}
      <Flex
        style={{
          justifyContent: "center",
          alignItems: "center",
          gap: 8,
          paddingTop: 32,
          flexDirection: theme.media.isMobile ? "column" : "row",
          opacity: 0.5,
        }}
      >
        <Text style={{ fontSize: theme.text.smaller }}>Copyright © 2024</Text>
        <Text style={{ fontSize: theme.text.smaller }}>·</Text>
        <Text style={{ fontSize: theme.text.smaller }}>
          Recuperare Acasă. Toate drepturile rezervate.
        </Text>
      </Flex>
    </StyledBackgroundBox>
  );
};

const StyledBackgroundBox = styled.div`
  background-image: url(./assets/footer-bg.png);
  padding-top: 50px;
  padding-bottom: 24px;
  padding-left: ${({ theme }) =>
    theme.media.isMobile ? "20" : theme.media.isTablet ? "40" : "80"}px;
  padding-right: ${({ theme }) =>
    theme.media.isMobile ? "20" : theme.media.isTablet ? "40" : "80"}px;
`;

const FooterGrid = styled.div`
  display: grid;
  align-items: start;
  grid-template-columns: ${({ theme }) =>
    theme.media.isMobile
      ? "1fr"
      : theme.media.isTablet
      ? "1fr 1fr"
      : "110px 0.9fr 0.55fr 0.55fr 1fr 1fr 1.6fr"};
  gap: ${({ theme }) =>
    theme.media.isMobile ? "36px" : theme.media.isTablet ? "40px" : "32px"};
`;

/* Hidden on mobile, visible on tablet + desktop */
const HideOnMobile = styled(Box)`
  display: ${({ theme }) => (theme.media.isMobile ? "none" : "flex")};
`;

const MapBox = styled.div`
  width: 100%;
  height: ${({ theme }) => (theme.media.isMobile ? "200px" : "160px")};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const StyledLogo = styled.div`
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.08);
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

export default Footer;
