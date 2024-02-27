import Link from "next/link";
import { FbIcon, SvgIcon, Text, YtIcon } from "../..";
import Box from "../../atoms/Box";
import Flex from "../../atoms/Flex";
import styled from "styled-components";
import { theme } from "@/theme/constants";
import NavItem from "../../atoms/NavItem";
import Image from "../../atoms/Image";
import WhatsAppButton from "../../molecules/WhatsAppButton";
import { WhatsappIcon } from "../../molecules/Icons/WhatsappIcon";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <StyledBackgroundBox>
        <Flex style={{ gap: 60 }}>
          <Box style={{ gap: 30 }}>
            <Text secondaryFont big>
              Contact
            </Text>
            <Box>
              <Link href={"phone:+40 727 860 759"}>
                <Text
                  biggest
                  secondaryFont
                  bold
                  style={{ color: theme.color.secondary }}
                >
                  +40 727 860 759
                </Text>
              </Link>
              <Link href={"mailto:info@recuperareacasa.ro"}>
                <Text
                  big
                  secondaryFont
                  bold
                  style={{ color: theme.color.secondary }}
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
              <Link href="">
                <StyledSocialBox>
                  <YtIcon size={20} fill={theme.color.primary}></YtIcon>
                </StyledSocialBox>
              </Link>
              <Link href="https://wa.me/+40767825269" target="_blank">
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
          <Box style={{ gap: 30 }}>
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
          <Box style={{ minWidth: 130, gap: 30 }}>
            <Text big secondaryFont>
              Program de lucru
            </Text>
            <Box style={{ gap: 20 }}>
              <Box style={{ gap: 10 }}>
                <Text small>Luni-Vineri:</Text>
                <Text small> 08:00-19:00</Text>
              </Box>
              <Box style={{ gap: 10 }}>
                <Text small>Sâmbătă-Duminică:</Text>
                <Text small>INCHIS</Text>
              </Box>
            </Box>
          </Box>
          <Flex style={{ justifyContent: "space-between", width: "100%" }}>
            <Flex style={{ gap: 60 }}>
              <Box style={{ maxWidth: 360, gap: 30 }}>
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
                <Image
                  width={200}
                  height={200}
                  src="/assets/logoRecuperareAcasa.png"
                  alt=""
                />
              </Link>
            </Box>
          </Flex>
        </Flex>
        <Flex
          style={{
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
          }}
        >
          <Text small>Copyright @ 2024</Text>
          <Link href="#">
            <Text primary small>
              Recuperare Acasă,
            </Text>
          </Link>
          <Text>Toate drepturile rezervate</Text>
        </Flex>
      </StyledBackgroundBox>
    </>
  );
};

const StyledSocialBox = styled.div`
  display: flex;
  border-radius: 100px;
  border-width: 1px;
  border-style: solid;
  border-color: ${theme.color.primary};
  padding: 10px;
  transition: transform 0.3s ease; /* Add transition for smooth effect */

  &:hover {
    transform: scale(1.3); /* Increase the scale on hover */
    border-color: ${theme.color.secondary};
    svg {
      fill: ${theme.color.secondary};
    }
  }
`;

const StyledBackgroundBox = styled.div`
  background-image: url(./assets/footer-bg.png);
  gap: 50px;
  padding-top: 48px;
  padding-bottom: 24px;
  padding-left: 80px;
  padding-right: 80px;
`;
export default Footer;
