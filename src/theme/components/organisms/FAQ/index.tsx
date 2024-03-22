import styled from "styled-components";
import Accordion from "../../molecules/Accordion";
import Box from "../../atoms/Box";
import { Text } from "../..";

const ACCORDION_DATA = [
  {
    title:
      "1. Care sunt avantajele recuperării medicale la domiciliu comparativ cu tratamentul într-o clinică sau spital?",
    content: `Avantajele recuperării medicale la domiciliu includ confortul și conveniența pentru pacienți, economisirea timpului întrucât nu este necesar să călătoriți în traficul aglomerat și reducerea costurilor asociate cu deplasarea la o clinică sau spital, precum și riscul scăzut de infecții.`,
  },
  {
    title:
      "2. Clienții fideli beneficiază de reduceri pentru serviciile noastre de recuperare medicală la domiciliu?",
    content: `Da, clienții fideli beneficiază de reduceri. După efectuarea a 10 ședințe de orice natură pe parcursul a 3 luni, aceștia primesc un avantaj special și un discount de 10%. Acest avantaj poate fi păstrat sau prelungit prin completarea altor 10 ședințe în următoarele 5 luni.\n\nEste important de menționat că acest avantaj se pierde dacă pe parcursul celor 5 luni nu se realizează cele 10 ședințe. De asemenea, avantajele sunt valabile și prin intermediul abonamentelor noastre.`,
  },
  {
    title:
      "3. Ce tipuri de probleme medicale acoperă serviciile de recuperare medicală oferite de site-ul dumneavoastră?",
    content: `Serviciile noastre de recuperare medicală acoperă o gamă largă de probleme, cum ar fi cele neurologice, post-AVC, spasticitate și altele.\n\nDe asemenea, oferim terapie manuală, masaj și recuperare post-traumatică, inclusiv post-operator în cazul protezelor totale sau intervențiilor pe ligamente. Problemele precum hernii de disc, amețeală, amorțeală pe membre sau picior și problemele de sciatică pot fi, de asemenea, abordate prin terapie manuală și alte tehnici specializate.`,
  },
  {
    title:
      "4. Ce diferă serviciile de kinetoterapie și terapie manuală oferite de site-ul dumneavoastră de cele oferite într-o clinică tradițională?",
    content: `Serviciile noastre oferă un echilibru între kinetoterapie și terapie manuală, adaptate la nevoile individuale ale pacientului și livrate la domiciliu.\n\n Gândirea noastră se bazează pe evaluare detaliată și tratarea cauzei problemei, încurajând în același timp pacientul să învețe să aibă grijă de el acasă. Ne focusăm pe obținerea rezultatelor dorite, nu doar pe administrarea terapiilor.`,
  },
  {
    title:
      "5. Este posibil să obțin factura pentru serviciile de recuperare medicală la domiciliu în scopul decontării, inclusiv decontul oferit de asigurările private?",
    content: `Da, puteți obține o factură pentru serviciile de recuperare medicală la domiciliu, iar aceasta poate fi utilizată pentru decontare, inclusiv pentru asigurările private.\n\n Totuși, pentru acest lucru este necesar să aveți o evaluare inițială efectuată de un medic specialist, care va pune un diagnostic și va recomanda servicii de recuperare.\n\nFișa de tratament va fi apoi completată de noi, în funcție de recomandările medicului, și vă va fi furnizată pentru decontare.`,
  },
  {
    title:
      "6. Se poate plăti în numerar sau cu cardul pentru serviciile de recuperare medicală la domiciliu?",
    content: `Da, puteți plăti atât prin intermediul POS-ului, cât și în numerar pentru serviciile de recuperare medicală la domiciliu.`,
  },
  {
    title:
      "7. Care sunt opțiunile disponibile pentru programarea serviciilor de recuperare medicală la domiciliu?",
    content: `Pentru a programa serviciile de recuperare medicală la domiciliu, puteți completa un formular pe site-ul nostru, includând detalii despre problema dvs. de sănătate.\n\nApoi, echipa noastră vă va contacta pentru a stabili programarea. De asemenea, puteți suna sau trimite un mesaj pe WhatsApp pentru a programa direct.`,
  },
  {
    title: "8. Cum se efectuează plata tranșelor pentru abonamentele noastre?",
    content: `Plata tranșelor pentru abonamentele noastre se efectuează în două etape: la prima ședință și la jumătatea perioadei de abonament.`,
  },
  {
    title:
      "9. Este posibil să primim materiale video pentru a exersa individual acasă în cadrul programului de recuperare medicală?",
    content: `Da, avem un proiect în curs de desfășurare care își propune să producă materiale video pentru diferite afecțiuni, astfel încât pacienții să beneficieze de suport suplimentar în timpul recuperării la domiciliu.`,
  },
  {
    title:
      "10. Este necesar un pat de masaj sau accesorii pentru a primi tratamentul de recuperare medicală la domiciliu?",
    content: `Nu este necesar să dețineți un pat de masaj sau alte accesorii. Echipa noastră de terapeuți va veni echipată complet cu toate echipamentele și accesorii necesare pentru a livra tratamentul de recuperare medicală la domiciliu.`,
  },
];

const FAQ = () => {
  return (
    <Box style={{ alignItems: "center" }}>
      <StyledFAQBox>
        <Accordion data={ACCORDION_DATA} />
      </StyledFAQBox>
    </Box>
  );
};

const StyledFAQBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) =>
    theme.media.isMobile ? "40px 20px" : "100px 80px"};
  max-width: 1440px;
`;

export default FAQ;
