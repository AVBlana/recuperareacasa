import Link from "next/link";
import { FbIcon, SvgIcon, Text, YtIcon } from "../..";
import Box from "../../atoms/Box";
import Flex from "../../atoms/Flex";
import styled, { useTheme } from "styled-components";
import NavItem from "../../atoms/NavItem";
import Image from "../../atoms/Image";
import WhatsAppButton from "../../molecules/WhatsAppButton";
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
    <>
      <StyledBackgroundBox>
        <Flex
          style={{
            gap: theme.media.isMobile ? 40 : 60,
            flexDirection: theme.media.isMobile ? "column" : "row",
          }}
        >
          <Box
            style={{
              gap: theme.media.isMobile ? 20 : 30,
              alignItems: theme.media.isMobile ? "center" : "start",
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
              <Link href={"mailto:info@recuperareacasa.ro"}>
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
              <Link href="">
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
          <Box
            style={{
              gap: 30,
              display: theme.media.isMobile ? "none" : "flex",
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
          <Box
            style={{
              minWidth: 130,
              gap: theme.media.isMobile ? 20 : 30,
              alignItems: theme.media.isMobile ? "center" : "start",
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
          <Flex
            style={{
              justifyContent: theme.media.isMobile ? "center" : "space-between",
              width: "100%",
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
        <Flex
          style={{
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
            paddingTop: theme.media.isMobile ? 20 : 0,
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
  padding-left: ${({ theme }) => (theme.media.isMobile ? "20" : "80")}px;
  padding-right: ${({ theme }) => (theme.media.isMobile ? "20" : "40")}px;
`;
export default Footer;
