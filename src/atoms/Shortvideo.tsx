import ReactPlayer from "react-player";

export const Shortvideo = ({ url }: { url: string }) => (
  <div>
    <ReactPlayer
      width={"100%"}
      height={"65vh"}
      url={url}
      loop={true}
      playing={true}
      muted
    />
  </div>
);
