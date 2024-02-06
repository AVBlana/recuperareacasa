import { Text } from "../..";
import Box from "../../atoms/Box";
import Image from "../../atoms/Image";

const TeamCard = () => {
  return (
    <>
      <Box>
        <Image src={"/assets/img1.jpg"} alt={""} width={450} height={600} />
        <Box>
          <Text>Alexandru</Text>
          <Text>Fizioterapeu</Text>
        </Box>
      </Box>
    </>
  );
};

export default TeamCard;
