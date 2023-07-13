import React from "react";
import Image from "next/image";
import { useStyles } from "./styles";

export default function Logo() {
  const { classes } = useStyles();
  const logoAlt =
    "logo da plyrme. Possui o nome Plyr com um síbolo trinagula direcionado a direita com a cor laranja e depois finaliza com a palavra me.";

  return (
    <div className={classes.imageContainer}>
      <Image
        src="/img/logo.png"
        fill={true}
        sizes="100%"
        style={{objectFit: "cover"}}
        loading="lazy"
        alt={logoAlt}
      />
    </div>
  );
}
