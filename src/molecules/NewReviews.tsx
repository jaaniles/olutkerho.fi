import { Grid } from "~/atoms/Grid";
import { ReviewThumbnail } from "~/atoms/ReviewThumbnail";
import { H3 } from "~/atoms/typography/H3";
import { Link } from "~/atoms/typography/Link";
import { useReviewsQuery } from "~/pagesWithContext/IndexPage/indexPageQueries";
import { useParams } from "~/paths";

type PageParams = {
  r: string;
};

export const NewReviews = () => {
  const { data: reviews } = useReviewsQuery();
  const { r: slug } = useParams<PageParams>();

  if (!reviews) {
    return null;
  }

  return (
    <div>
      <Link href="/reviews">Kaikki sisällöt</Link>
      <H3>Uusimmat arviot</H3>
      <Grid
        css={{
          position: "relative",
        }}
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
        layout="position"
      >
        {reviews.map((r, i) => (
          <ReviewThumbnail key={i} review={r} isSelected={r.slug === slug} />
        ))}
      </Grid>
    </div>
  );
};
