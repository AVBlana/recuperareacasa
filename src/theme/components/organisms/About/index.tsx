import styled from "styled-components";
import Box from "../../atoms/Box";
import Flex from "../../atoms/Flex";
import Image from "../../atoms/Image";
import { SvgIcon, Text } from "../..";
import { theme } from "@/theme/constants";
import Button from "../../atoms/Button";
import { CaretRIcon } from "../../molecules/Icons/CaretRight";

const About = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <StyledAboutBox>
        <Flex
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            style={{
              position: "relative",
              top: 0,
              bottom: 0,
              left: -100,
              right: 0,
            }}
          >
            <Image width={900} height={600} src={"/assets/about.png"} alt="" />
          </Box>
          <Box style={{ maxWidth: 600 }}>
            <Text
              big
              semiBold
              secondaryFont
              style={{ color: theme.color.secondary, paddingBottom: 8 }}
            >
              Drespre Recuperare Acasă
            </Text>
            <Text
              style={{ width: 280, paddingBottom: 24 }}
              huge
              secondaryFont
              primary
            >
              Tratăm Persoana, Nu Doar Problema.
            </Text>
            <Text small style={{ paddingBottom: 40 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At nisi
              dolores ab eligendi tenetur, sit optio est, facere quibusdam
              praesentium omnis rem debitis doloremque deserunt quidem ad
              reiciendis molestias. Odit?
            </Text>
            <Flex style={{ paddingBottom: 40, gap: 40 }}>
              <Box
                style={{
                  gap: 24,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Flex style={{ gap: 24, alignItems: "center" }}>
                  <SvgIcon size={24} src="/assets/checkedSVG.svg" />
                  <Text bigger secondaryFont primary semiBold>
                    Lorem ipsum dolor sit amet.
                  </Text>
                </Flex>
                <Text small>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Possimus, et. Reiciendis voluptates porro voluptate atque
                  totam nihil! Laudantium, ea corporis.
                </Text>
              </Box>
              <Box
                style={{
                  gap: 24,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Flex style={{ gap: 24, alignItems: "center" }}>
                  <SvgIcon size={24} src="/assets/checkedSVG.svg" />
                  <Text bigger secondaryFont primary semiBold>
                    Lorem ipsum dolor sit amet.
                  </Text>
                </Flex>
                <Text small>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Possimus, et. Reiciendis voluptates porro voluptate atque
                  totam nihil! Laudantium, ea corporis.
                </Text>
              </Box>
            </Flex>
            <Flex
              style={{
                color: theme.color.white,
                background: theme.color.secondary,
                paddingTop: theme.spacings.medium,
                paddingBottom: theme.spacings.medium,
                paddingLeft: theme.spacings.bigger,
                paddingRight: theme.spacings.bigger,
                borderRadius: 20,
                gap: theme.spacings.tiny,
                cursor: "pointer",
                alignItems: "center",
                maxWidth: 200,
              }}
            >
              <Button
                label="Programeaza-te"
                onClick={() => scrollToSection("form")}
              ></Button>
              <CaretRIcon size={9} fill="white" />
            </Flex>
          </Box>
        </Flex>
      </StyledAboutBox>
    </>
  );
};

const StyledAboutBox = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  padding-right: 80px;
`;

export default About;
