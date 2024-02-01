import styled from "styled-components";
import Image from "../../atoms/Image";
import { SvgIcon, Text } from "../..";
import { FbIcon } from "../../molecules/Icons/FbIcon";
import { InstaIcon } from "../../molecules/Icons/InstaIcon";
import { TikIcon } from "../../molecules/Icons/TikIcon";

const Footer = () => {
  return (
    <>
      <Background>
        <Container>
          <Top>
            <Logo>
              <Image
                src={"/assets/logoRecuperareAcasa.png"}
                width={100}
                height={100}
                alt=""
              />
            </Logo>
            <Image
              src={"/assets/logoRecuperareAcasa.png"}
              width={100}
              height={100}
              alt=""
            />
            <SocialBox>
              <FbIcon size={40} />
              <InstaIcon size={40} />
              <TikIcon size={40} />
            </SocialBox>
          </Top>
          <Bottom>
            <Text>2024 RecuperareAcasa</Text>
            <Text>Toate drepturile rezervate</Text>
            <Text>Ai grija de tine</Text>
          </Bottom>
        </Container>
      </Background>
    </>
  );
};

const Background = styled.div`
  display: flex;
  background-color: blue;
  align-items: center;
  justify-content: center;
  padding: 100px 200px;
`;

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: red;
  padding: 20px;
`;
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: green;
  padding: 40px;
  border-top: solid white 2px;
  border-left: solid white 2px;
  border-right: solid white 2px;
`;
const Logo = styled.div`
  display: flex;
  padding: 20px 40px;
`;
const SocialBox = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  padding-right: 20px;
`;

const Bottom = styled.div`
  display: flex;
  background-color: pink;
  padding: 10px 20px;
  justify-content: space-between;
  border: solid white 2px;
`;

export default Footer;
