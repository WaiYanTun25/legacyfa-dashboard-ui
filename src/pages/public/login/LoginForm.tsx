import { Button, Input } from "@src/components/ui";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginShcema } from "@schemas/index";
import {
  LoginFormDataType,
  LoginFormProps,
} from "@pages/public/login/Login.type";

export const LoginForm = ({ onSubmit }: LoginFormProps) => {
  const {
    setValue,
    handleSubmit,
    trigger,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormDataType>({
    resolver: yupResolver(loginShcema),
  });
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-full bg-white bg-opacity-75 p-3 rounded-lg gap-3 md:max-w-md"
    >
      <h1 className="text-xl font-bold text-primary">Welcome Back 👋</h1>
      <span className="mb-4 text-sm text-gray-600">
        Enter your Credentials to access your account
      </span>
      <Input
        type="email"
        label="Email"
        placeholder="Enter your email"
        onChange={(event) => setValue("email", event.target.value)}
        trigger={trigger}
        error={errors.email?.message}
      />
      <Input
        type="password"
        label="Password"
        placeholder="Enter your password"
        onChange={(event) => setValue("password", event.target.value)}
        trigger={trigger}
        error={errors.password?.message}
      />
      <Button
        label="Login"
        onClick={() => console.error("testing")}
        disabled={isSubmitting}
      />
    </form>
  );
};
