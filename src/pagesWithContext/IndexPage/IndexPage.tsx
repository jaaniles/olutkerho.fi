import React, { FC } from "react";

import { Column } from "~/atoms/Column";
import { PageContent } from "~/atoms/PageContent";
import { Hero } from "~/molecules/Hero";
import { NewReviews } from "~/molecules/NewReviews";
import { Footer } from "~/organisms/navigation/Footer";
import { TopNavigation } from "~/organisms/navigation/TopNavigation";
import { PartnerCloud } from "~/organisms/partnerCloud/PartnerCloud";

export const IndexPage: FC = () => (
  <>
    <TopNavigation />
    <PageContent>
      <Column alignCenter>
        <Hero />
      </Column>

      <NewReviews />
      <PartnerCloud />
    </PageContent>
    <Footer />
  </>
);
