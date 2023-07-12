import { createStyles, em, getBreakpointValue } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  imageContainer: {
    width: "60%",
    height: "100%",
    position: "relative",
    [`@media (max-width: ${em(getBreakpointValue(theme.breakpoints.xl) - 1)})`]:
      {
        width: "40%",
      },
    [`@media (max-width: ${em(getBreakpointValue(theme.breakpoints.lg) - 1)})`]:
      {
        display: "none",
      },
  },
}));
