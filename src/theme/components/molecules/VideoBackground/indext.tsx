import { useMedia } from "@/theme/hooks/useMedia";
import React, { useEffect, useRef } from "react";
import YouTube from "react-youtube";
import styled, { useTheme } from "styled-components";

const VideoBackground: React.FC = () => {
  const theme = useTheme();

  const videoSRC = "RBbyRBlLkMQ";

  const opts = {
    width: "110%",
    height: "110%",

    playerVars: {
      autoplay: 1,
      loop: 1,
      mute: 1,
      controls: 0,
    },
  };

  const onReady = (event: any) => {
    event.target.playVideo();
  };

  const onEnd = (event: any) => {
    event.target.seekTo(0);
    event.target.playVideo();
  };

  return (
    <YouTube
      videoId={videoSRC}
      opts={opts}
      onReady={onReady}
      onEnd={onEnd}
      style={{ height: theme.media.isMobile ? "100vh" : "150vh" }}
    />
  );
};

export default VideoBackground;
