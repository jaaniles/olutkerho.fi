import styled from "@emotion/styled";
import { motion } from "framer-motion/dist/framer-motion";

import { scale } from "~/design";

export const PageContent = styled(motion.div)(({ theme }) => ({
  width: "100%",
  margin: `${theme.scale(4)} auto 0`,
  padding: theme.scale(4),
  maxWidth: theme.scale(200),

  paddingBottom: scale(20),
}));
