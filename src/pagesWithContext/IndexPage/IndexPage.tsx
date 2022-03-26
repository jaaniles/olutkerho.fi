import React, { FC } from "react";

import { Column } from "~/atoms/Column";
import { PageContent } from "~/atoms/PageContent";
import { Hero } from "~/molecules/Hero";
import { NewReviews } from "~/molecules/NewReviews";
import { TopNavigation } from "~/organisms/navigation/TopNavigation";

export const IndexPage: FC = () => (
  <>
    <TopNavigation />
    <PageContent>
      <Column alignCenter>
        <Hero />
      </Column>

      <NewReviews />
    </PageContent>
  </>
);
