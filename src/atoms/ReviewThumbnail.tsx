import styled from "@emotion/styled";
import { motion } from "framer-motion";

import { H2 } from "./typography/H2";
import { H3 } from "./typography/H3";
import { Link } from "./typography/Link";

import { Review } from "~/@types/contentful";

const Card = styled(motion.div)(({ theme }) => ({
  background: theme.colors.background100,
  padding: theme.scale(4),
}));

export const ReviewThumbnail = ({ review }: { review: Review }) => (
  <Link href={`/r/${review.slug}`}>
    <Card
      variants={{
        initial: {
          opacity: 0,
          scale: 0.95,
        },
        animate: {
          opacity: 1,
          scale: 1,
        },
      }}
    >
      <H3>Arvio</H3>
      <H2>{review.title}</H2>
    </Card>
  </Link>
);
