import * as yup from "yup";
export const schema = yup.object({
  name: yup.string().required("Campo obrigatório."),
  email: yup
    .string()
    .email("Por favor, insira um email válido.")
    .required("Campo obrigatório."),
  phone: yup.string().min(14, "Insira todos os números incluindo o DDD").required("Campo obrigatório."),
  password: yup
    .string()
    .min(8, "Informe no minímo 8 caracteres")
    .required("Campo obrigatório."),
  confirm: yup
    .string()
    .oneOf([yup.ref("password")], "Os campos devem ser iguais")
    .required("Campo obrigatório."),
  club: yup.string().required("Campo obrigatório."),
  check: yup.string().required("É preciso aceitar os Termos e Condições"),
});
