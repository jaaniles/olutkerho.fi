import styled from "@emotion/styled";

export const PageWrapper = styled.div(({ theme }) => ({
  position: "relative",

  height: "100%",
  minHeight: "100vh",
  color: theme.colors.primary900,
  backgroundColor: theme.colors.background50,

  transition: "background-color 1.25s",
}));
