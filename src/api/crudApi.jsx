import axios from "axios"

//! c-Create the new users or add the user
export let createUsers =(data)=>{
    return axios.post("http://localhost:3001/users",data);
};

//! R-Access the users
//! ger() --used to access all the users 
export let getUsers=()=>{
 return axios.get("http://localhost:3001/users")
};

//! U-update the user
//! put()
export let updateUser=(id,data)=>{
    return axios.put(`http://localhost:3001/users/${id}`,data);
}

//! D-delete user
export let deleteUser=(id)=>{
    return axios.delete(`http://localhost:3001/users/${id}`);
};

