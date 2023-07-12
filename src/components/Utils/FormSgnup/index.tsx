import React from "react";
import { Button, Checkbox, Input, MantineTheme } from "@mantine/core";
import { INPUTS_LIST } from "@/constants";
import { useStyles } from "./styles";
import AnchorLink from "../AnchorLink";
import Link from "../Link";

export default function FormSignup() {
  const { classes } = useStyles();
  const labelStyles = (theme: MantineTheme) => ({
    label: {
      color: theme.colors.text[1],
      fontWeight: 400,
    },
  });

  const buttonStyles = (theme: MantineTheme) => ({
    root: {
      background: theme.colors.button[0],
      color: theme.colors.button[1],
    },
  });

  const INPUTS = INPUTS_LIST.map(({ name, label, placeholder }) => {
    return (
      <Input.Wrapper
        key={name}
        label={label}
        style={{ gridArea: name }}
        styles={labelStyles}
      >
        <Input placeholder={placeholder} />
      </Input.Wrapper>
    );
  });

  return (
    <form className={classes.form}>
      {INPUTS}
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
            <Link
              leftText="Aceito os"
              link="Termos e Condições"
              rightText="da Plyr.me e confirmo que não publicarei conteúdo adulto no meu
            clube."
              href="#"
            />
          }
        />
      </div>
      <div className={classes.button}>
        <Button styles={buttonStyles} type="submit">
          Criar Conta
        </Button>
      </div>
      <div className={classes.login}>
        <AnchorLink href="#" leftText="Já tem um clube?" link="Faça o login" />
      </div>
    </form>
  );
}
