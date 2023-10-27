import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function HeaderInput({setProduct , title}){
        var value = JSON.parse(localStorage.getItem("search")) || ""
       const navigate = useNavigate()
        function handleChange(e){
                console.log("chnaged");
              setProduct(e.target.value)
              localStorage.setItem("search",JSON.stringify(e.target.value))
             if(title !== "cart") navigate("/")

        }
    return(
        <div className="flex rounded-3xl bg-white w-[40%] items-center">
                <img className="p-2 pr-0" src="/search.png" alt="" />
                <input onChange={handleChange} className="pl-2 text-lg outline-none bg-transparent w-full" value={value} ></input>
        </div>
)}

export default HeaderInput