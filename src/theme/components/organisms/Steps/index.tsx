import styled from "styled-components";
import { Text } from "../..";
import Box from "../../atoms/Box";
import StepCard from "../../molecules/StepCard";
import Flex from "../../atoms/Flex";

const steps = [
  {
    label: "Pasul 1",
    title: "Completează Chestionarul",
    image: "/assets/img1.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, repudiandae quis laudantium obcaecati rerum vitae enim aperiam eum veniam eaque.",
  },
  {
    label: "Pasul 2",
    title: "Titlu pasul 2",
    image: "/assets/img2.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, repudiandae quis laudantium obcaecati rerum vitae enim aperiam eum veniam eaque.",
  },
  {
    label: "Pasul 3",
    title: "Titlu pasul 3",
    image: "/assets/img3.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, repudiandae quis laudantium obcaecati rerum vitae enim aperiam eum veniam eaque.",
  },
  {
    label: "Pasul 4",
    title: "Titlu pasul 4",
    image: "/assets/img4.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, repudiandae quis laudantium obcaecati rerum vitae enim aperiam eum veniam eaque.",
  },
];

const Steps = () => {
  return (
    <Box style={{ alignItems: "center", justifyContent: "center" }}>
      <Box
        style={{
          gap: 80,
          paddingBottom: 100,
          paddingLeft: 80,
          paddingRight: 80,
          maxWidth: 1440,
        }}
      >
        <Box style={{ gap: 20, maxWidth: 600, lineHeight: "140%" }}>
          <Text secondaryFont primary huge>
            Care este procesul ?
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
            fuga, vero aliquam aspernatur iusto ullam consectetur veritatis
            assumenda impedit quasi.
          </Text>
        </Box>
        <StyledStepsBox>
          {steps.map((step, index) => (
            <StepCard
              key={index}
              label={step.label}
              image={step.image}
              title={step.title}
              desc={step.desc}
            />
          ))}
        </StyledStepsBox>
      </Box>
    </Box>
  );
};

const StyledStepsBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 60px;
  align-items: center;
  justify-content: center;
  > * {
    width: calc(50%);
  }
`;

export default Steps;
