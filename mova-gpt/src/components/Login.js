import { useRef, useState } from "react";
import { validateForm } from "../utils/validateForm";
import loginBg from "../asset/loginBack.webp";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [formValidations, setFormValidations] = useState({});

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const errorStyle = "font-sans text-md text-red-600 mt-2";

  const signInToggler = () => {
    setIsSignIn((prev) => !prev);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    const validationResult = validateForm(
      emailRef.current.value,
      passwordRef.current.value
    );

    setFormValidations(validationResult);
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
        <div className="sm:max-w-[400px] max-w-[90%] h-fit bg-black p-10 bg-opacity-85 rounded-lg">
          <h2 className="text-[2.15rem] font-sans text-white font-semibold">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h2>
          <form className="py-4" onSubmit={formSubmitHandler}>
            {!isSignIn && (
              <input
                required
                type="text"
                placeholder="Name"
                ref={nameRef}
                className="h-[2.5rem] bg-[#333333] text-white placeholder:text-[#8C8C8C] text-lg w-full p-6 font-sm rounded-md"
              />
            )}
            <input
              type="email"
              placeholder="Email"
              ref={emailRef}
              className={`h-[2.5rem] bg-[#333333] text-white placeholder:text-[#8C8C8C] text-lg w-full p-6 font-sm rounded-md mt-4  ${
                formValidations &&
                formValidations.emailErrorMessage &&
                "border-2 border-red-500"
              }`}
            />
            {formValidations && formValidations.emailErrorMessage && (
              <p className={errorStyle}>{formValidations.emailErrorMessage}</p>
            )}
            <input
              type="password"
              placeholder="Enter your password here"
              ref={passwordRef}
              className={`h-[2.5rem] bg-[#333333] text-white placeholder:text-[#8C8C8C] text-lg w-full p-6 font-sm rounded-md mt-4 ${
                formValidations &&
                formValidations.passwordErrorMessage &&
                "border-2 border-solid border-red-500"
              }`}
            />
            {formValidations && formValidations.passwordErrorMessage && (
              <p className={errorStyle}>
                {formValidations.passwordErrorMessage}
              </p>
            )}
            <button className="w-full text-center font-sans text-xl text-white py-2 px-4 rounded-lg cursor-pointer bg-red-600 mt-6">
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
