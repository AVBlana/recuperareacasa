import styled from "styled-components";
import Box from "../../atoms/Box";
import { Text } from "../..";
import Button from "../../atoms/Button";
import { CaretRIcon } from "../../molecules/Icons/CaretRight";
import { theme } from "@/theme/constants";
import Flex from "../../atoms/Flex";
import { rgba } from "polished";

const Slider = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <Box style={{ background: rgba(0, 0, 0, 0.5) }}>
        <StyledSliderBox>
          <Box
            style={{
              justifyContent: "center",
              alignItems: "center",
              gap: 30,
            }}
          >
            <Flex
              style={{
                paddingLeft: 16,
                paddingRight: 16,
                paddingTop: 4,
                paddingBottom: 4,
                background: theme.color.primary,
                borderRadius: 20,
                width: "fit-content",
                justifyContent: "center",
              }}
            >
              <Text white big secondaryFont>
                Esti pe maini bune !
              </Text>
            </Flex>

            <Text secondaryFont white style={{ fontSize: 100 }}>
              Fizioterapie la tine acasa !
            </Text>
            <Text white big>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
              laborum quos voluptas molestias quis. In labore soluta accusantium
              cupiditate odit.
            </Text>
            <Flex
              style={{
                background: theme.color.secondary,
                paddingLeft: 16,
                paddingRight: 16,
                paddingTop: 8,
                paddingBottom: 8,
                borderRadius: 20,
                gap: 10,
                alignItems: "center",
              }}
            >
              <Text white big>
                Consultatie obiectiva online
              </Text>
              <CaretRIcon size={14} fill={theme.color.white} />
            </Flex>
          </Box>
        </StyledSliderBox>
      </Box>
    </>
  );
};

const StyledSliderBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-image: url(./assets/img8.jpg);
  background-size: cover;
  background-position: center;
  top: -80px;
  align-items: center;
  justify-content: center;
`;

export default Slider;
