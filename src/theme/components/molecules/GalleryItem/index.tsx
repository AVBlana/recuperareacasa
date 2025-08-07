import React, { useState } from "react";
import styled, { css, useTheme } from "styled-components";
import Box from "../../atoms/Box";
import { Text } from "../..";
import Modal from "../Modal";
import { theme } from "@/theme/constants";
import YouTube from "react-youtube";
import Image from "../../atoms/Image";

const GalleryItem = ({
  itemsWithSelectedLabelCount,
  item,
}: {
  item: {
    type: string;
    url: string;
    title: string;
    label: string;
    posterUrl?: string;
  };
  itemsWithSelectedLabelCount: number;
}) => {
  const theme = useTheme();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const calculateWidth = () => {
    const itemCount = itemsWithSelectedLabelCount;
    const baseWidth = itemCount ? 100 / 4 : 100 / itemCount;
    return `calc(${baseWidth}%)`;
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleModalToggle = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <StyledGalleryItem
      style={{
        alignItems: "center",
        justifyContent: "center",
        height: theme.media.isMobile ? `calc(100vw / 2)` : `calc(100vw / 4)`,
        width: theme.media.isMobile ? `calc(100vw / 2)` : calculateWidth(),
      }}
      onClick={handleModalToggle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isHovered && (
        <StyledOverlay $visible>
          <Box
            style={{
              height: 100,
              overflow: "hidden",
              justifyContent: "flex-end",
              gap: 10,
            }}
          >
            <Text
              bold
              style={{
                color: theme.color.secondary,
                fontSize: theme.media.isMobile
                  ? theme.text.small
                  : theme.text.medium,
              }}
            >
              {item.label}
            </Text>
            <Text
              white
              semiBold
              style={{
                height: 70,
                fontSize: theme.media.isMobile
                  ? theme.text.small
                  : theme.text.big,
              }}
            >
              {item.title}
            </Text>
          </Box>
        </StyledOverlay>
      )}

      {/* Render posterUrl if modal is closed, otherwise render video */}
      {!isModalVisible ? (
        item.type === "image" ? (
          <Image
            width={600}
            height={600}
            alt=""
            src={item.url || item.posterUrl || ""}
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
            }}
          />
        ) : (
          <Image
            width={600}
            height={600}
            alt=""
            src={item.posterUrl || ""}
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
            }}
          />
        )
      ) : null}

      <Modal onClose={handleModalToggle} isVisible={isModalVisible}>
        <Box
          style={{
            // width: 600,
            overflowX: "hidden",
            background: theme.color.white,
          }}
        >
          {isModalVisible ? (
            item.type === "video" ? (
              <YouTube
                videoId={item.url}
                opts={{
                  width: theme.media.isMobile ? "320" : "1080",
                  height: theme.media.isMobile ? "700" : "720",
                  playerVars: {
                    controls: 1,
                  },
                }}
              />
            ) : (
              <Image
                width={600}
                height={600}
                alt=""
                src={item.url || item.posterUrl || ""}
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                }}
              />
            )
          ) : (
            // Show a loading state, placeholder, or handle differently when the modal is not open
            <Text primary big>
              Loading...
            </Text>
          )}

          <Box
            style={{
              flex: 1,
              padding: theme.media.isMobile ? 10 : 20,
              gap: 20,
            }}
          >
            <Text
              bold
              style={{
                color: theme.color.secondary,
                fontSize: theme.media.isMobile
                  ? theme.text.small
                  : theme.text.medium,
              }}
            >
              {item.label}
            </Text>
            <Text
              semiBold
              style={{
                height: 70,
                fontSize: theme.media.isMobile
                  ? theme.text.small
                  : theme.text.big,
              }}
            >
              {item.title}
            </Text>
          </Box>
        </Box>
      </Modal>
    </StyledGalleryItem>
  );
};

const overlayVisibleStyle = css`
  opacity: 1;
  background: rgba(0, 0, 0, 0.5);
`;

const StyledOverlay = styled.div<{ $visible: boolean }>`
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: ${({ theme }) =>
    theme.media.isMobile ? theme.spacings.smallest : theme.spacings.big}px;
  transition: opacity 0.3s, background 0.3s;

  ${({ $visible }) => $visible && overlayVisibleStyle}
`;

const StyledGalleryItem = styled.div`
  cursor: pointer;
  position: relative;
  &:hover ${StyledOverlay} {
    ${overlayVisibleStyle}
  }
`;

export default GalleryItem;
