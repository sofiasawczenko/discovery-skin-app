import { VideoContainer } from "./styles";

export function Video() {
  return (
    <VideoContainer>
      <iframe
        width="900"
        height="400"
        src="https://www.youtube.com/embed/l5Wnys2I1io?si=N0vnwPgKzr0St1N0"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </VideoContainer>
  );
}
