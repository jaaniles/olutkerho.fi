import { AnimatePresence, motion } from "framer-motion";
import { FC, useState } from "react";

import { Column } from "~/atoms/Column";
import { PageContent } from "~/atoms/PageContent";
import { Section } from "~/atoms/Section";
import { H1 } from "~/atoms/typography/H1";
import { H2 } from "~/atoms/typography/H2";
import { scale } from "~/design";
import { StartScreen } from "~/molecules/animated/StartScreen";
import { Footer } from "~/organisms/navigation/Footer";
import { TopNavigation } from "~/organisms/navigation/TopNavigation";
import { PartnerCloud } from "~/organisms/partnerCloud/PartnerCloud";

export const IndexPage: FC = () => {
  const [introIsDone, setIntro] = useState(false);

  const onIntroComplete = () => setIntro(true);

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {introIsDone ? (
          <Index key="index" />
        ) : (
          <StartScreen key="start" handleIntroComplete={onIntroComplete} />
        )}
      </AnimatePresence>
    </>
  );
};

const Index = () => (
  <motion.div
    initial="initial"
    animate="animate"
    exit="initial"
    variants={{
      initial: {
        opacity: 0,
      },
      animate: {
        opacity: 1,
      },
    }}
  >
    <TopNavigation />
    <PageContent>
      <div
        css={{
          padding: `${scale(16)} 0`,
          textAlign: "center",
        }}
      >
        <H1>Kaikualttiin</H1>
        <H1>Helsingin ytimessä</H1>
        <p css={{ fontSize: 40 }}>Voit lakata unelmoimasta</p>
      </div>

      <PartnerCloud />

      <Section>
        <Column alignCenter>
          <H2>Jäseneksi?</H2>
          <p>Ota yhteyttä</p>
        </Column>
      </Section>
    </PageContent>
    <Footer />
  </motion.div>
);
