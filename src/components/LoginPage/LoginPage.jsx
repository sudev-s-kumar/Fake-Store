import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage(){
    const [username, uName] = useState("");
  const [pass, userPassword] = useState("");
  const navigate = useNavigate();
  const [loggedIn, setLogin] = useState(true);
  var loginStatus = false
 
  
  function handleClick(){
    navigate("/SignIn")
  }
  
  function userName(event) {
    uName(event.target.value);
  }
   
  const [passwordType, setPasswordType] = useState(true)
  function typeChange(){
    setPasswordType(!passwordType)
  }
  

  function password(event) {
    userPassword(event.target.value);
  }  
   localStorage.setItem("loginStats", JSON.stringify(loginStatus));  
  function isLoggedIn(event){
    event.preventDefault()
    let users = JSON.parse(localStorage.getItem("usernames")) || [];
    let passwords = JSON.parse(localStorage.getItem("passwords")) || [];
    const index = (element) => element === username;
    const i = users.findIndex(index);
    
   
    if (passwords[i] === pass && users[i] === username){
      loginStatus = true
      localStorage.setItem("loginStats", JSON.stringify(loginStatus)); 
      localStorage.setItem("loggedUser",JSON.stringify(username))     
      navigate(-1)
    }
    else{
      setLogin(false)
      
    }
  }
  
  return (
        <div className='flex justify-center items-center h-[100vh]'>
             <div className='flex flex-col gap-10 justify-center items-center text-[50px] bg-slate-100 p-28 '>
            <h1 >Welcome Back</h1>
        <form onSubmit={isLoggedIn} className='flex flex-col gap-5 text-3xl'>
            <label htmlFor="uname">Username:</label>
              <input 
                onChange={userName}
                id="uname"
                placeholder="Enter Username "
                className='border-2 border-black rounded-3xl pl-3 h-14 w-96' 
              />
            <label htmlFor="password">Password:</label>
            <div className='flex items-center justify-start gap-4'>
                     <input
                onChange={password}
                id="password"
                placeholder="Enter Password "
                className='border-2 border-black rounded-3xl pl-3 h-14 w-96'
                type={passwordType?"password":""}
              />
              <img onClick={typeChange} className={`h-10 w-10 ${passwordType?"hidden":"block"}`} src="/eye.png" alt="" />
              <img onClick={typeChange} className={`h-10 w-10 ${passwordType?"block":"hidden"}`} src="/open-eye.png" alt="" />
            </div>
         
            <p className={`text-red-600 text-center ${loggedIn ? "hidden" : "block"}`}>
              Enter valid Username or Password
            </p>
            <button className='bg-orange-400 p-2 rounded-3xl' type="submit">Login</button>
            </form>
            
            <button onClick={handleClick} className='bg-orange-400 p-2 text-3xl w-full rounded-3xl' type="submit">New User?</button>
            
            
            </div>   
        </div>
       
  );
}
export default LoginPage
