import React from "react";
import { useStyles } from "./styles";
import Image from "next/image";

type ImageSignupProps = {
  src: string;
  alt: string;
};

export default function ImageSignupContainer({ src, alt }: ImageSignupProps) {
  const { classes } = useStyles();
  return (
    <section className={classes.imageContainer}>
      <Image
        src={src}
        fill
        blurDataURL={"/img/lazyBg.webp"}
        placeholder="blur"
        sizes="100%"
        style={{ objectFit: "cover" }}
        loading="lazy"
        alt={alt}
      />
    </section>
  );
}
