import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  anchor: {
    color: theme.colors.button[0],
    ":hover":{
      color: 'blue'
    }
  },
}));
