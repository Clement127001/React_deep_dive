import { Form, redirect } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <div className="login-bg w-full  h-screen z-[-1]"></div>
      <div className="w-full  h-[88vh] flex justify-center items-center">
        <div className="px-10 py-16 bg-black/75  backdrop-blur-sm rounded-lg">
          <h1 className="text-white text-3xl font-semibold mb-10">Login In</h1>
          <Form className="flex flex-col gap-5" method="post">
            <input
              type="email"
              placeholder="Email or Phone number"
              id="email"
              name="email"
              className=" text-[#8C8C8C] placeholder:text-[#8C8C8C] p-4  w-[400px] bg-[#333333] rounded-lg"
            />
            <input
              type="text"
              placeholder="Enter user name"
              id="name"
              name="name"
              className=" text-[#8C8C8C] placeholder:text-[#8C8C8C]  p-4 w-[400px] bg-[#333333] rounded-lg"
            />
            <input
              type="password"
              placeholder="Password"
              id="password"
              name="password"
              className=" text-[#8C8C8C] placeholder:text-[#8C8C8C]  p-4 w-[400px] bg-[#333333] rounded-lg"
            />

            <button className="py-4 bg-[#c14d2a] text-white rounded-lg font-semibold text-[1.25rem]">
              Login In
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;

export const loginAction = async ({ request }) => {
  const userData = await request.formData();

  const data = {
    email: userData.get("email"),
    name: userData.get("name"),
    password: userData.get("password"),
  };

  localStorage.setItem("user", JSON.stringify(data));

  return redirect("/");
};
