import { Text } from "../..";
import Box from "../../atoms/Box";
import Flex from "../../atoms/Flex";
import TeamCard from "../../molecules/TeamCard";

const Team = () => {
  return (
    <>
      <Flex>
        <Box>
          <Box>
            <Text></Text>
            <Text></Text>
            <Text></Text>
          </Box>
          <Flex>
            <Box></Box>
            <Box>
              <Text></Text>
              <Text></Text>
            </Box>
          </Flex>
        </Box>
        <Box>
          <TeamCard />
          <Flex></Flex>
        </Box>
      </Flex>
    </>
  );
};

export default Team;
