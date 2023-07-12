import React from "react";
import { useStyles } from "./styles";
import Link from "../Link";

type AnchorLinkProps = {
  leftText?: string;
  link: string;
  rightText?: string;
  href: string;
};

export default function AnchorLink({
  leftText,
  link,
  rightText,
  href,
}: AnchorLinkProps) {
  const { classes } = useStyles();
  return (
    <p className={classes.infoText}>
      <Link leftText={leftText} link={link} rightText={rightText} href={href} />
    </p>
  );
}
