import styled from "@emotion/styled";

import { Row } from "~/atoms/Row";
import { Link } from "~/atoms/typography/Link";
import { useUpdateDarkMode } from "~/providers/DarkModeProvider";

const Container = styled.div({
  background: "#C4C4C4C4",
  width: "100%",
});

export const TopNavigation = () => {
  const { toggleDarkMode } = useUpdateDarkMode();

  const handleToggleDarkMode = () => toggleDarkMode();

  return (
    <Container>
      <Row>
        <Link href="/">Olutkerho </Link>
        <button onClick={handleToggleDarkMode}>darkmode</button>
      </Row>
    </Container>
  );
};
