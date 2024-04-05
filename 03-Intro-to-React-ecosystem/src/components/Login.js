import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../utils/store/loginContext";

const Login = () => {
  const { userInfo, loginUser } = useContext(LoginContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo && userInfo.name) {
      return navigate("/");
    }
  }, [userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    const formdata = e.target;
    const email = formdata.email.value;
    const name = formdata.name.value;
    const password = formdata.password.value;
    const userData = { email, name, password };

    loginUser(userData);
  };

  return (
    <div className="login">
      <div className="login-bg w-full  h-screen z-[-1]"></div>
      <div className="w-full  h-[88vh] flex justify-center items-center">
        <div className="px-10 py-16 bg-black/75  backdrop-blur-sm rounded-lg">
          <h1 className="text-white text-3xl font-semibold mb-10">Login In</h1>
          <form className="flex flex-col gap-5" onSubmit={submitHandler}>
            <input
              type="email"
              placeholder="Email or Phone number"
              id="email"
              name="email"
              autoCapitalize="email"
              className=" text-[#8C8C8C] placeholder:text-[#8C8C8C] p-4  w-[400px] bg-[#333333] rounded-lg"
            />
            <input
              type="text"
              placeholder="Enter user name"
              id="name"
              name="name"
              autoComplete="off"
              className=" text-[#8C8C8C] placeholder:text-[#8C8C8C]  p-4 w-[400px] bg-[#333333] rounded-lg"
            />
            <input
              type="password"
              placeholder="Password"
              id="password"
              name="password"
              autoComplete="current-password"
              className=" text-[#8C8C8C] placeholder:text-[#8C8C8C]  p-4 w-[400px] bg-[#333333] rounded-lg"
            />

            <button className="py-4 bg-[#c14d2a] text-white rounded-lg font-semibold text-[1.25rem]">
              Login In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

// export const loginAction = async ({ request }) => {
//   const userData = await request.formData();

//   const data = {
//     email: userData.get("email"),
//     name: userData.get("name"),
//     password: userData.get("password"),
//   };

//   localStorage.setItem("user", JSON.stringify(data));

//   return redirect("/");
// };
