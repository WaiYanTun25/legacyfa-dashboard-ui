import { ChangeEvent } from "react";

export interface InputProps {
  type?: "text" | "password" | "email" | "number";
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
