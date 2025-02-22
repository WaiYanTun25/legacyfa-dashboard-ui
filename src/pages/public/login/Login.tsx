import { assets } from "@assets/index";
import { Button, Input } from "@src/components/ui";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginShcema } from "@schemas/index";
import { LoginFormDataType } from "@pages/public/login/Login.type";

export const Login = () => {
  const {
    setValue,
    handleSubmit,
    trigger,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormDataType>({
    resolver: yupResolver(loginShcema),
  });

  const onSubmit = (data: LoginFormDataType) => {
    console.error(data);
  };

  return (
    <div className="flex h-screen flex-col md:flex-row">
      <div className="w-full md:w-1/2 h-full relative rounded-2xl p-10 md:hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-80"
          style={{ backgroundImage: `url(${assets.images.loginImage})` }}
        ></div>
        <div className="relative z-10 flex items-center justify-center h-full w-full">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col w-full bg-white bg-opacity-75 p-3 rounded-lg gap-3"
          >
            <h1 className="md:text-sm text-xl font-bold text-primary">
              Welcome Back 👋
            </h1>
            <span className="mb-4 text-gray-600">
              Enter your Credentials to access your account.
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
              onClick={() => console.error("test")}
              disabled={isSubmitting}
            />
          </form>
        </div>
      </div>

      <div className="w-full md:flex items-center justify-center p-6 hidden">
        <div className="w-full md:w-1/2 flex justify-center m-2">
          <div className="flex flex-col w-full max-w-md gap-3">
            <h1 className="text-xl font-bold text-primary">Welcome Back 👋</h1>
            <span className="mb-4 text-gray-600">
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
            <Button label="Login" onClick={() => console.error("testing")} />
          </div>
        </div>
        <div className="w-full md:w-1/2 h-full">
          <img
            src={assets.images.loginImage}
            className="w-full h-full object-cover rounded-2xl"
            alt="Login Image"
          />
        </div>
      </div>
    </div>
  );
};
