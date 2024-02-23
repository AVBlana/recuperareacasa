// import { useState } from "react";
// import {
//   Checkbox,
//   CloseIcon,
//   TextArea,
//   SvgIcon,
//   Text,
//   InputBox,
//   RadioButton,
// } from "../..";
// import Box from "../../atoms/Box";
// import Flex from "../../atoms/Flex";
// import { theme } from "@/theme/constants";
// import Input from "../../atoms/Input";
// import styled from "styled-components";
// import Modal from "../../molecules/Modal";
// import Button from "../../atoms/Button";

// const Form = ({ onClose }: { onClose: () => void }) => {
//   const [selectedCheckboxes, setSelectedCheckboxes] = useState<string[]>([]);
//   const [userFeedback, setUserFeedback] = useState("");
//   const [userInfo, setUserInfo] = useState("");
//   const [selectedOption, setSelectedOption] = useState("");
//   const [isModalVisible, setIsModalVisible] = useState(false);

//   const handleOptionChange = (value: any) => {
//     setSelectedOption(value);
//   };

//   const handleUserInfoChange = (value: string) => {
//     setUserInfo(value);
//   };

//   const handleFeedbackChange = (value: string) => {
//     setUserFeedback(value);
//   };

//   const handleCloseModal = () => {
//     onClose();
//   };

//   return (
//     <>
//       <Box>
//         <Box
//           style={{
//             background: theme.color.primary,
//             borderRadius: 20,
//             padding: 40,
//           }}
//         >
//           <Flex
//             style={{
//               justifyContent: "space-between",
//               paddingBottom: 12,
//               borderBottomStyle: "solid",
//               borderBottomWidth: 1,
//               borderColor: theme.color.secondary,
//             }}
//           >
//             <Text bigger white secondaryFont bold>
//               Chestionar de Evaluare și Programare
//             </Text>
//             <CloseIcon
//               size={20}
//               fill={theme.color.white}
//               style={{ cursor: "pointer" }}
//               onClick={handleCloseModal}
//             />
//           </Flex>
//           <Box style={{ paddingTop: 20, paddingBottom: 20 }}>
//             <Text bigger secondaryFont white lineHeight={"140%"}>
//               Completează chestionarul de evaluare pentru a afla mai multe
//               detalii despre problema dumneavoastră și pentru a afla
//               disponibilitatea orei de tratament dorită de tine.
//             </Text>
//           </Box>
//           <Flex style={{ gap: 40 }}>
//             <Box style={{ flex: 1, justifyContent: "space-between" }}>
//               <StyledFormBox>
//                 <Box style={{ gap: 20, fontSize: theme.text.medium }}>
//                   <Text big white secondaryFont semiBold>
//                     Scopul tratamentului:
//                   </Text>
//                   <Box style={{ gap: 10 }}>
//                     <Checkbox
//                       label="Întreținere"
//                       selectedCheckboxes={selectedCheckboxes}
//                       setSelectedCheckboxes={setSelectedCheckboxes}
//                     />
//                     <Checkbox
//                       label="Stare de bine"
//                       selectedCheckboxes={selectedCheckboxes}
//                       setSelectedCheckboxes={setSelectedCheckboxes}
//                     />
//                     <Checkbox
//                       label="Tratament terapeutic"
//                       selectedCheckboxes={selectedCheckboxes}
//                       setSelectedCheckboxes={setSelectedCheckboxes}
//                     />
//                   </Box>
//                 </Box>
//               </StyledFormBox>

//               <StyledFormBox>
//                 <Box style={{ gap: 20 }}>
//                   <Text big white secondaryFont bold>
//                     Natura problemei este?
//                   </Text>
//                   <Flex style={{ gap: 20 }}>
//                     <Box style={{ gap: 10 }}>
//                       <Checkbox
//                         label="Durerea"
//                         selectedCheckboxes={selectedCheckboxes}
//                         setSelectedCheckboxes={setSelectedCheckboxes}
//                       />
//                       <Checkbox
//                         label="Amorțeală"
//                         selectedCheckboxes={selectedCheckboxes}
//                         setSelectedCheckboxes={setSelectedCheckboxes}
//                       />
//                       <Checkbox
//                         label="Amețeală"
//                         selectedCheckboxes={selectedCheckboxes}
//                         setSelectedCheckboxes={setSelectedCheckboxes}
//                       />
//                       <Checkbox
//                         label="Trigger point"
//                         selectedCheckboxes={selectedCheckboxes}
//                         setSelectedCheckboxes={setSelectedCheckboxes}
//                       />
//                     </Box>
//                     <Box style={{ gap: 10, flex: 1 }}>
//                       <Checkbox
//                         label="Tensiunea musculară"
//                         selectedCheckboxes={selectedCheckboxes}
//                         setSelectedCheckboxes={setSelectedCheckboxes}
//                       />
//                       <Checkbox
//                         label="Spate blocat"
//                         selectedCheckboxes={selectedCheckboxes}
//                         setSelectedCheckboxes={setSelectedCheckboxes}
//                       />
//                       <Checkbox
//                         label="Migrene"
//                         selectedCheckboxes={selectedCheckboxes}
//                         setSelectedCheckboxes={setSelectedCheckboxes}
//                       />
//                       <Checkbox
//                         label="Altele"
//                         selectedCheckboxes={selectedCheckboxes}
//                         setSelectedCheckboxes={setSelectedCheckboxes}
//                       />
//                     </Box>
//                   </Flex>

//                   <Input
//                     type="text"
//                     placeholder="Altele"
//                     value={userInfo}
//                     name="Others"
//                     id="1"
//                   />
//                 </Box>
//               </StyledFormBox>
//             </Box>
//             <Box style={{ flex: 1, justifyContent: "space-between" }}>
//               <StyledFormBox style={{ gap: 20 }}>
//                 <Text big white secondaryFont bold>
//                   De cât timp ai problema ?
//                 </Text>
//                 <TextArea
//                   id="Durata"
//                   placeholder="De cât timp ai problema ? ..."
//                   value={userFeedback}
//                   onChange={handleFeedbackChange}
//                 />
//               </StyledFormBox>
//               <StyledFormBox>
//                 <Box style={{ gap: 20 }}>
//                   <Text big white secondaryFont bold>
//                     Unde este localizată ?
//                   </Text>
//                   <Flex style={{ gap: 20 }}>
//                     <Box style={{ gap: 10 }}>
//                       <Checkbox
//                         label="Cap"
//                         selectedCheckboxes={selectedCheckboxes}
//                         setSelectedCheckboxes={setSelectedCheckboxes}
//                       />
//                       <Checkbox
//                         label="Zona cervicală"
//                         selectedCheckboxes={selectedCheckboxes}
//                         setSelectedCheckboxes={setSelectedCheckboxes}
//                       />
//                       <Checkbox
//                         label="Zona toracală"
//                         selectedCheckboxes={selectedCheckboxes}
//                         setSelectedCheckboxes={setSelectedCheckboxes}
//                       />
//                       <Checkbox
//                         label="Zona lombară"
//                         selectedCheckboxes={selectedCheckboxes}
//                         setSelectedCheckboxes={setSelectedCheckboxes}
//                       />
//                     </Box>
//                     <Box style={{ gap: 10, flex: 1 }}>
//                       <Checkbox
//                         label="Zona membrelor superioare"
//                         selectedCheckboxes={selectedCheckboxes}
//                         setSelectedCheckboxes={setSelectedCheckboxes}
//                       />
//                       <Checkbox
//                         label="Zona membrelor inferioare"
//                         selectedCheckboxes={selectedCheckboxes}
//                         setSelectedCheckboxes={setSelectedCheckboxes}
//                       />
//                       <Checkbox
//                         label="Zona bazinului"
//                         selectedCheckboxes={selectedCheckboxes}
//                         setSelectedCheckboxes={setSelectedCheckboxes}
//                       />
//                       <Checkbox
//                         label="Altele"
//                         selectedCheckboxes={selectedCheckboxes}
//                         setSelectedCheckboxes={setSelectedCheckboxes}
//                       />
//                     </Box>
//                   </Flex>

//                   <Input
//                     type="text"
//                     placeholder="Altele"
//                     value={userInfo}
//                     name="Others"
//                     id="1"
//                   />
//                 </Box>
//               </StyledFormBox>
//             </Box>
//             <Box style={{ flex: 1, justifyContent: "space-between" }}>
//               <StyledFormBox>
//                 <Text big white secondaryFont bold>
//                   Poți descriere situația amănunțit ?
//                 </Text>
//                 <TextArea
//                   id="Despre"
//                   placeholder="Descrie situația ta aici..."
//                   value={userFeedback}
//                   onChange={handleFeedbackChange}
//                 />
//               </StyledFormBox>
//               <StyledFormBox>
//                 <Text big white secondaryFont bold>
//                   În ce interval de ore sunteți disponibil/ă ?
//                 </Text>

//                 <Flex style={{ gap: 30 }}>
//                   <RadioButton
//                     label="8 - 12"
//                     value="option1"
//                     isSelected={selectedOption === "option1"}
//                     onChange={handleOptionChange}
//                     groupName="options"
//                   />
//                   <RadioButton
//                     label="12 - 17"
//                     value="option2"
//                     isSelected={selectedOption === "option2"}
//                     onChange={handleOptionChange}
//                     groupName="options"
//                   />
//                   <RadioButton
//                     label="17 - 20"
//                     value="option3"
//                     isSelected={selectedOption === "option3"}
//                     onChange={handleOptionChange}
//                     groupName="options"
//                   />
//                 </Flex>
//               </StyledFormBox>
//               <StyledFormBox>
//                 <Text big white secondaryFont bold>
//                   Aveți o zi preferată ?
//                 </Text>
//                 <Box style={{ gap: 10 }}>
//                   <Checkbox
//                     label="Luni"
//                     selectedCheckboxes={selectedCheckboxes}
//                     setSelectedCheckboxes={setSelectedCheckboxes}
//                   />
//                   <Checkbox
//                     label="Marți"
//                     selectedCheckboxes={selectedCheckboxes}
//                     setSelectedCheckboxes={setSelectedCheckboxes}
//                   />
//                   <Checkbox
//                     label="Miercuri"
//                     selectedCheckboxes={selectedCheckboxes}
//                     setSelectedCheckboxes={setSelectedCheckboxes}
//                   />
//                   <Checkbox
//                     label="Joi"
//                     selectedCheckboxes={selectedCheckboxes}
//                     setSelectedCheckboxes={setSelectedCheckboxes}
//                   />
//                   <Checkbox
//                     label="Vineri"
//                     selectedCheckboxes={selectedCheckboxes}
//                     setSelectedCheckboxes={setSelectedCheckboxes}
//                   />
//                 </Box>
//               </StyledFormBox>
//             </Box>
//           </Flex>
//           <StyledFormBox>
//             <Text big white secondaryFont bold>
//               Să știm cui ne adresăm
//             </Text>
//             <Flex style={{ gap: 10 }}>
//               <Input
//                 type="text"
//                 placeholder="Prenume"
//                 value={userInfo}
//                 name="Others"
//                 id="1"
//               />
//               <Input
//                 type="text"
//                 placeholder="Telefon"
//                 value={userInfo}
//                 name="Others"
//                 id="1"
//               />
//               <Input
//                 type="text"
//                 placeholder="Email"
//                 value={userInfo}
//                 name="Others"
//                 id="1"
//               />
//               <Input
//                 type="text"
//                 placeholder="Strada"
//                 value={userInfo}
//                 name="Others"
//                 id="1"
//                 style={{
//                   padding: 10,
//                   borderRadius: 10,
//                   background: theme.color.white,
//                   width: "100%",
//                 }}
//               />
//               <Input
//                 type="text"
//                 placeholder="Nr"
//                 value={userInfo}
//                 name="Others"
//                 id="1"
//                 style={{
//                   padding: 10,
//                   borderRadius: 10,
//                   background: theme.color.white,
//                   width: 50,
//                 }}
//               />
//               <Input
//                 type="text"
//                 placeholder="Bloc"
//                 value={userInfo}
//                 name="Others"
//                 id="1"
//                 style={{
//                   padding: 10,
//                   borderRadius: 10,
//                   background: theme.color.white,
//                   width: 50,
//                 }}
//               />
//               <Input
//                 type="text"
//                 placeholder="Sc"
//                 value={userInfo}
//                 name="Others"
//                 id="1"
//                 style={{
//                   padding: 10,
//                   borderRadius: 10,
//                   background: theme.color.white,
//                   width: 50,
//                 }}
//               />
//             </Flex>
//           </StyledFormBox>
//           <StyledFormBox
//             style={{
//               borderTopWidth: 1,
//               borderTopStyle: "solid",
//               borderTopColor: theme.color.secondary,
//               paddingBottom: 0,
//             }}
//           >
//             <Text big white secondaryFont bold>
//               Politica de confidențialitate
//             </Text>

//             <Flex
//               style={{ justifyContent: "space-between", alignItems: "center" }}
//             >
//               <Flex style={{ alignItems: "center" }}>
//                 <Box style={{ gap: 10, minWidth: 140 }}>
//                   <Checkbox
//                     label="Sunt de acord"
//                     selectedCheckboxes={selectedCheckboxes}
//                     onChange={handleCheckboxChange}

//                   />
//                   <Checkbox
//                     label="Abonare"
//                     selectedCheckboxes={selectedCheckboxes}
//                     onChange={handleCheckboxChange}
//                   />
//                 </Box>
//                 <Box style={{ gap: 10 }}>
//                   <Text white small>
//                     Făcând clic pe „Sunt de acord”, confirmați că ați citit,
//                     înțeles și sunteți de acord să respectați acești termeni și
//                     condiții.
//                   </Text>
//                   <Text white small>
//                     Făcând clic pe „Abonare”, sunteți de acord să primiți
//                     buletine informative de la noi cu posibilitatea de
//                     dezabonare în orice moment.
//                   </Text>
//                 </Box>
//               </Flex>

//               <Box>
//                 <Button
//                   label="Trimite"
//                   onClick={() => ""}
//                   style={{
//                     color: theme.color.white,
//                     background: theme.color.secondary,
//                     paddingTop: theme.spacings.medium,
//                     paddingBottom: theme.spacings.medium,
//                     paddingLeft: theme.spacings.bigger,
//                     paddingRight: theme.spacings.bigger,
//                     borderRadius: 20,
//                     cursor: "pointer",
//                     width: "fit-content",
//                   }}
//                 ></Button>
//               </Box>
//             </Flex>
//           </StyledFormBox>
//         </Box>
//       </Box>
//     </>
//   );
// };

// const StyledFormBox = styled.div`
//   display: flex;
//   flex-direction: column;
//   padding-bottom: 20px;
//   padding-top: 20px;
//   // border-bottom-style: solid;
//   // border-bottom-width: 1px;
//   // border-color: ${theme.color.secondary};
//   gap: 20px;
// `;

// export default Form;
