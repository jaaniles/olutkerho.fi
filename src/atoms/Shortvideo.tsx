import styled from "@emotion/styled";
import React, { forwardRef } from "react";
import ReactPlayer from "react-player";

const VideoContainer = styled.div({
  position: "relative",

  width: "100%",
  height: "100%",
  maxHeight: "50vh",

  overflow: "hidden",
  borderRadius: 32,
  boxShadow: "rgba(0, 0, 0, 0.25) 0px 20px 50px",
});

const VideoWrapper = forwardRef<HTMLDivElement>(({ children }, ref) => (
  <VideoContainer ref={ref}>{children}</VideoContainer>
));

VideoWrapper.displayName = "VideoWrapper";

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
