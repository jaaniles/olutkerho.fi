import styled from "@emotion/styled";

import { LinkButton } from "~/atoms/LinkButton";
import { Row } from "~/atoms/Row";
import { H2 } from "~/atoms/typography/H2";
import { scale } from "~/design";

const Container = styled(Row)({
  width: "100%",
  padding: `${scale(2)} ${scale(2)}`,

  transition: "background 1s",
});

export const TopNavigation = () => (
  <Container>
    <Row
      css={{ width: "100%", maxWidth: scale(200), margin: "0 auto" }}
      spaceBetween
      alignCenter
    >
      <LinkButton href="/">
        <H2>Olutkerho</H2>
        <p css={{ letterSpacing: "0.2em" }}>By the book, no limits</p>
      </LinkButton>
    </Row>
  </Container>
);
