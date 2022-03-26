import React, { FC } from "react";
import ReactPlayer from "react-player";

import { useReviewsQuery } from "../IndexPage/indexPageQueries";

import { PageContent } from "~/atoms/PageContent";
import { Row } from "~/atoms/Row";
import { H1 } from "~/atoms/typography/H1";
import { TopNavigation } from "~/organisms/navigation/TopNavigation";
import { useParams } from "~/paths";

type PageParams = {
  r: string;
};

export const ReviewPage: FC = () => {
  const { r: slug } = useParams<PageParams>();
  const { data: reviews } = useReviewsQuery();

  const review = reviews?.find((r) => r.slug === slug);

  return (
    <>
      <TopNavigation />
      <PageContent>
        <H1>{review?.title}</H1>
        <Row>
          <div>
            <p>* {review?.tasteEvaluation}</p>
            <p>* {review?.priceEvaluation}</p>
            <p>* {review?.dokabilityEvaluation}</p>
          </div>
          <div>
            <ReactPlayer
              url={review?.shortvideo.url}
              loop={true}
              playing={true}
              muted
            />
          </div>
        </Row>
      </PageContent>
    </>
  );
};
