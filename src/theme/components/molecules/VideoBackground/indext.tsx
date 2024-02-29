import React from "react";
import styled from "styled-components";

const VideoBackground: React.FC = () => {
  const videoSRC = "/assets/RAbgV1.mov";

  return (
    <video
      id="background-video"
      src={videoSRC}
      autoPlay
      loop
      muted
      playsInline
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />
  );
};

export default VideoBackground;
