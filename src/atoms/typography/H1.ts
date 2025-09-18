import styled from "@emotion/styled";
import { motion } from "framer-motion/dist/framer-motion";

export const H1 = styled(motion.h1)(({ theme }) => ({
  fontSize: theme.fontSizes.h2,
  lineHeight: 1.2,
  fontWeight: theme.fontWeights.light,
  margin: `${theme.scale(2)} 0`,
}));
