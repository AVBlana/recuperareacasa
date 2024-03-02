import React, { useEffect, useRef } from "react";
import YouTube from "react-youtube";
import styled from "styled-components";

const VideoBackground: React.FC = () => {
  const videoSRC = "RBbyRBlLkMQ"; // Only include the video ID

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
    // access to player in all event handlers via event.target
    event.target.playVideo();
  };

  return (
    <YouTube
      videoId={videoSRC}
      opts={opts}
      onReady={onReady}
      style={{ height: "150vh" }}
    />
  );
};

export default VideoBackground;
