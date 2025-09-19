import styled from "@emotion/styled";
import { motion, useAnimation } from "framer-motion";
import React from "react";

import { Column } from "~/atoms/Column";
import { AnimatedLogo } from "~/atoms/animated/AnimatedLogo";
import { AnimatedWave } from "~/atoms/animated/AnimatedWave";
import { H1 } from "~/atoms/typography/H1";
import { colors, scale } from "~/design";

const WAVE_DURATION = 3.5;

const Screen = styled(motion.div)({
  margin: "0 auto",
  width: "100%",
  height: "100vh",
  overflow: "hidden",

  position: "relative",

  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  pointerEvents: "none",

  paddingBottom: scale(8),
});

export const StartScreen = ({
  handleIntroComplete,
}: {
  handleIntroComplete: () => void;
}) => {
  const controls = useAnimation();

  const onLogoAnimationComplete = async () => {
    await controls.start("liquid");
    await controls.start("animateText");
    await controls.start("animateWave");
    await controls.start("done");

    handleIntroComplete();
  };

  return (
    <Screen
      initial="initial"
      animate={controls}
      exit="exit"
      variants={{
        initial: {
          opacity: 1,
          background: "#FFFFFF",
        },
        liquid: {
          background: "#FFBB00",
          transition: {
            delay: 0.95,
            duration: 0,
          },
        },
        done: {
          background: "#FFFFFF",
        },
        exit: {
          opacity: 0,
        },
      }}
    >
      <AnimatedLogo handleLogoAnimationComplete={onLogoAnimationComplete} />
      <Column initial="initial" animate={controls}>
        <H1
          css={{ fontFamily: "Rammetto One", color: colors.primary900 }}
          variants={{
            initial: {
              opacity: 0,
              y: "-380%",
            },
            animateText: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.75,
                ease: "easeOut",
              },
            },
          }}
        >
          Olutkerho
        </H1>
        <motion.p
          variants={{
            initial: {
              opacity: 0,
              y: "380%",
            },
            animateText: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.75,
                ease: "easeOut",
              },
            },
          }}
        >
          By the book, no limits
        </motion.p>
      </Column>
      <motion.div
        initial="initial"
        animate={controls}
        css={{
          position: "absolute",
          left: 0,

          "::after": {
            content: "''",
            position: "absolute",
            top: "97%",
            left: 0,
            background: "#FFFFFF",
            height: "100vh",
            width: "100%",
          },
        }}
        variants={{
          initial: {
            opacity: 0,
            bottom: 0,
            scale: 0,
          },
          animateWave: {
            scale: 1,
            opacity: 1,
            bottom: ["0%", "23%", "45%", "75%", "95%"],
            transition: {
              scale: {
                duration: 0,
              },
              duration: WAVE_DURATION,
            },
          },
        }}
      >
        <AnimatedWave />
      </motion.div>
    </Screen>
  );
};
