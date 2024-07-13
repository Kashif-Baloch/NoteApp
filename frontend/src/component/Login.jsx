import { React, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();
  const login = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:5000/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const result = await response.json();
    if (result.Success) {
      localStorage.setItem("token", result.token);
      navigate("/note", { replace: true });
    } else {
      alert("Invalid Credentials");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/", { replace: true });
    }
  }, []);

  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="container mx-auto mt-20">
      <h1 className="text-center font-bold text-[3rem]">Please</h1>
      <h1 className="text-center font-bold text-[3rem]">Login To Continue</h1>
      <div className="container mx-auto px-6">
        <form onSubmit={login}>
          <div className="mb-6 container mx-auto w-[40vw]">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              required
              onChange={onChange}
              value={credentials.email}
              type="email"
              id="email"
              name="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500"
            />
          </div>
          <div className="mb-6 container mx-auto w-[40vw]">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <input
              required
              minLength={5}
              onChange={onChange}
              value={credentials.password}
              type="password"
              id="password"
              name="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500"
            />
          </div>
          <div className="flex items-center justify-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-400">
            <button
              data-modal-hide="defaultModal"
              type="submit"
              className="text-white bg-pink-400 hover:bg-pink-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-pink-400 dark:hover:bg-blue-700 dark:focus:ring-pink-500"
            >
              Login
            </button>
          </div>
        </form>
      </div>
      <h1 className="text-center">
        Don't Have an{" "}
        <Link to="/signup" className="cursor-pointer text-pink-500">
          Account
        </Link>
      </h1>
    </div>
  );
};

export default Login;
