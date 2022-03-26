import React, { FC } from "react";

import { useReviewsQuery } from "../IndexPage/indexPageQueries";

import { Column } from "~/atoms/Column";
import { Grid } from "~/atoms/Grid";
import { PageContent } from "~/atoms/PageContent";
import { Shortvideo } from "~/atoms/Shortvideo";
import { H1 } from "~/atoms/typography/H1";
import { NewReviews } from "~/molecules/NewReviews";
import { TopNavigation } from "~/organisms/navigation/TopNavigation";
import { useParams } from "~/paths";

type PageParams = {
  r: string;
};

export const ReviewPage: FC = () => {
  const { r: slug } = useParams<PageParams>();
  const { data: reviews } = useReviewsQuery();

  const review = reviews?.find((r) => r.slug === slug);

  if (!review) {
    return null;
  }

  return (
    <>
      <TopNavigation />
      <PageContent>
        <Grid twoCol>
          <Column center>
            <H1>{review?.title}</H1>
            <p>* {review?.tasteEvaluation}</p>
            <p>* {review?.priceEvaluation}</p>
            <p>* {review?.dokabilityEvaluation}</p>
          </Column>
          <Column center>
            <Shortvideo url={review.shortvideo.url} />
          </Column>
        </Grid>
        <NewReviews />
      </PageContent>
    </>
  );
};
