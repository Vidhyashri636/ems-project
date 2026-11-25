import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import toast from "react-hot-toast";
import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import { __AUTH } from "../backend/firebaseConfig";
import Spinner from "../Helper/Spinner";

const Register = () => {
    let navigate=useNavigate();
let [userData,setUserData]=useState({
    username:"",
    password:"",
    confirmPassword:"",
})

let [showPassword1, setShowPassword1] = useState(true);
let [showPassword2, setShowPassword2] = useState(true);
let [isLoading,setisLoading]=useState(false);

//! destructure the userdata
let {username,password,confirmPassword}=userData;

//! handle change function
let handleInputChange=(e)=>{
    let value=e.target.value;
    let name=e.target.name;
    setUserData({...userData,[name]:value});
}

//! handle submit fuction
let handleSubmit=async (e)=>{
    e.preventDefault();
    setisLoading(true)
    try{
      if(password===confirmPassword){
         //! createUserWithEmailAndPassword()
      let registeredUser= await createUserWithEmailAndPassword(__AUTH,username,password)
      console.log(registeredUser);

      //* send email verification
      sendEmailVerification(registeredUser.user)

      //* update photoURL and displayName
      updateProfile(registeredUser.user,{
        displayName:"Vidhyashri",
        photoURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSheI9UkWllIpSNbs2UdE18KLLswgDON9qzXg&s"
      })
      toast.success(`Email verification send to your registered ${username}`)
      toast.success("User has been registered successfully")
      navigate("/auth/login")
      }else{
        toast.error("Please verify your password")
      }
    }catch(error){
      toast.error(error.message);
      console.log("error while register:",error);
      
    }
    setisLoading(false);
};

 

  let togglePassword1 = () => {
    setShowPassword1(!showPassword1);
  };
  let togglePassword2 = () => {
    setShowPassword2(!showPassword2);
  };
  return (
    <section className="w-[100vw] h-[calc(100vh-70px)] flex justify-center items-center">
      <article className="w-[30vw] bg-gray-800 text-white p-5 rounded-xl">
        <header className="py-2">
          <h1 className="text-3xl font-semibold uppercase text-center py-3">
            Register
          </h1>
        </header>
        <main className="w-full p-3">
          <form onSubmit={handleSubmit}>
            <div className="w-full flex flex-col gap-2 mb-2">
              <label htmlFor="username" className="text-lg">
                Username
              </label>
              <input
                type="email"
                name="username"
                id="username"
                placeholder="Enter your username.."
                className="outline-none py-2 border border-gray-400 px-2 text-lg rounded-md hover:ring-1 hover:ring-blue-600"
                value={username} onChange={handleInputChange}
              />
            </div>
            <div className="w-full flex flex-col gap-2 mb-2 relative">
              <label htmlFor="password" className="text-lg">
                Password
              </label>
              <input
                type={showPassword1 ? "password" : "text"}
                name="password"
                id="password"
                placeholder="Enter your password.."
                className="outline-none py-2 border border-gray-400 px-2 text-lg rounded-md hover:ring-1 hover:ring-blue-600"
                value={password} onChange={handleInputChange}
              />
              <span
                onClick={togglePassword1}
                className="absolute right-[10px] top-[50px] text-lg cursor-pointer"
              >
                {showPassword1 ? <IoEyeOff /> : <IoEye />}
              </span>
            </div>
            <div className="w-full flex flex-col gap-2 mb-2 relative">
              <label htmlFor="password" className="text-lg">
                Confirm Password
              </label>
              <input
                type={showPassword2 ? "password" : "text"}
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirm your password.."
                className="outline-none py-2 border border-gray-400 px-2 text-lg rounded-md hover:ring-1 hover:ring-blue-600"
                value={confirmPassword} onChange={handleInputChange}
              />
              <span
                onClick={togglePassword2}
                className="absolute right-[10px] top-[50px] text-lg cursor-pointer"
              >
                {showPassword2 ? <IoEyeOff /> : <IoEye />}
              </span>
            </div>
            <div className="w-full flex justify-center items-center mb-2 mt-3 p-2">
              <NavLink to={"/auth/login"} className={"hover:underline"}>
                Already have an account?
              </NavLink>
            </div>
            <div className="w-full flex justify-center items-center">
              <button className="px-20 py-2 bg-blue-600 hover:bg-blue-700 text-lg font-semibold rounded-lg mt-2 cursor-pointer">
                Register
              </button>
            </div>
          </form>
        </main>
      </article>
      {isLoading && <section className="w-[100%] h-[100vh] bg-black/50 fixed top-0">
       <Spinner/>
      </section>}
    </section>
  );
};

export default Register;