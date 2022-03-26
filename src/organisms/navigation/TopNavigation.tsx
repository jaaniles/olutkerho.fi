import styled from "@emotion/styled";

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
      Olutkerho <button onClick={handleToggleDarkMode}>toggle darkmode</button>
    </Container>
  );
};
