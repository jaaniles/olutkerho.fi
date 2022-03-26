import React, { FC } from "react";

import { PageContent } from "~/atoms/PageContent";
import { H1 } from "~/atoms/typography/H1";
import { TopNavigation } from "~/organisms/navigation/TopNavigation";
import { useParams } from "~/paths";

type PageParams = {
  r: string;
};

export const ReviewPage: FC = () => {
  const { r } = useParams<PageParams>();

  return (
    <>
      <TopNavigation />
      <PageContent>
        <H1>{r}</H1>
      </PageContent>
    </>
  );
};
