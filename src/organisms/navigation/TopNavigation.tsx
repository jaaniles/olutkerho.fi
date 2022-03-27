import styled from "@emotion/styled";

import { Row } from "~/atoms/Row";
import { Link } from "~/atoms/typography/Link";
import { scale } from "~/design";
import { useUpdateDarkMode } from "~/providers/DarkModeProvider";

const Container = styled(Row)(({ theme }) => ({
  background: theme.colors.background100,
  width: "100%",
  padding: `${scale(2)} 0`,

  transition: "background 1s",
}));

export const TopNavigation = () => {
  const { toggleDarkMode } = useUpdateDarkMode();

  const handleToggleDarkMode = () => toggleDarkMode();

  return (
    <Container>
      <Row
        css={{ width: "100%", maxWidth: scale(200), margin: "0 auto" }}
        spaceBetween
        alignCenter
      >
        <Link href="/">Olutkerho </Link>
        <div>
          <button onClick={handleToggleDarkMode}>darkmode</button>
        </div>
      </Row>
    </Container>
  );
};
