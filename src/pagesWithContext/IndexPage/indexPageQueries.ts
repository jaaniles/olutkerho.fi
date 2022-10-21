import { useQuery } from "react-query";

import { Review } from "~/@types/contentful";
import { contentfulQuery } from "~/services/contentful";

const reviewQuery = `
{
  reviewCollection {
    items {
      slug
      title
      brewery
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

export const getReviews = () => async () => {
  const { data } = await contentfulQuery(reviewQuery);

  return data.reviewCollection.items as Review[];
};

export function useReviewsQuery() {
  return useQuery("reviews", getReviews());
}
