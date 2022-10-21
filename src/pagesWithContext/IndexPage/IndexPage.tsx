/* eslint-disable max-len */
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import { FC, useState } from "react";

import { Column } from "~/atoms/Column";
import { PageContent } from "~/atoms/PageContent";
import { Section } from "~/atoms/Section";
import { H1 } from "~/atoms/typography/H1";
import { H2 } from "~/atoms/typography/H2";
import { colors, scale } from "~/design";
import { StartScreen } from "~/molecules/animated/StartScreen";
import { Footer } from "~/organisms/navigation/Footer";
import { TopNavigation } from "~/organisms/navigation/TopNavigation";

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
    <section css={{ backgroundColor: "#FAC12A", width: "100%" }}>
      <TopNavigation />
      <div
        css={{
          padding: `${scale(16)} 0`,
          textAlign: "center",
        }}
      >
        <p>Kerho oluen ystäville</p>
        <div css={{ color: colors.text900, paddingBottom: scale(24) }}>
          <H1>kaikualttiin</H1>
          <H1>Helsingin ytimessä</H1>

          <Section css={{ color: colors.primary900 }}>
            <Column alignCenter>
              <H2>Jäseneksi?</H2>
              <p>Ota yhteyttä</p>
              <p css={{ margin: scale(4), letterSpacing: 2 }}>
                puheenjohtaja (at) olutkerho . fi
              </p>
            </Column>
          </Section>
        </div>
      </div>
    </section>
    <section css={{ position: "relative" }}>
      <div
        css={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          overflow: "hidden",
          lineHeight: 0,
        }}
      >
        <svg
          css={{
            position: "relative",
            display: "block",
            width: "calc(100% + 1.3px)",
            height: 95,
          }}
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            css={{ fill: "#FAC12A" }}
            initial="initial"
            animate="animate"
            variants={{
              initial: {
                scaleX: 1,
              },
              animate: {
                scaleX: 1.5,
                transition: {
                  repeat: Infinity,
                  repeatType: "mirror",
                  duration: 15,
                },
              },
            }}
          ></motion.path>
          <motion.path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            css={{ fill: "#FAC12A" }}
            initial="initial"
            animate="animate"
            variants={{
              initial: {
                scaleX: 1,
              },
              animate: {
                scaleX: 1.25,
                transition: {
                  repeat: Infinity,
                  repeatType: "mirror",
                  duration: 15,
                },
              },
            }}
          ></motion.path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            css={{ fill: "#FAC12A" }}
          ></path>
        </svg>
      </div>
    </section>
    <PageContent></PageContent>
    <Footer />
  </motion.div>
);
