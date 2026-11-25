import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthUserContext } from '../Context/AuthContextApi'

const Menu = () => {

  //! use contex
  let {authUser,logout}=useContext(AuthUserContext);

  //! authenticated user-> add user, profile ,logout
    let AuthenticatedUser=()=>{
    return <>
    
      <li>
             <NavLink to={"/add-user"}  
             className={({isActive})=>`${isActive? "bg-blue-700": "hover:bg-blue-800"} px-6 py-2 rounded-md font-semibold text-lg`}>
              Add User</NavLink>
        </li>
        <li>
             <NavLink to={"/profile"}  
             className={({isActive})=>`${isActive? "bg-blue-700": "hover:bg-blue-800"} px-6 py-2 rounded-md font-semibold text-lg flex items-center gap-2`}>
                <span>{authUser?.displayName}</span>
               <span>
                 <img src={authUser?.photoURL} alt="Profile_photo" 
                   className='w-[25px] h-[25px] rounded-full'/>
               </span>
              </NavLink>
            
        </li>
        <li>
           <button onClick={logout} className='px-4 py-2 rounded-md text-lg  cursore-pointer font-semibold hover:bg-rose-600'>
            Logout</button>
        </li>
        
       
    
    </>
}
  //! anonymous user-> login, register
  let AnonymousUser=()=>{
    return <>
    
      <li>
             <NavLink to={"/auth/login"}  
             className={({isActive})=>`${isActive? "bg-blue-700": "hover:bg-blue-800"} px-6 py-2 rounded-md font-semibold text-lg`}>
              Login</NavLink>
        </li>

        <li>
             <NavLink to={"/auth/register"} 
             className={({isActive})=>`${isActive? "bg-blue-700": "hover:bg-blue-800"} px-6 py-2 rounded-md font-semibold text-lg`}>
              Register</NavLink>
        </li>
        
    
    </>
  }

  return (
    <aside className='w-[500px] h-[70px]  '>
      <ul className='w-full h-[70px] flex justify-evenly items-center'>
        <li >
            <NavLink to={"/"}
            className={({isActive})=>  `${isActive? "bg-blue-700": "hover:bg-blue-800"} px-6 py-2  rounded-md font-semibold text-lg`} >Home</NavLink>
        </li>
        {authUser===null?<AnonymousUser/>:<AuthenticatedUser/>}
        
      </ul>
    </aside>
  )
}

export default Menu
