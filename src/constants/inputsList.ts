type InputTypes = "name" | "phone" | "email" | "password" | "confirm" | "check" | "club"

type InputsProps = {
  label: string;
  name: InputTypes;
  placeholder: string;
}

export const INPUTS_LIST: InputsProps[] = [
  {
    label: "Nome",
    name: "name",
    placeholder: "Digite seu nome",
  },
  {
    label: "Email",
    name: "email",
    placeholder: "Digite seu email",
  },
  {
    label: "Celular/Whatsapp",
    name: "phone",
    placeholder: "(00)00000-0000",
  },
  {
    label: "Senha",
    name: "password",
    placeholder: "Digite sua senha",
  },
  {
    label: "Confirme sua senha",
    name: "confirm",
    placeholder: "Digite sua senha novamente",
  },
];
