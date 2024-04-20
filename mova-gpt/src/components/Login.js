import React, { useState } from "react";
import loginBg from "../asset/loginBack.webp";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const signInToggler = () => {
    setIsSignIn((prev) => !prev);
  };

  return (
    <div className="w-full min-h-screen">
      <div className="h-full absolute top-0">
        <img
          src={loginBg}
          alt="login background"
          className="h-full object-cover z-0"
        />
      </div>

      <div className="z-10 relative w-full min-h-screen  flex justify-center items-center ">
        <div className="max-w-[400px] h-fit bg-black p-10 bg-opacity-85 rounded-lg">
          <h2 className="text-[2.15rem] font-sans text-white font-semibold">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h2>
          <form className="py-4">
            {!isSignIn && (
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="h-[2.5rem] bg-[#333333] text-white placeholder:text-[#8C8C8C] text-lg w-full p-6 font-normal rounded-md mb-4"
              />
            )}

            <input
              type="email"
              placeholder="Email"
              name="email"
              className="h-[2.5rem] bg-[#333333] text-white placeholder:text-[#8C8C8C] text-lg w-full p-6 font-normal rounded-md mb-4"
            />

            <input
              type="password"
              placeholder="Enter your password here"
              name="password"
              className="h-[2.5rem] bg-[#333333] text-white placeholder:text-[#8C8C8C] text-lg w-full p-6 font-normal rounded-md mb-6"
            />

            <button className="w-full text-center font-sans text-xl text-white py-2 px-4 rounded-lg cursor-pointer bg-red-600">
              {isSignIn ? "Sign In" : "Sign Up"}
            </button>
          </form>

          <p
            className="mt-2 font-sans text-white cursor-pointer"
            onClick={signInToggler}
          >
            {isSignIn
              ? "New to Mova? sign up"
              : "Already have account, sign in"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
