import styled from "@emotion/styled";
import { motion } from "framer-motion";

import { H2 } from "./typography/H2";
import { H3 } from "./typography/H3";
import { Link } from "./typography/Link";

import { Review } from "~/@types/contentful";
import { ReviewContent } from "~/pagesWithContext/ReviewPage/ReviewPage";

const Card = styled(motion.div)(({ theme }) => ({
  background: theme.colors.background100,
  padding: theme.scale(4),
}));

export const ReviewThumbnail = ({
  review,
  isSelected,
}: {
  review: Review;
  isSelected: boolean;
}) => (
  <Link href={isSelected ? "/" : `/preview/${review.slug}`}>
    <Card
      initial="initial"
      animate={isSelected ? "animate" : "initial"}
      layout
      variants={{
        initial: {
          position: "relative",
          opacity: 1,
          top: "0%",
        },
        animate: {
          position: "absolute",
          top: "100%",
          zIndex: 1000,
          opacity: 0.95,
        },
      }}
    >
      {!isSelected && (
        <>
          <H3>Arvio</H3>
          <H2>{review.title}</H2>
        </>
      )}
      {isSelected && <ReviewContent review={review} />}
    </Card>
  </Link>
);
