import React, { FC } from "react";

import { Column } from "~/atoms/Column";
import { PageContent } from "~/atoms/PageContent";
import { H3 } from "~/atoms/typography/H3";
import { scale } from "~/design";
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

      <div
        css={{
          padding: `${scale(16)} 0`,
          textAlign: "center",
        }}
      >
        <H3>Kaikualttiin Helsingin ytimessä toimii Olutkerho ry. 🍻</H3>
        <p>Voit lakata unelmoimasta. 🍻🍻</p>
      </div>

      <NewReviews />
      <PartnerCloud />
    </PageContent>
    <Footer />
  </>
);
