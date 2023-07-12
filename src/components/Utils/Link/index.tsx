import React from "react";
import { useStyles } from "./styles";
import { Anchor } from "@mantine/core";

type LinkProps = {
  leftText?: string;
  link: string;
  rightText?: string;
  href: string;
};

export default function Link({ leftText, link, rightText, href }: LinkProps) {
  const { classes } = useStyles();
  return (
    <>
      {leftText ? leftText + " " : null}
      <Anchor href={href} target="_blank" className={classes.anchor}>
        {link}
      </Anchor>
      {" " + rightText ? rightText : null}
    </>
  );
}
