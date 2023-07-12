"use client";
import React from "react";
import { useStyles } from "./styles";
import { ImageSignupContainer } from "@/components/Containers";
import Image from "next/image";
import { MantineTheme } from "@mantine/core";
import { FormSignup } from "@/components/Utils";

export default function Signup() {
  const { classes } = useStyles();
  const logoAlt =
    "logo da plyrme. Possui o nome Plyr com um síbolo trinagula direcionado a direita com a cor laranja e depois finaliza com a palavra me.";

  const imageAlt =
    "Homem jovem com camisa quadriculada verde e preto de frente para uma câmera gravando um vídeo.";


  return (
    <main className={classes.container}>
      <section className={classes.formContainer}>
        <div className={classes.box}>
          <div className={classes.wrapper}>
            <div className={classes.imageContainer}>
              <Image
                src="/img/logo.png"
                layout="fill"
                objectFit="cover"
                alt={logoAlt}
              />
            </div>
            <p className={classes.subTitle}>Crie seu clube na plyr.me</p>
          </div>

          <FormSignup />
        </div>
      </section>

      <ImageSignupContainer src="/img/background.svg" alt={imageAlt} />
    </main>
  );
}
