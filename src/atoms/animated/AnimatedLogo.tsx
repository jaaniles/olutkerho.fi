/* eslint-disable max-len */
import { motion, useAnimation } from "framer-motion/dist/framer-motion";

export const AnimatedLogo = ({
  handleLogoAnimationComplete,
}: {
  handleLogoAnimationComplete: () => void;
}) => {
  const controls = useAnimation();

  const handleLogoAnimation = async () => {
    await controls.start("animateLiquid");
    await controls.start("animateBubble");

    handleLogoAnimationComplete();
    await controls.start("animate");
    controls.start("done");
  };

  handleLogoAnimation();

  return (
    <motion.div
      initial="initial"
      animate={controls}
      variants={{
        initial: {
          x: 0,
          scale: 1,
          position: "relative",
        },
        animate: {
          x: 250,
          position: "fixed",
          scale: 25,
          zIndex: 1000,
          transition: {
            duration: 1,
          },
        },
        done: {
          scale: 0,
          opacity: 0,
          transition: {
            duration: 0,
          },
        },
      }}
      css={{ transformOrigin: "center center" }}
    >
      <motion.svg
        width="291"
        height="325"
        viewBox="0 0 291 325"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M212.347 101.761C226.145 158.691 243.837 277.357 164.782 315.973H67.8267C-9.61282 278.144 5.6762 163.415 19.4322 105.283H127.988"
          fill="#FFBB00"
          variants={{
            initial: {
              opacity: 0,
            },
            animateLiquid: {
              opacity: 1,
              transition: {
                delay: 1,
                duration: 0.5,
              },
            },
          }}
        />
        <motion.path
          d="M46.4895 213.716C41.4346 190.596 42.9677 164.7 46.7795 141.704"
          stroke="white"
          strokeWidth="16"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <motion.path
          d="M76.8598 277.606C66.07 268.726 58.0831 256.911 53.8641 243.589"
          stroke="white"
          strokeWidth="16"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <motion.path
          d="M213.052 104.703H278.062C278.062 104.703 308.889 261.736 210.608 267.786"
          stroke="#203040"
          strokeWidth="16"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <motion.path
          d="M29.0034 70.6863H203.605C203.605 70.6863 270.189 264.472 164.782 315.974H67.8267C-9.61283 278.145 5.6762 163.415 19.4322 105.283H127.988"
          stroke="#203040"
          strokeWidth="16px"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <motion.path
          d="M29.0037 70.6851C29.0037 70.6851 12.4302 19.846 44.9971 10.8134C77.564 1.7809 93.9717 18.2715 98.2808 40.7286C98.2808 40.7286 110.711 17.6086 132.381 25.2738C150.28 31.6546 148.706 50.7141 148.706 50.7141C148.706 50.7141 160.556 27.6355 189.476 35.8394C206.381 40.6457 207.169 59.3737 203.605 70.6851"
          stroke="#203040"
          strokeWidth="16px"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={{
            initial: {
              pathLength: 0,
            },
            animateBubble: {
              pathLength: 1,
              transition: {
                duration: 1.5,
              },
            },
          }}
        />
      </motion.svg>
    </motion.div>
  );
};
