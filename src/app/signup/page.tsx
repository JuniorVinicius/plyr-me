"use client";
import React from "react";
import { ImageSignupContainer } from "@/components/Containers";
import { FormSignup, Logo } from "@/components/Utils";
import { useStyles } from "./styles";

export default function Signup() {
  const { classes } = useStyles();
  const imageAlt =
    "Homem jovem com camisa quadriculada verde e preto de frente para uma câmera gravando um vídeo.";

  return (
    <main className={classes.container}>
      <section className={classes.formContainer}>
        <div className={classes.box}>
          <div className={classes.wrapper}>
            <Logo />
            <p className={classes.subTitle}>Crie seu clube na plyr.me</p>
          </div>

          <FormSignup />
        </div>
      </section>

      <ImageSignupContainer src="/img/background.svg" alt={imageAlt} />
    </main>
  );
}
