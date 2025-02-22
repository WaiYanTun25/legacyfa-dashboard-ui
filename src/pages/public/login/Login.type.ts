export interface LoginFormDataType {
  email: string;
  password: string;
}

export interface LoginFormProps {
  onSubmit: (data: LoginFormDataType) => void;
}
