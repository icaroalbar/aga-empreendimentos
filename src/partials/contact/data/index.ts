import { ContactProps, InputProps } from "@/@types";

export const dataInput = [
  {
    type: "text",
    placeholder: "Digite seu nome",
    name: "name",
  },
  {
    type: "email",
    placeholder: "Digite seu e-mail",
    name: "email",
  },
  {
    type: "text",
    placeholder: "Digite seu telefone de contato",
    name: "phone",
  },
];

export const data: ContactProps[] = [
  {
    title: "Fale conosco",
    subtitle:
      "Estamos dispostos a sanar quaisquer dúvidas que possam surgir. Caso queira falar conosco, basta preencher o formulário abaixo:",
  },
];
