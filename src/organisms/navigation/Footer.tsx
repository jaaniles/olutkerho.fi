import styled from "@emotion/styled";

import { Row } from "~/atoms/Row";
import { scale } from "~/design";

const Container = styled(Row)({
  position: "absolute",
  bottom: 0,
  left: 0,
  width: "100%",

  padding: scale(2),

  transition: "background 1s ease-in-out",

  paddingBottom: scale(8),
});

export const Footer = () => (
  <Container>
    <Row
      css={{ width: "100%", maxWidth: scale(200), margin: "0 auto" }}
      alignCenter
    >
      <p style={{ margin: "0 auto" }}>Olutkerho ry (3249577-3)</p>
    </Row>
  </Container>
);
