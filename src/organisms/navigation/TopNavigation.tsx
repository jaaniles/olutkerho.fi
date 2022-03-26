import styled from "@emotion/styled";

import { Row } from "~/atoms/Row";
import { Link } from "~/atoms/typography/Link";
import { scale } from "~/design";
import { useUpdateDarkMode } from "~/providers/DarkModeProvider";

const Container = styled(Row)({
  background: "#C4C4C4C4",
  width: "100%",
});

export const TopNavigation = () => {
  const { toggleDarkMode } = useUpdateDarkMode();

  const handleToggleDarkMode = () => toggleDarkMode();

  return (
    <Container>
      <Row
        css={{ width: "100%", maxWidth: scale(200), margin: "0 auto" }}
        spaceBetween
      >
        <Link href="/">Olutkerho </Link>
        <button onClick={handleToggleDarkMode}>darkmode</button>
      </Row>
    </Container>
  );
};
