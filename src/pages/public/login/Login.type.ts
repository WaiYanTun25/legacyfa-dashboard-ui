export interface LoginFormDataType {
  email: string;
  password: string;
}

export interface UserDataType {
  email: string;
  username: string;
}

export interface LoginFormProps {
  onSubmit: (data: LoginFormDataType) => void;
  isSubmitting: boolean;
}
