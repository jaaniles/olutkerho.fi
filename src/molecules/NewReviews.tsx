import { ReviewThumbnail } from "~/atoms/ReviewThumbnail";
import { Row } from "~/atoms/Row";
import { Link } from "~/atoms/typography/Link";
import { useReviewsQuery } from "~/pagesWithContext/IndexPage/indexPageQueries";

export const NewReviews = () => {
  const { data: reviews } = useReviewsQuery();

  if (!reviews) {
    return null;
  }

  return (
    <Row>
      {reviews.map((r, i) => (
        <Link key={i} href={`/r/${r.slug}`}>
          <ReviewThumbnail review={r} />
        </Link>
      ))}
    </Row>
  );
};
