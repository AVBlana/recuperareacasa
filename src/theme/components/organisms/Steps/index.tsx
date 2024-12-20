import styled, { useTheme } from "styled-components";
import { Text } from "../..";
import Box from "../../atoms/Box";
import StepCard from "../../molecules/StepCard";
import Flex from "../../atoms/Flex";

const steps = [
  {
    label: "Pasul 1",
    title: "Completarea Chestionarului de Evaluare",
    image: "/assets/pasul1.png",
    desc: (
      <>
        Începeți experiența noastră personalizată prin a completa chestionarul
        de evaluare detaliat.
        <br />
        <br />
        Aceste întrebări informatice și relevante ne vor ajuta să înțelegem mai
        bine nevoile și preocupările dumneavoastră specifice în ceea ce privește
        starea neruo-musculo-scheletală.
        <br />
        <br />
        Asigurându-ne că avem informațiile corecte, putem adapta tratamentul și
        intervențiile noastre pentru a vă oferi cea mai eficientă și
        personalizată îngrijire.
        <br />
        <br />
        Pasul acesta esențial, reprezintă prima etapă către o îmbunătățire
        durabilă a stării dumneavoastră de sănătate.
      </>
    ),
  },
  {
    label: "Pasul 2",
    title: "Perioada de Așteptare și Analiză a Informațiilor",
    image: "/assets/pasul2.jpg",
    desc: (
      <>
        După ce ați completat cu atenție chestionarul de evaluare, vă rugăm să
        ne permiteți o perioadă de așteptare.
        <br />
        <br />
        Echipa noastră de specialiști va analiza cu atenție informațiile
        furnizate, evaluând detaliile cu privire la starea
        neruo-musculo-scheletală și necesitățiile dumneavoastră individuale, o
        să fiți contactat în maxim 24h.
        <br />
        <br />
        Această fază de analiză este crucială pentru a dezvolta un plan
        personalizat de tratament. Vă vom contacta în curând pentru a discuta
        rezultate și pentru a stabili pașii următori în îngrijirea
        dumneavoastră.
        <br />
        <br />
        Vă mulțumim pentru răbdare și colaborare în procesul nostru de oferire a
        serviciilor de calitate.
      </>
    ),
  },
  {
    label: "Pasul 3",
    title: "Programarea Telefonică și Detalierea Costurilor",
    image: "/assets/pasul3.jpg",
    desc: (
      <>
        În această etapă, un membru al echipei noastre va lua legătura cu
        dumneavoastră pentru a stabili o programare.
        <br />
        <br />
        Vom discuta rezultatele analizei și vom oferi clarificări privind
        costurile și modalitățile de plată asociate tratamentului.
        <br />
        <br />
        În timpul acestei convorbiri, ne dorim să vă asigurăm de transparența
        procesului nostru, explicând fiecare aspect al planului de tratament
        propus și răspunzând la orice întrebări aveți.
        <br />
        <br />
        Obiectivul nostru este să vă oferim informații complete pentru a vă
        ajuta să luați decizii înțelepte și să vă simțiți confortabil cu pașii
        următori în îngrijirea dumneavoastră.
      </>
    ),
  },
  {
    label: "Pasul 4",
    title: "Efectuarea Tratamentului la Domiciliu",
    image: "/assets/pasul4.jpg",
    desc: (
      <>
        Odată ce programul de Kinetoterapie este stabilit, vă îndrumăm să vă
        pregătiți pentru a efectua tratamentul la domiciliu.
        <br />
        <br />
        Unul dintre specialiștii noștri vă va ghida cu atenție prin exercițiile
        și tehnici specifice, asigurându-se că sunteți confortabil și că
        înțelegeți corect fiecare aspect al programului dumneavoastră de
        recuperare.
        <br />
        <br />
        Respectăm orarul stabilit, adaptându-ne nevoilor dumneavoastră pentru a
        vă asigura că beneficiați la maxim de fiecare sesiune de kinetoterapie.
        <br />
        <br />
        Acest pas marchează începutul colaborării noastre continue pentru a
        îmbunătăți starea dumneavoastră de sănătate la domiciliu.
      </>
    ),
  },
];
const Steps = () => {
  const theme = useTheme();

  return (
    <Box style={{ alignItems: "center", justifyContent: "center" }}>
      <Box
        style={{
          gap: theme.media.isMobile ? 40 : 80,
          paddingBottom: theme.media.isMobile ? 40 : 100,
          paddingLeft: theme.media.isMobile
            ? 20
            : theme.media.isTablet
            ? 40
            : 80,
          paddingRight: theme.media.isMobile
            ? 20
            : theme.media.isTablet
            ? 40
            : 80,
          marginTop: theme.media.isMobile ? 0 : 80,
          maxWidth: 1440,
        }}
      >
        <Box
          style={{
            gap: 20,
            lineHeight: "140%",
            alignItems: theme.media.isMobile
              ? "center"
              : theme.media.isTablet
              ? "center"
              : "start",
          }}
        >
          <Text secondaryFont primary huge>
            Care este procesul ?
          </Text>
          {/* <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
            fuga, vero aliquam aspernatur iusto ullam consectetur veritatis
            assumenda impedit quasi.
          </Text> */}
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
  flex-direction: column;
  flex: 1;
  gap: 80px;
  align-items: center;
  justify-content: center;
`;

export default Steps;
