import styled, { useTheme } from "styled-components";
import TeamCard from "../../molecules/TeamCard";
import { Text } from "../..";
import Box from "../../atoms/Box";

const teamMembers = [
  {
    name: "Secasiu Alexandru Valentin",
    title: "Fiziokinetoterapeut",
    imageSrc: "/assets/avatar.png",
    imageFit: "contain" as const,
    skills: [
      "Absolvent al Universitatii Transilvania Brasov - Kinetoterapie",
      "Absolvent al Orthopedic Manual Therapy Romania (OMTRO)",
      "Tehnician Maseur (Terapeutic, Relaxare, Reflexoterapie, Recuperare medicala)",
      "Terapeut avansat ERGON sau IATSM (Instrument assisted soft tissue mobilization)",
      "Terapeut Yumeiho - Gradul I",
      "Terapeut dry needling de peste 4 ani",
    ],
    experiences: [
      "+9 ani de experiență",
      "- Specializat în terapia manuala ortopedica de recuperare",
      "- Maseur la Spa dOr",
      "- Kinetoterapeut la KineticPlus Brasov",
      "- Fondator RecuperareAcasa",
      "- Fizioterapeut al echipei de baschet feminin Corona Brașov LIGA 1",
      "- Kinetoterapeut al Novoegrama Cluj Napoca",
    ],
  },
  {
    name: "Boldor Cosmin",
    title: "Kinetoterapeut & Maseur",
    imageSrc: "/assets/Boldor-Cosmin.png",
    skills: [
      "Absolvent Universitatea Babeș-Bolyai Cluj-Napoca — Kinetoterapie (licență + master)",
      "Absolvent Orthopedic Manual Therapy Romania (OMTRO)",
      "Specialist IASTM (Instrument Assisted Soft Tissue Mobilization)",
      "Specialist Masaj (Drenaj Limfatic, Terapeutic, Relaxare, Recuperare Medicală)",
      "Specialist recuperare umăr, genunchi și dureri de spate",
    ],
    experiences: [
      "+5 ani de experiență",
      "- Kinetoterapeut la Cranio Facial Pain",
      "- Kinetoterapeut la Novoengrama",
    ],
  },
  {
    name: "Moldovan Marcel-Raul",
    title: "Kinetoterapeut",
    imageSrc: "/assets/Moldovan-Marcel-Raul.png",
    skills: [
      "Absolvent Facultatea de Educație Fizică și Sport — Kinetoterapie, UBB Cluj-Napoca",
      "Master în Kinetoterapia Afecțiunilor Aparatului Locomotor, UBB Cluj-Napoca",
      "Absolvent curs Chiropractică, Medboost Academy, 2024",
      "Absolvent curs Neuroștiința durerii, 2026",
    ],
    experiences: [
      "5 ani de experiență",
      "- Kinetoterapeut la KinetikMED",
      "- Kinetoterapeut, maseur, antrenor personal la BodyMove Studio",
      "- Kinetoterapeut la Novoengrama",
      "- Kinetoterapeut la Centrul de vârstnici Senior",
    ],
  },
];

const Team = () => {
  const theme = useTheme();

  return (
    <StyleTeamBox>
      <Box style={{ gap: 10, paddingBottom: theme.media.isMobile ? 40 : 60 }}>
        <Text big semiBold secondaryFont style={{ color: theme.color.secondary }}>
          Echipa
        </Text>
        <Text primary huge secondaryFont>
          Cunoaste personalul
        </Text>
      </Box>
      <CardsScroller>
        {teamMembers.map((member) => (
          <TeamCard key={member.name} {...member} />
        ))}
      </CardsScroller>
    </StyleTeamBox>
  );
};

const StyleTeamBox = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  padding-left: ${({ theme }) =>
    theme.media.isMobile ? "20" : theme.media.isTablet ? "40" : "80"}px;
  padding-right: ${({ theme }) =>
    theme.media.isMobile ? "20" : theme.media.isTablet ? "40" : "80"}px;
  padding-top: 100px;
  padding-bottom: ${({ theme }) => (theme.media.isMobile ? "60" : "40")}px;
`;

const CardsScroller = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export default Team;
