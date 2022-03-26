import { ReviewThumbnail } from "~/atoms/ReviewThumbnail";
import { Row } from "~/atoms/Row";
import { useReviewsQuery } from "~/pagesWithContext/IndexPage/indexPageQueries";

export const NewReviews = () => {
  const { data: reviews } = useReviewsQuery();

  if (!reviews) {
    return null;
  }

  return (
    <Row>
      {reviews.map((r, i) => (
        <ReviewThumbnail key={i} review={r} />
      ))}
    </Row>
  );
};
