import { AnimatePresence, motion } from "framer-motion";
import { FC, useState } from "react";

import { PageContent } from "~/atoms/PageContent";
import { H3 } from "~/atoms/typography/H3";
import { scale } from "~/design";
import { NewReviews } from "~/molecules/NewReviews";
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
        <H3>Kaikualttiin Helsingin ytimessä toimii Olutkerho ry. 🍻</H3>
        <p>Voit lakata unelmoimasta. 🍻🍻</p>
      </div>

      <NewReviews />
      <PartnerCloud />
    </PageContent>
    <Footer />
  </motion.div>
);
