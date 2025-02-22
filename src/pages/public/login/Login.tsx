import { assets } from "@assets/index";
import { LoginFormDataType } from "@pages/public/login/Login.type";
import { LoginForm } from "@pages/public/login/LoginForm";

export const Login = () => {
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
          <LoginForm onSubmit={onSubmit} />
        </div>
      </div>

      <div className="w-full md:flex items-center justify-center p-6 hidden">
        <div className="w-full md:w-1/2 flex justify-center m-2">
          <LoginForm onSubmit={onSubmit} />
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
