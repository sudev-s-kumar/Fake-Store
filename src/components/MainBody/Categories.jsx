import React, { useEffect,useState } from "react";

function Categories({updatedCat}){
    const [categories,setCategories] = useState([])
    

    
    useEffect(  
    ()=>{fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=>setCategories(json))}
    ,[])
    function handleClick(category){
        updatedCat(category)
    }
    function resetClick(){
        updatedCat("")
    }
    return(
        <div className="flex flex-col gap-5 pt-5 justify-evenly h-full ">
            <h1 onClick={()=>resetClick()} className="text-center text-3xl underline cursor-pointer">Categories</h1>
            {categories.map((category)=>{
                return (<div onClick={()=>handleClick(category)} className="bg-orange-400 h-10 text-center w-[75%] p-2 rounded-3xl text-xl m-auto cursor-pointer">
                    {category}
                    </div>
                )})}
        </div>
)}

export default Categories