import React from "react";
import HeaderInput from "./HeaderInput";
import HeaderSignup from "./HeaderSignup";
import { Link, useNavigate } from "react-router-dom";


function Header({setProduct , checkLoginStatus , title}){
    const navigate = useNavigate()
    let loggedStats = JSON.parse(localStorage.getItem("loginStats"))
    function handleClick(){
        if(loggedStats === true){
            
            navigate("/Cart")
        }

    }
    return( 
        <div className="flex items-center justify-between gap-5 p-5 bg-orange-300">
            <Link to = "/"><h1 className="text-2xl">Fake Store</h1></Link>
            <HeaderInput title={title} setProduct={setProduct}/>
            <p onClick={handleClick} className="text-xl">Cart</p>
            <HeaderSignup checkLoginStatus = {checkLoginStatus}/>
            
        </div>
    
)}

export default Header;