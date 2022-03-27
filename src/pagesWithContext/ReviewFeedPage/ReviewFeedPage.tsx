import React, { FC } from "react";

import { useReviewsQuery } from "../IndexPage/indexPageQueries";
import { ReviewContent } from "../ReviewPage/ReviewPage";

import { PageContent } from "~/atoms/PageContent";
import { TopNavigation } from "~/organisms/navigation/TopNavigation";

export const ReviewFeedPage: FC = () => {
  const { data: reviews } = useReviewsQuery();

  return (
    <>
      <TopNavigation />
      <PageContent layout>
        {reviews?.map((review, i) => (
          <ReviewContent key={i} review={review} />
        ))}
      </PageContent>
    </>
  );
};
