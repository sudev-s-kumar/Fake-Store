import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function HeaderSignup({checkLoginStatus}){
    const navigate = useNavigate()
    const [isloggedin, setIsLoggedIn] = useState(JSON.parse(localStorage.getItem("loginStats")))
    let loggedUser = JSON.parse(localStorage.getItem("loggedUser"))
        
    function handleClick(){
       setIsLoggedIn(false)
       
        localStorage.setItem("loginStats", JSON.stringify(false))
        navigate("/")
        
    }
    return(
        
        <div className="flex gap-10"><Link to = "/Login">
            <h1 className={`${isloggedin?"hidden":"hover:text-blue-500 text-xl"}`}>Log In</h1></Link>
            <h1 className={`${isloggedin?"text-xl ":"hidden"}`}>{loggedUser}</h1>
            <h1 onClick={handleClick} className={`${isloggedin?"text-xl hover:text-blue-500":"hidden"}`}>log Out</h1>
        </div>
        
        
)}

export default HeaderSignup