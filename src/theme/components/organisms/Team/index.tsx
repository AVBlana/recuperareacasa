import styled from "styled-components";
import { Text } from "../..";
import Box from "../../atoms/Box";
import Flex from "../../atoms/Flex";
import TeamHero from "../../molecules/TeamCard";
import TeamCard from "../../molecules/TeamCard";
import { theme } from "@/theme/constants";

const Team = () => {
  const teamMember = {
    name: "Secașiu Alexandru Valentin",
    title: "Fizio-Kineto-Terapeut",
    imageSrc: "/assets/img3.jpg",
    skills: [
      "Absolvent al Universitatii Transilvania Brasov",
      "Absolvent al Orthopedic Manual Therapy Romania (OMTRO)",
      "Tehnician Maseur (Terapeutic, Relaxare,Reflexoterapie, Recuperare medicala)",
      "Terapeut avansat ERGON sau IATSM (Instrument assisted soft tissue mobilization)",
      "Terapeut Yumeiho - Gradul I",
      "Terapeut dry needling de peste 4 ani",
    ],
    experiences: [
      "10+ ani de experienta",
      "Specializat in terapia manuala ortopedica de recuperare",
    ],
  };
  return (
    <>
      <StyleTeamBox>
        <TeamCard {...teamMember} />
      </StyleTeamBox>
    </>
  );
};

const StyleTeamBox = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1440px;
  padding-left: 80px;
  padding-right: 80px;
  padding-top: 100px;
  align-items: center;
  justify-content: center;
`;

export default Team;
