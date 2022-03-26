import { Column } from "~/atoms/Column";
import { Row } from "~/atoms/Row";
import { AnimatedLogo } from "~/atoms/animated/Logo";
import { H1 } from "~/atoms/typography/H1";

export const Hero = () => (
  <Row center>
    <Column center alignCenter>
      <H1>Olutkerho</H1>
      <p>--- By the book, no limits</p>
    </Column>
    <AnimatedLogo />
  </Row>
);
