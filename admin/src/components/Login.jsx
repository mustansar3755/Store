import { useState } from "react";
import axios from "axios";
import { backendURl } from "../utils/config";
import { toast } from "react-toastify";

const Login = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      const respose = await axios.post(backendURl + "/api/user/admin", {
        email,
        password,
      });
      if (respose.data.success) {
        setToken(respose.data.token);
        toast.success('Login Successfully')
      } else {
        toast.error(respose.data.message);
    }
} catch (error) {
    console.log(error);
    toast.error(error.message);
    }
  };
  return (
    <div className=" flex justify-center items-center h-screen">
      <div className=" bg-white shadow-md rounded-lg max-w-md px-8 py-6">
        <h1 className=" text-2xl font-bold mb-4">Admin Panel</h1>
        <form onSubmit={onSubmitHandler}>
          <div className=" mb-3 min-w-72">
            <p className=" text-sm font-medium text-gray-700 mb-2">
              Email Address:
            </p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className=" rounded-md border border-gray-300 w-full px-3 py-2 outline-none"
              type="email"
              placeholder="your@gmail.com"
              required
            />
          </div>
          <div className=" mb-3 min-w-72">
            <p className=" text-sm font-medium text-gray-700 mb-2">Password:</p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className=" rounded-md border border-gray-300 w-full px-3 py-2 outline-none"
              type="password"
              placeholder="**********"
              required
            />
          </div>
          <button
            className=" px-3 py-2 w-full bg-black text-white rounded-md text-lg cursor-pointer hover:bg-black/90"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
