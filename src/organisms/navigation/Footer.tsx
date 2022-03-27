import styled from "@emotion/styled";

import { Row } from "~/atoms/Row";
import { Link } from "~/atoms/typography/Link";
import { scale } from "~/design";

const Container = styled(Row)(({ theme }) => ({
  position: "absolute",
  bottom: 0,
  left: 0,
  width: "100%",
  height: "5vh",

  background: theme.colors.background100,

  transition: "background 1s ease-in-out",
}));

export const Footer = () => (
  <Container>
    <Row
      css={{ width: "100%", maxWidth: scale(200), margin: "0 auto" }}
      spaceBetween
      alignCenter
    >
      <Link href="/">https://www.olutkerho.fi</Link>
      <p>Olutkerho ry (3249577-3)</p>
      <p>puheenjohtaja(at)olutkerho.fi</p>
    </Row>
  </Container>
);
