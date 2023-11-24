import { VideoContainer } from "./styles";

export function Video() {
  return (
    <VideoContainer>
      <iframe
        width="900"
        height="400"
        src="https://www.youtube.com/embed/VtsISD35EyU?si=2GvyGvQcaaKL4h-C"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </VideoContainer>
  );
}
