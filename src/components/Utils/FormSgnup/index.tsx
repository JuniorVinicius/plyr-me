"use client";
import React, { useState } from "react";
import {
  Button,
  Checkbox,
  Input,
  InputBase,
  MantineTheme,
} from "@mantine/core";
import { INPUTS_LIST, schema } from "@/constants";
import { useStyles } from "./styles";
import AnchorLink from "../AnchorLink";
import Link from "../Link";
import { Controller, FieldError, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IMaskInput } from "react-imask";

type FormValues = {
  name: string;
  phone: string;
  email: string;
  password: string;
  confirm: string;
  check: string;
  club: string;
};

export default function FormSignup() {
  const [isChecked, setIsChecked] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormValues) => {
    try {
      console.log(data);
      // API CALL
    } catch (error) {
      //ERROR
    }
  };

  const { classes } = useStyles();
  const labelStyles = (theme: MantineTheme, error?: FieldError) => ({
    label: {
      color: error ? "red" : theme.colors.text[1],
      fontWeight: 400,
    },
  });

  const buttonStyles = (theme: MantineTheme) => ({
    root: {
      background: theme.colors.button[0],
      color: theme.colors.button[1],
      fontWeight: 700,
    },
  });

  const INPUTS = INPUTS_LIST.map(({ name, label, placeholder }) => {
    return (
      <Controller
        key={name}
        name={name}
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange }, fieldState: { error } }) => (
          <Input.Wrapper
            key={name}
            label={label}
            style={{ gridArea: name }}
            styles={(theme) => labelStyles(theme, error)}
            error={error?.message}
          >
            {name === "phone" ? (
              <InputBase
                placeholder={placeholder}
                autoComplete="off"
                onChange={({ target: { value } }: any) => {
                  onChange(value);
                }}
                error={!!error?.message}
                component={IMaskInput}
                mask="(00)00000-0000"
              />
            ) : (
              <Input
                placeholder={placeholder}
                autoComplete="off"
                type={
                  name === "password" || name === "confirm"
                    ? "password"
                    : "text"
                }
                onChange={({ target: { value } }) => {
                  onChange(value);
                }}
                error={!!error?.message}
              />
            )}
          </Input.Wrapper>
        )}
      />
    );
  });

  return (
    <form
      className={classes.form}
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
    >
      {INPUTS}
      <div className={classes.inputClub}>
        <Controller
          name="club"
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange }, fieldState: { error } }) => (
            <Input.Wrapper
              label="Nome do seu clube"
              className={classes.clubInput}
              styles={(theme) => labelStyles(theme, error)}
              error={error?.message}
            >
              <Input
                placeholder="Digite o nome do seu clube"
                onChange={({ target: { value } }) => {
                  onChange(value);
                }}
                error={error?.message}
              />
            </Input.Wrapper>
          )}
        />
        <span
          className={`${classes.infoText} ${
            !!errors?.club ? classes.errorLabel : ""
          }`}
        >
          .plyr.me
        </span>
      </div>
      <div className={classes.checkInput}>
        <Controller
          name="check"
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange }, fieldState: { error } }) => (
            <Checkbox
              className={classes.infoText}
              checked={isChecked}
              onChange={({ target: { value } }) => {
                setIsChecked((prev) => !prev);
                onChange(!isChecked ? value : "");
              }}
              error={error?.message}
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
          )}
        />
      </div>
      <div className={classes.button}>
        <Button styles={buttonStyles} type="submit">
          CRIAR CONTA
        </Button>
      </div>
      <div className={classes.login}>
        <AnchorLink href="#" leftText="Já tem um clube?" link="Faça o login" />
      </div>
    </form>
  );
}
