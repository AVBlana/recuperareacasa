import styled from "styled-components";
import Box from "../../atoms/Box";
import { Text } from "../..";
import Button from "../../atoms/Button";
import { CaretRIcon } from "../../molecules/Icons/CaretRight";
import { theme } from "@/theme/constants";
import Flex from "../../atoms/Flex";
import { rgba } from "polished";

const Slider = () => {
  return (
    <>
      <Box style={{ background: rgba(0, 0, 0, 0.5) }}>
        <StyledSliderBox>
          <GradientLayer />

          <Box
            style={{
              position: "relative",
              zIndex: 2,
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
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text white big secondaryFont>
                Esti pe maini bune!
              </Text>
            </Flex>

            <Box
              style={{
                width: "75%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text secondaryFont white style={{ fontSize: 100 }}>
                Fizioterapie la tine acasa!
              </Text>
              <Text white big style={{ lineHeight: "150%" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                cum natus est maiores, inventore sit fugiat, voluptatum illum
                harum facere neque qui quaerat dolorum cumque distinctio dicta.
                Quia animi iste rerum repellendus natus beatae ab eaque eos
                recusandae, cumque consequuntur magnam praesentium
                exercitationem vero quas excepturi in voluptate. Sed, in.
              </Text>
            </Box>
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

const GradientLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1;
`;

const StyledSliderBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-image: url(./assets/img8.jpg);
  background-size: cover;
  background-position: center;
  align-items: center;
  justify-content: center;
`;

export default Slider;
