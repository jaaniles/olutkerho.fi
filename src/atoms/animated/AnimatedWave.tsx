/* eslint-disable max-len */
import { motion } from "framer-motion/dist/framer-motion";

const paths = [
  "M0 86.2989C424.625 86.299 596.625 158.413 1187.88 51.4899C1779.12 -55.4331 1774.14 34.6258 2066.69 70.5489C2437.56 116.091 2897.12 187.373 3440 86.299V230.845L0 230.845V86.2989Z",
  "M0 61.8122C212.312 12.6716 286.219 0 487.781 0C689.344 0 1149.65 132.477 1550.69 132.477C1935 132.477 2184.94 -43.7749 3440 61.8124V230L0 230V61.8122Z",
];

export const AnimatedWave = () => (
  <motion.div
    css={{
      maxWidth: "100vw",
      width: "100%",
      position: "relative",
      overflow: "hidden",
    }}
  >
    <motion.svg
      width="3440"
      height="230"
      viewBox="0 0 3440 230"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial="initial"
      animate="animateWave"
    >
      <motion.path
        fill="#FFFFFF"
        variants={{
          initial: {
            d: paths[1],
          },
          animateWave: {
            d: [paths[0], paths[1]],
            transition: {
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
            },
          },
        }}
      />
    </motion.svg>
  </motion.div>
);
