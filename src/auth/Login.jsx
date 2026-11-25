import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { NavLink, useNavigate } from "react-router-dom";
import { __AUTH } from "../backend/firebaseConfig";

const Login = () => {
  let navigate=useNavigate();
  let [showPassword, setShowPassword] = useState(true);

  let [userData, setuserDate]=useState({
    username:"",
    password:"",
  })

  //! destructure the userdata
  let {username, password}=userData;

  //! handle change function
  let handleInputChange=(e)=>{
    let value=e.target.value;
    let name=e.target.name;
    setuserDate({...userData,[name]:value})
  }

  //! handle submit function
  let handleSubmit=async(e)=>{
    e.preventDefault();
    try{
      //& sign in with email and password
      let loggedinUser= await signInWithEmailAndPassword(__AUTH, username, password);
      if(loggedinUser?.user?.emailVerified===true) {   //& optional chaining
          toast.success("user logged in successfully")
          navigate("/");
      }  else{
        toast.error("Please veripy your email")
      }
    }catch(error){
      toast.error(error.message);
      console.log("error while login:" ,error);
      
    }
  }
  let togglePassword = () => {
    setShowPassword(!showPassword);

  };

  
  return (
    <section className="w-[100vw] h-[calc(100vh-70px)] flex justify-center items-center">
      <article className="w-[30vw] bg-gray-800 text-white p-5 rounded-xl">
        <header className="py-2">
          <h1 className="text-3xl font-semibold uppercase text-center py-3">
            Login
          </h1>
        </header>
        <main className="w-full p-3">
          <form onSubmit={handleSubmit}>
            <div className="w-full flex flex-col gap-2 mb-2">
              <label htmlFor="username" className="text-lg">
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Enter your username.."
                className="outline-none py-2 border border-gray-400 px-2 text-lg rounded-md hover:ring-1 hover:ring-blue-600"
                value={username}
                onChange={handleInputChange}
              />
            </div>
            <div className="w-full flex flex-col gap-2 mb-2 relative">
              <label htmlFor="password" className="text-lg">
                Password
              </label>
              <input
                type={showPassword ? "password" : "text"}
                name="password"
                id="password"
                placeholder="Enter your password.."
                className="outline-none py-2 border border-gray-400 px-2 text-lg rounded-md hover:ring-1 hover:ring-blue-600"
                value={password}
                onChange={handleInputChange}
              />
              <span
                onClick={togglePassword}
                className="absolute right-[10px] top-[50px] text-lg cursor-pointer"
              >
                {showPassword ? <IoEyeOff /> : <IoEye />}
              </span>
            </div>
            <div className="w-full flex justify-between items-center mb-2 mt-3 p-2">
              <NavLink to={"/auth/register"} className={"hover:underline"}>
                Don't have an account?
              </NavLink>
              <NavLink className={"hover:underline"} to={"/auth/forgot-password"}>
                Forgot Password
              </NavLink>
            </div>
            <div className="w-full flex justify-center items-center">
              <button className="px-20 py-2 bg-blue-600 hover:bg-blue-700 text-lg font-semibold rounded-lg mt-2 cursor-pointer">
                Login
              </button>
            </div>
          </form>
        </main>
      </article>
    </section>
    
  );
};

export default Login;