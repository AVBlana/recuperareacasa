import Link from "next/link";
import { FbIcon, Text, YtIcon } from "../..";
import Box from "../../atoms/Box";
import Flex from "../../atoms/Flex";
import styled from "styled-components";
import { theme } from "@/theme/constants";
import NavItem from "../../atoms/NavItem";
import Image from "../../atoms/Image";

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
              <Link href={"phone:+40 123 456 789"}>
                <Text
                  biggest
                  secondaryFont
                  bold
                  style={{ color: theme.color.secondary }}
                >
                  +40 123 456 789
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
              <StyledSocialBox>
                <FbIcon size={16} fill={theme.color.primary}></FbIcon>
              </StyledSocialBox>
              <StyledSocialBox>
                <YtIcon size={16} fill={theme.color.primary}></YtIcon>
              </StyledSocialBox>
            </Flex>
          </Box>
          <Box
            style={{ gap: 30, alignItems: "start", justifyContent: "start" }}
          >
            <Text big secondaryFont>
              Companie
            </Text>
            <Box style={{ gap: 5, margin: -20 }}>
              <NavItem
                label="Despre"
                onClick={() => scrollToSection("despre")}
              />
              <NavItem
                label="Servicii"
                onClick={() => scrollToSection("servicii")}
              />
              <NavItem
                label="Echipa"
                onClick={() => scrollToSection("echipa")}
              />
              <NavItem
                label="Galerie"
                onClick={() => scrollToSection("galerie")}
              />
              <NavItem
                label="Contact"
                onClick={() => scrollToSection("contact")}
              />
            </Box>
          </Box>
          <Flex style={{ justifyContent: "space-between", width: "100%" }}>
            <Box style={{ width: 360, gap: 30 }}>
              <Text big secondaryFont>
                Despre Noi
              </Text>
              <Text small>
                Lovecare A trusted name for caring for someone. Seniors live
                their life in their own way here what they want. No one can
                bother them here, that's why they can feel free and independent.
              </Text>
            </Box>
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
`;

const StyledBackgroundBox = styled.div`
  background-image: url(./assets/footer-bg.png);
  gap: 50px;
  padding-top: 48px;
  padding-bottom: 24px;
  padding-left: 30px;
  padding-right: 30px;
`;
export default Footer;
