import { ChangeEvent } from "react";

export interface InputProps {
  type?: "text" | "password" | "email" | "number";
  label?: string;
  placeholder?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  trigger?: () => void;
}
