import styled from "@emotion/styled";
import React from "react";
import Confetti from "react-confetti";

import { Column } from "~/atoms/Column";

const LOGO_WIDTH = 150;
const LOGO_HEIGHT = 200;

const WAVE =
  // eslint-disable-next-line max-len
  "polygon(100% 0%, 0% 0% , 0% 65.00%, 1% 64.96%, 2% 64.85%, 3% 64.66%, 4% 64.39%, 5% 64.05%, 6% 63.64%, 7% 63.16%, 8% 62.62%, 9% 62.01%, 10% 61.33%, 11% 60.60%, 12% 59.82%, 13% 58.98%, 14% 58.10%, 15% 57.18%, 16% 56.22%, 17% 55.24%, 18% 54.22%, 19% 53.18%, 20% 52.13%, 21% 51.06%, 22% 49.99%, 23% 48.92%, 24% 47.86%, 25% 46.80%, 26% 45.76%, 27% 44.75%, 28% 43.76%, 29% 42.80%, 30% 41.88%, 31% 41.00%, 32% 40.17%, 33% 39.38%, 34% 38.65%, 35% 37.98%, 36% 37.37%, 37% 36.83%, 38% 36.35%, 39% 35.94%, 40% 35.60%, 41% 35.34%, 42% 35.15%, 43% 35.04%, 44% 35.00%, 45% 35.04%, 46% 35.16%, 47% 35.35%, 48% 35.61%, 49% 35.95%, 50% 36.36%, 51% 36.85%, 52% 37.39%, 53% 38.01%, 54% 38.68%, 55% 39.41%, 56% 40.20%, 57% 41.03%, 58% 41.91%, 59% 42.83%, 60% 43.79%, 61% 44.78%, 62% 45.80%, 63% 46.84%, 64% 47.89%, 65% 48.96%, 66% 50.03%, 67% 51.10%, 68% 52.16%, 69% 53.22%, 70% 54.25%, 71% 55.27%, 72% 56.26%, 73% 57.22%, 74% 58.14%, 75% 59.02%, 76% 59.85%, 77% 60.63%, 78% 61.36%, 79% 62.03%, 80% 62.64%, 81% 63.18%, 82% 63.66%, 83% 64.07%, 84% 64.40%, 85% 64.66%, 86% 64.85%, 87% 64.96%, 88% 65.00%, 89% 64.96%, 90% 64.84%, 91% 64.65%, 92% 64.38%, 93% 64.04%, 94% 63.63%, 95% 63.15%, 96% 62.60%, 97% 61.98%, 98% 61.31%, 99% 60.58%, 100% 59.79%);";

const Froth = styled.div({
  background: "#FFFFFF",
  height: LOGO_HEIGHT / 10,
  width: "100%",

  zIndex: 1000,
  borderBottomLeftRadius: 22,

  clipPath: WAVE,
  transform: "scaleY(-1) translateY(100%)",
});

const Bottom = styled.div({
  background: "#FCCF7F",
  boxShadow: "inset -75px 0px 0px 0px #EAB351",
  height: LOGO_HEIGHT / 10,
  width: "100%",

  zIndex: 1000,
});

const BlurLayer = styled.div({
  opacity: 0.5,
  filter: "blur(15px)",
  zIndex: 10,

  height: "100%",
  width: "100%",
  position: "absolute",
  top: 0,
  left: 0,
});

export const AnimatedLogo = () => (
  <div css={{ position: "relative" }}>
    <Column
      css={{
        width: LOGO_WIDTH,
        height: LOGO_HEIGHT,
        background: "#E59500",
        boxShadow: "inset -75px 0px 0px 0px #CF8600",
        justifyContent: "space-between",
      }}
    >
      <Froth />
      <Bottom />
    </Column>
    <BlurLayer />
    <Confetti
      width={LOGO_WIDTH}
      height={LOGO_HEIGHT}
      colors={["#D38A00", "#FDFFB0"]}
      gravity={-0.4}
      friction={0.5}
      initialVelocityY={100}
      confettiSource={{ x: 0, y: LOGO_HEIGHT, w: LOGO_WIDTH, h: 0 }}
      opacity={0.18}
      drawShape={(ctx) => {
        ctx.beginPath();
        for (let i = 0; i < 22; i++) {
          const angle = 0.25 * i;
          const x = (0.2 + 1.5 * angle) * Math.cos(angle);
          const y = (0.2 + 1.5 * angle) * Math.sin(angle);
          ctx.lineTo(x, y);
        }
        ctx.stroke();
        ctx.closePath();
      }}
    />
  </div>
);
