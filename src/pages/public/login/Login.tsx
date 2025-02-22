import React from "react";
import { assets } from "@assets/index";

export const Login = () => {
  return (
    <div className="flex h-screen flex-col md:flex-row">
      <div className="w-full md:w-1/2 h-full relative rounded-2xl p-10 md:hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${assets.images.loginImage})` }}
        ></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <form className="flex flex-col items-center justify-center space-y-4 w-full max-w-md bg-white bg-opacity-75 p-6 rounded-lg">
            <h1 className="text-2xl font-bold text-primary">
              Legacy Dashboard
            </h1>
            <input
              type="text"
              className="border p-2 rounded-md w-full"
              placeholder="Enter your username"
            />
          </form>
        </div>
      </div>

      <div className="w-full md:flex items-center justify-center p-6 hidden">
        <div className="w-full md:w-1/2 flex items-center justify-center m-2">
          <form className="flex flex-col items-center space-y-4 w-full max-w-md">
            <h1 className="text-4xl font-bold text-primary">
              Legacy Dashboard
            </h1>
            <input
              type="text"
              className="border p-2 rounded-md w-full"
              placeholder="Enter your username"
            />
          </form>
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
