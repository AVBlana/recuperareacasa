import styled, { useTheme } from "styled-components";

import TeamCard from "../../molecules/TeamCard";

const Team = () => {
  const teamMember = {
    name: "Secasiu Alexandru Valentin",
    title: "Fiziokinetoterapeut",
    imageSrc: "/assets/avatar.png",
    skills: [
      "Absolvent al Universitatii Transilvania Brasov - Kinetoterapie",
      "Absolvent al Orthopedic Manual Therapy Romania (OMTRO)",
      "Tehnician Maseur (Terapeutic, Relaxare,Reflexoterapie, Recuperare medicala)",
      "Terapeut avansat ERGON sau IATSM (Instrument assisted soft tissue mobilization)",
      "Terapeut Yumeiho - Gradul I",
      "Terapeut dry needling de peste 4 ani",
    ],
    experiences: [
      "+7 ani de experiență",
      "- Specializat în terapia manuala ortopedica de recuperare",
      "- Maseur la Spa dOr",
      "- Kinetoterapeut la KineticPlus Brasov",
      "- Fondator RecuperareAcasa",
      "- Fizioterapeut al echipei de baschet feminin Corona Brașov LIGA 1",
      "- Kinetoterapeut al Novoegrama Cluj Napoca",
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
  flex-direction: ${({ theme }) =>
    theme.media.isMobile ? "column" : theme.media.isTablet ? "column" : "row"};
  max-width: 1440px;
  padding-left: ${({ theme }) =>
    theme.media.isMobile ? "20" : theme.media.isTablet ? "40" : "80"}px;
  padding-right: ${({ theme }) =>
    theme.media.isMobile ? "20" : theme.media.isTablet ? "40" : "80"}px;
  padding-top: 100px;
  padding-bottom: ${({ theme }) => (theme.media.isMobile ? "60" : "0")}px;
  align-items: center;
  justify-content: center;
`;

export default Team;
