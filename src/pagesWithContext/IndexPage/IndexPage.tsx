import React, { FC } from "react";

import { Column } from "~/atoms/Column";
import { PageContent } from "~/atoms/PageContent";
import { PageWrapper } from "~/atoms/PageWrapper";
import { Hero } from "~/molecules/Hero";
import { NewReviews } from "~/molecules/NewReviews";
import { TopNavigation } from "~/organisms/navigation/TopNavigation";

export const IndexPage: FC = () => (
  <PageWrapper>
    <TopNavigation />
    <PageContent>
      <Column alignCenter>
        <Hero />
      </Column>

      <NewReviews />
    </PageContent>
  </PageWrapper>
);
