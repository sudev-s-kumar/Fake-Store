import React, { useEffect, useState } from "react";
import Header from "../Header/Header"
import Categories from "./Categories"
import Products from "./products";

function MainBody(){
    const [cat,updatedCat] = useState("")
    const [searchedProduct,setProduct] = useState("")
    

    
    useEffect(()=>{var search = JSON.parse(localStorage.getItem("search"))
    setProduct(search)},[])
return(
    <div className="">
        <Header setProduct={setProduct}/>
        <div className="flex ">
            <section className="bg-orange-300 w-[25%] h-[50vh] mt-20 ">
                <Categories updatedCat={updatedCat}/>
            </section>
            <section className="w-[75%] h-[85vh] overflow-y-scroll no-scrollbar mt-7"> 
                <Products searchedProduct={searchedProduct} cat={cat}/>
            </section>
        </div>
    </div>
)}

export default MainBody