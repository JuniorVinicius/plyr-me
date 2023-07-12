import { createStyles } from "@mantine/core";

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
  },
  box: {
    width: "85%",
    height: "75%",
  },
  wrapper: {
    width: "100%",
  },
  imageContainer: {
    width: 138,
    height: 34,
    position: "relative",
  },
  subTitle: {
    fontSize: 24,
    marginTop: 8,
    color: theme.colors.text[2],
    fontWeight: 'bold'
  },
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
  },
  inputName: {
    gridArea: "name",
  },
  inputEmail: { gridArea: "email" },
  inputPhone: { gridArea: "phone" },
  inputPassword: { gridArea: "password" },
  inputPasswordConfirm: { gridArea: "confirm" },
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
  anchor: {
    color: theme.colors.button[0],
    ":hover":{
      color: 'blue'
    }
  },
  button: {
    gridArea: "button"
  },
  login:{
    gridArea: "login"
  },
  infoText:{
    color: theme.colors.text[0],
    fontWeight: 400
  }
}));
