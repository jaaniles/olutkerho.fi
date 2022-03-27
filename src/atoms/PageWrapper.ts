import styled from "@emotion/styled";

export const PageWrapper = styled.div(({ theme }) => ({
  position: "relative",
  paddingBottom: "5vh",

  height: "100%",
  minHeight: "100vh",
  color: theme.colors.text200,
  backgroundColor: theme.colors.background50,

  transition: "background-color 1.25s",
}));
