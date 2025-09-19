import styled from "@emotion/styled";
import { motion } from "framer-motion";

import { mq, scale } from "~/design";

type Props = {
  containerRow?: boolean;
  twoCol?: boolean;
  threeCol?: boolean;
  twoThirds?: boolean;
  noMargin?: boolean;
  gridGap?: string | string[];
};

export const Grid = styled(motion.div)<Props>(
  mq({
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridGap: scale(6),

    margin: `${scale(6)} 0`,
  }),
  ({ containerRow }) =>
    containerRow && {
      gridGap: scale(0.25),
      gridTemplateColumns: "3fr 3fr",
      margin: 0,
    },
  ({ twoCol }) =>
    twoCol &&
    mq({
      gridTemplateColumns: ["1fr", "1fr", "1fr 1fr"],
    }),
  ({ threeCol }) =>
    threeCol &&
    mq({
      gridTemplateColumns: ["1fr", "1fr", "1fr 1fr 1fr"],
    }),
  ({ twoThirds }) =>
    twoThirds &&
    mq({
      gridTemplateColumns: ["1fr", "1fr", "2fr 1fr"],
    }),

  ({ noMargin }) =>
    noMargin && {
      margin: 0,
    },
  ({ gridGap }) =>
    gridGap &&
    mq({
      gridGap: gridGap,
    }),
);
