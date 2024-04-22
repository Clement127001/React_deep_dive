import { useRef, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { validateForm } from "../utils/validateForm";
import loginBg from "../asset/loginBack.webp";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [formValidations, setFormValidations] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useDispatch();

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const errorStyle = "font-sans text-md text-red-600 mt-2";

  const signInToggler = () => {
    setIsSignIn((prev) => !prev);
    setFormValidations({});
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const name = nameRef?.current?.value || null;

    //validation on inputs
    const validationResult = validateForm(email, password);
    setFormValidations(validationResult);

    if (validationResult) {
      setIsSubmitting(false);
      return;
    }

    //sign up
    if (!isSignIn) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;

          updateProfile(auth.currentUser, {
            displayName: name,
          })
            .then(() => {
              dispatch(
                addUser({
                  displayName: user.displayName,
                  email: user.email,
                  uid: user.uid,
                })
              );
              setIsSubmitting(false);
            })
            .catch((error) => {
              // An error occurred
              // ...
            });

          // console.log(user);
        })
        .catch((error) => {
          // const errorCode = error.code;
          // const errorMessage = error.message;

          const err = {
            emailErrorMessage: "Email is already in use, try to sign in",
          };
          setFormValidations({ ...err });

          setIsSubmitting(false);
        });
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;

          setIsSubmitting(false);
        })

        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          console.log(errorCode);

          setFormValidations({
            passwordErrorMessage: "Invalid credentials",
          });
          setIsSubmitting(false);
        });
    }
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

            <button
              className={`w-full  font-sans text-xl text-white py-2 px-4 rounded-lg cursor-pointer bg-red-600 mt-6 flex items-center  justify-center ${
                isSubmitting ? "sign-in" : ""
              }`}
            >
              {isSignIn
                ? isSubmitting
                  ? "Signing In"
                  : "Sign In"
                : isSubmitting
                ? "Signing Up"
                : "Sign Up"}
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
