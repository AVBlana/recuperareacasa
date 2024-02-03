import styled from "styled-components";
import Box from "../../atoms/Box";
import { Text } from "../..";
import Flex from "../../atoms/Flex";
import Image from "../../atoms/Image";
import { ArrowLeftIcon } from "../../molecules/Icons/ArrowLeftIcon";
import { ArrowRightIcon } from "../../molecules/Icons/ArrowRightIcon";
import { theme } from "@/theme/constants";

const Review = () => {
  return (
    <>
      <StyledReviewBox>
        <Text>Star ratting system</Text>
        <Text big>
          Enumerating objects: 63, done. Counting objects: 100% (63/63), done.
          Delta compression using up to 12 threads Compressing objects: 100%
          (29/29), done. Writing objects: 100% (36/36), 375.68 KiB | 4.58 MiB/s,
          done. Total 36 (delta 10), reused 0 (delta 0), pack-reused 0 remote:
          Resolving deltas: 100% (10/10), completed with 10 local objects. To
          github.com:AVBlana/recuperareacasa.git
        </Text>
        <Flex>
          <Box>
            <Image width={80} height={80} src="/assets/review-bg.jpg" alt="" />
          </Box>
          <Box>
            <Text></Text>
            <Text></Text>
          </Box>
          <Flex>
            <Box style={{ padding: 20 }}>
              <ArrowLeftIcon size={40} fill={theme.color.white} />
            </Box>
            <Box style={{ padding: 20 }}>
              <ArrowRightIcon size={40} fill={theme.color.white} />
            </Box>
          </Flex>
        </Flex>
      </StyledReviewBox>
    </>
  );
};

const StyledReviewBox = styled.div`
  background: linear-gradient(to right, #2a5550, rgba(255, 69, 0, 0));
  background-image: url(./assets/review-bg.jpg);
  background-size: cover;
  background-position: center;
  height: 550px;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 100px;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

export default Review;
