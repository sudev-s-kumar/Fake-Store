import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignIn(){
    const [username, uName] = useState("");
  const [pass, userPassword] = useState("");
  const [conPass, conPassword] = useState("");
  const navigate = useNavigate();
  const [SignedIn, setSignin] = useState(true);
  
   function userName(event) {
    uName(event.target.value);
  }
   
  const [passwordType, setPasswordType] = useState(true)
  function typeChange(){
    setPasswordType(!passwordType)
  }
  
  const [confirmPass, setConfirmType] = useState(true)
  function typeConfirm(){
    setConfirmType(!confirmPass)
  }

  function password(event) {
    userPassword(event.target.value);
  }  

  function confirmPassword(event) {
    conPassword(event.target.value);
  }  
 function isSignedIn(event){
  
  if (conPass === pass){
    let users = JSON.parse(localStorage.getItem("usernames")) || [];
      users.push(username);
      localStorage.setItem("usernames", JSON.stringify(users));
      let passwords = JSON.parse(localStorage.getItem("passwords")) || [];
      passwords.push(pass);
      localStorage.setItem("passwords", JSON.stringify(passwords));
    navigate("/")
  }
  else{
    setSignin(false)
    event.preventDefault()
  }
}

  return (
        <div className='flex justify-center items-center h-[100vh]'>
             <div className='flex flex-col gap-10 justify-center items-center text-[50px] bg-slate-100 p-20 '>
            <h1 >Welcome </h1>
        <form onSubmit={isSignedIn} className='flex flex-col gap-5 text-3xl'>
            <label htmlFor="uname">Username:</label>
              <input 
                onChange={userName}
                id="uname"
                placeholder="Enter Username "
                className='border-2 border-black rounded-3xl pl-3 h-14 w-96' 
                required
              />
            <label htmlFor="password">Password:</label>
            <div className='flex items-center justify-start gap-4'>
                     <input
                onChange={password}
                id="password"
                placeholder="Enter Password "
                className='border-2 border-black rounded-3xl pl-3 h-14 w-96'
                type={passwordType?"password":""}
                required
              />
              <img onClick={typeChange} className={`h-10 w-10 ${passwordType?"hidden":"block"}`} src="/eye.png" alt="" />
              <img onClick={typeChange} className={`h-10 w-10 ${passwordType?"block":"hidden"}`} src="/open-eye.png" alt="" />
            </div>
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <div className='flex items-center justify-start gap-4'>
                     <input
                onChange={confirmPassword}
                id="confirmPassword"
                placeholder="Enter Password "
                className='border-2 border-black rounded-3xl pl-3 h-14 w-96'
                type={confirmPass?"password":""}
                required
              />
              <img onClick={typeConfirm} className={`h-10 w-10 ${confirmPass?"hidden":"block"}`} src="/eye.png" alt="" />
              <img onClick={typeConfirm} className={`h-10 w-10 ${confirmPass?"block":"hidden"}`} src="/open-eye.png" alt="" />
            </div>
         
            <p className={`text-red-600 text-center ${SignedIn ? "hidden" : "block"}`}>
              Enter valid Username or Password
            </p>
            <button className='bg-orange-400 p-2 rounded-3xl' type="submit">SignIn</button>
            </form>
            
            
            
            
            </div>   
        </div>
       
  );
}
export default SignIn