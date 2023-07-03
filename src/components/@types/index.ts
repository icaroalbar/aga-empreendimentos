import {
  TextareaHTMLAttributes,
  ButtonHTMLAttributes,
  InputHTMLAttributes,
  ReactNode,
} from "react";

import { UseFormRegister } from "react-hook-form";

export interface LinkProps {
  label: string | ReactNode;
  href: string;
}

export interface IconProps {
  icon: ReactNode;
}

export interface TitleProps {
  title: string;
  subtitle?: string;
}

export interface ContentProps {
  content: string;
}

export interface NavProps extends LinkProps {}

export interface HeaderProps extends TitleProps {
  subtitle: string;
}

export interface CompanyProps extends TitleProps, ContentProps {
  subtitle: string;
}

export interface AboutProps extends TitleProps, ContentProps, IconProps {
  key?: any;
}

export interface ContactProps extends TitleProps {
  subtitle: string;
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  register: UseFormRegister<any>;
  name: string;
}

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  cols?: number;
  rows?: number;
  placeholder: string;
  register: UseFormRegister<any>;
  name: string;
}

export interface FooterProps extends TitleProps {
  links: LinkProps[];
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
  disableTitle?: string;
  disabled?: boolean;
  size?: "sm" | "md" | "lg" | "full";
}
