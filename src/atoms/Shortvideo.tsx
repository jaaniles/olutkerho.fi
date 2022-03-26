import styled from "@emotion/styled";
import React from "react";
import ReactPlayer from "react-player";

const VideoContainer = styled.div({
  position: "relative",

  width: "100%",
  height: "100%",
  maxHeight: "50vh",

  overflow: "hidden",
  borderRadius: 32,
});

export const Shortvideo = ({ url }: { url: string }) => (
  <VideoContainer>
    <ReactPlayer
      width="100%"
      height="100%"
      url={url}
      loop={true}
      playing={true}
      muted
    />
  </VideoContainer>
);
