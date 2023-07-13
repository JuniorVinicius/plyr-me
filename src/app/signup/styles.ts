import { createStyles, em, getBreakpointValue } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  container: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    background: theme.colors.background[0],
  },
  formContainer: {
    width: "40%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [`@media (max-width: ${em(getBreakpointValue(theme.breakpoints.xl) - 1)})`]:
      {
        width: "60%",
      },
    [`@media (max-width: ${em(getBreakpointValue(theme.breakpoints.lg) - 1)})`]:
      {
        width: "100%",
      },
  },
  box: {
    width: "85%",
    height: "70%",
    [`@media (max-width: ${em(getBreakpointValue(theme.breakpoints.lg) - 1)})`]:
    {
      height: "80%",
    },
    [`@media (max-width: ${em(getBreakpointValue(theme.breakpoints.sm) - 1)})`]:
      {
        height: "90%",
      },
  },
  wrapper: {
    width: "100%",
    [`@media (max-width: ${em(getBreakpointValue(theme.breakpoints.sm) - 1)})`]:
    {
      display: "flex",
      justifyContent: "center",
      alignItems:"center",
      flexDirection: "column"
    },
  },

  subTitle: {
    fontSize: 24,
    marginTop: 8,
    color: theme.colors.text[2],
    fontWeight: "bold",
  },
}));
