import { Grid } from "~/atoms/Grid";
import { ReviewThumbnail } from "~/atoms/ReviewThumbnail";
import { useReviewsQuery } from "~/pagesWithContext/IndexPage/indexPageQueries";

export const NewReviews = () => {
  const { data: reviews } = useReviewsQuery();

  if (!reviews) {
    return null;
  }

  return (
    <Grid
      threeCol
      initial="initial"
      animate="animate"
      variants={{
        animate: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
    >
      {reviews.map((r, i) => (
        <ReviewThumbnail key={i} review={r} />
      ))}
    </Grid>
  );
};
