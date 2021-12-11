import React, { FC } from "react";

import { Column } from "~/atoms/Column";
import { PageContent } from "~/atoms/PageContent";
import { AnimatedLogo } from "~/molecules/animated/Logo";

export const IndexPage: FC = () => (
  <PageContent>
    <Column alignCenter>
      <AnimatedLogo />
    </Column>
  </PageContent>
);
