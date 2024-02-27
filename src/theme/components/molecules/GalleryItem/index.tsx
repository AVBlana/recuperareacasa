import styled from "styled-components";
import Box from "../../atoms/Box";
import { Text } from "../..";
import { useState, useEffect } from "react";
import Modal from "../Modal";
import YouTube from "react-youtube";
import { theme } from "@/theme/constants";

const GalleryItem = ({
  itemsWithSelectedLabelCount,
  item,
}: {
  item: { type: string; url: string; title: string; label: string };
  itemsWithSelectedLabelCount: number;
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const calculateWidth = () => {
    const itemCount = itemsWithSelectedLabelCount;
    const baseWidth = itemCount ? 100 / 4 : 100 / itemCount;
    return `calc(${baseWidth}%`;
  };

  const youtubeOpts = {
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <>
      <StyledGalleryItem
        style={{
          width: calculateWidth(),
        }}
        onClick={() => setIsModalVisible(true)}
      >
        <StyledOverlay>
          <Box
            style={{
              height: 100,
              overflow: "hidden",
              justifyContent: "flex-end",
              gap: 10,
            }}
          >
            <Text medium bold style={{ color: theme.color.secondary }}>
              {item.label}
            </Text>
            <Text
              white
              big
              semiBold
              style={{ height: 70 }}
              textOverflow="ellipsis"
            >
              {item.title}
            </Text>
          </Box>
        </StyledOverlay>
        <Modal
          onClose={() => setIsModalVisible(false)}
          isVisible={isModalVisible}
        >
          <Box
            style={{
              width: 600,
              overflowX: "hidden",
              background: theme.color.white,
            }}
          >
            {item.type === "image" ? (
              <img
                width={600}
                height={600}
                alt=""
                src={item.url}
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                }}
              />
            ) : (
              <YouTube videoId={item.url} opts={youtubeOpts} />
            )}

            <Box style={{ flex: 1, padding: 20 }}>
              <Text medium bold style={{ color: theme.color.secondary }}>
                {item.label}
              </Text>
              <Text big semiBold style={{ height: 70 }} textOverflow="ellipsis">
                {item.title}
              </Text>
            </Box>
          </Box>
        </Modal>
        <Box
          style={{
            alignItems: "center",
            justifyContent: "center",
            height: "calc(100vw / 4)",
          }}
        >
          {item.type === "image" ? (
            <img
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
              width={300}
              height={300}
              alt=""
              src={item.url}
            />
          ) : (
            <video controls width="100%" height="100%">
              <source src={item.url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </Box>
      </StyledGalleryItem>
    </>
  );
};

const StyledOverlay = styled.div`
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: ${({ theme }) => theme.spacings.big}px;
`;

const StyledGalleryItem = styled.div`
  cursor: pointer;
  position: relative;
  &:hover ${StyledOverlay} {
    opacity: 1;
  }
`;

export default GalleryItem;
