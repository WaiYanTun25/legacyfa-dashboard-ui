import { useState } from "react";
import { assets } from "@assets/index";
import { Button, Input } from "@src/components/ui";

export const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="flex h-screen flex-col md:flex-row">
      <div className="w-full md:w-1/2 h-full relative rounded-2xl p-10 md:hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${assets.images.loginImage})` }}
        ></div>
        <div className="relative z-10 flex items-center justify-center h-full w-full">
          <div className="flex flex-col items-center  w-full bg-white bg-opacity-75 p-3 rounded-lg gap-3">
            <h1 className="md:text-sm text-2xl font-bold text-primary mb-4">
              Legacy Dashboard
            </h1>
            <Input
              type="text"
              label="Username"
              placeholder="Enter your username"
              value={userName}
              onChange={(event) => setUserName(event.target.value)}
            />
            <Input
              type="password"
              label="Password"
              placeholder="Enter your password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <Button label="Login" onClick={() => console.error("test")} />
          </div>
        </div>
      </div>

      <div className="w-full md:flex items-center justify-center p-6 hidden">
        <div className="w-full md:w-1/2 flex items-center justify-center m-2">
          <div className="flex flex-col space-y-4 w-full max-w-md gap-3">
            <h1 className="text-4xl font-bold text-primary text-center">
              Legacy Dashboard
            </h1>
            <Input
              type="text"
              label="Username"
              placeholder="Enter your username"
              value={userName}
              onChange={(event) => setUserName(event.target.value)}
            />
            <Input
              type="password"
              label="Password"
              placeholder="Enter your password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <Button label="Login" onClick={() => console.error("testing")} />
          </div>
        </div>
        <div className="w-full md:w-1/2 h-full">
          <img
            src={assets.images.loginImage}
            className="w-full h-full object-cover rounded-2xl"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
