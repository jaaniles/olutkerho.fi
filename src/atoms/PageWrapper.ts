import styled from "@emotion/styled";

export const PageWrapper = styled.div(({ theme }) => ({
  height: "100vh",
  color: theme.colors.text200,
  backgroundColor: theme.colors.background50,

  transition: "background-color 1.25s",
}));
