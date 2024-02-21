import React, { useState, useEffect } from "react";

const VideoBackground: React.FC<{ src: string }> = ({ src }) => {
  return (
    <video
      id="background-video"
      src={src}
      autoPlay
      loop
      muted
      playsInline
      style={{ width: "100%", height: "auto" }}
    />
  );
};

export default VideoBackground;
