"use client";
import React from "react";
import { useStyles } from "./styles";
import { ImageSignupContainer } from "@/components/Containers";
import Image from "next/image";
import { Anchor, Button, Checkbox, Input, MantineTheme } from "@mantine/core";

export default function Signup() {
  const { classes } = useStyles();
  const logoAlt =
    "logo da plyrme. Possui o nome Plyr com um síbolo trinagula direcionado a direita com a cor laranja e depois finaliza com a palavra me.";

  const imageAlt =
    "Homem jovem com camisa quadriculada verde e preto de frente para uma câmera gravando um vídeo.";

  const labelStyles = (theme: MantineTheme) => ({
    label: {
      color: theme.colors.text[1],
      fontWeight: 400,
    },
  });
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

          <form className={classes.form}>
            <Input.Wrapper
              label="Nome"
              className={classes.inputName}
              styles={labelStyles}
            >
              <Input placeholder="Digite seu nome" />
            </Input.Wrapper>
            <Input.Wrapper
              label="Email"
              className={classes.inputEmail}
              styles={labelStyles}
            >
              <Input placeholder="Digite seu email" />
            </Input.Wrapper>
            <Input.Wrapper
              label="Celular/Whatsapp"
              className={classes.inputPhone}
              styles={labelStyles}
            >
              <Input placeholder="(00)00000-0000" />
            </Input.Wrapper>
            <Input.Wrapper
              label="Senha"
              className={classes.inputPassword}
              styles={labelStyles}
            >
              <Input placeholder="Digite sua senha" />
            </Input.Wrapper>
            <Input.Wrapper
              label="Confirm sua senha"
              className={classes.inputPasswordConfirm}
              styles={labelStyles}
            >
              <Input placeholder="Digite sua senha novamente" />
            </Input.Wrapper>
            <div className={classes.inputClub}>
              <Input.Wrapper
                label="Nome do seu clube"
                className={classes.clubInput}
                styles={labelStyles}
              >
                <Input placeholder="Digite o nome do seu clube" />
              </Input.Wrapper>
              <span className={classes.infoText}>.plyr.me</span>
            </div>
            <div className={classes.checkInput}>
              <Checkbox
                className={classes.infoText}
                label={
                  <>
                    Aceito os{" "}
                    <Anchor href="#" target="_blank" className={classes.anchor}>
                      Termos e Condições
                    </Anchor>{" "}
                    da Plyr.me e confirmo que não publicarei conteúdo adulto no
                    meu clube.
                  </>
                }
              />
            </div>
            <div className={classes.button}>
              <Button
                styles={(theme) => ({
                  root: {
                    background: theme.colors.button[0],
                    color: theme.colors.button[1],
                  },
                })}
              >
                Criar Conta
              </Button>
            </div>
            <div className={classes.login}>
              <p className={classes.infoText}>
                Já tem um clube?{" "}
                <Anchor href="#" target="_blank" className={classes.anchor}>
                  Faça o login
                </Anchor>
              </p>
            </div>
          </form>
        </div>
      </section>

      <ImageSignupContainer src="/img/background.svg" alt={imageAlt} />
    </main>
  );
}
