import { useEffect, useState } from "react";

import { Review } from "~/@types/contentful";
import { ReviewThumbnail } from "~/atoms/ReviewThumbnail";
import { Row } from "~/atoms/Row";
import { config } from "~/config";

const reviewQuery = `
{
  reviewCollection {
    items {
      title
      tasteEvaluation
      priceEvaluation
      dokabilityEvaluation
      shortvideo {
       title
      fileName
    	url
      }
    }
  }
}
`;

export const NewReviews = () => {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    fetch(
      `https://graphql.contentful.com/content/v1/spaces/${config.contentfulSpaceId}/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${config.contentfulAccessToken}`,
        },
        body: JSON.stringify({ query: reviewQuery }),
      },
    )
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors || !data) {
          console.error(errors);
        }

        setReviews(data.reviewCollection.items);
      });
  }, []);

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
