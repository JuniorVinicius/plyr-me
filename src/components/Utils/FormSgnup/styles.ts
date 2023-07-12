import { createStyles, em, getBreakpointValue } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  form: {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
    gridTemplateAreas: `
    "name name name name name"
    "email email email phone phone"
    "password password confirm confirm confirm"
    "club club club club club"
    "check check check check check"
    "button button button button button"
    "login login login login login"
    `,
    gap: 15,

    [`@media (max-width: ${em(getBreakpointValue(theme.breakpoints.sm) - 1)})`]:
      {
        gridTemplateColumns: "1fr",
        gridTemplateAreas: `
        "name"
        "email"
        "phone"
        "password"
        "confirm"
        "club"
        "check"
        "button"
        "login"
        `,
        gap: 10,
      },
  },
  inputClub: {
    gridArea: "club",
    display: "flex",
    width: "100%",
    alignItems: "flex-end",
    gap: 8,
  },
  clubInput: {
    width: "100%",
  },
  checkInput: {
    gridArea: "check",
  },
  button: {
    gridArea: "button",
    width: "100%",
    [`@media (max-width: ${em(getBreakpointValue(theme.breakpoints.lg) - 1)})`]:
      {
        display: "flex",
        justifyContent: "center"
      },
  },
  login: {
    gridArea: "login",
    width: '100%',
    [`@media (max-width: ${em(getBreakpointValue(theme.breakpoints.lg) - 1)})`]:
    {
      display: "flex",
      justifyContent: "center"
    },
  },
  infoText: {
    color: theme.colors.text[0],
    fontWeight: 400,
  },
}));
