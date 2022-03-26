import { Grid } from "~/atoms/Grid";
import { ReviewThumbnail } from "~/atoms/ReviewThumbnail";
import { Link } from "~/atoms/typography/Link";
import { useReviewsQuery } from "~/pagesWithContext/IndexPage/indexPageQueries";

export const NewReviews = () => {
  const { data: reviews } = useReviewsQuery();

  if (!reviews) {
    return null;
  }

  return (
    <Grid threeCol>
      {reviews.map((r, i) => (
        <Link key={i} href={`/r/${r.slug}`}>
          <ReviewThumbnail review={r} />
        </Link>
      ))}
    </Grid>
  );
};
