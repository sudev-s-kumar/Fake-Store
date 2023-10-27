import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Products({cat, searchedProduct}) {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        if(cat.length>0){
            fetch('https://fakestoreapi.com/products/category/'+cat)
            .then(res=>res.json())
            .then(json=>{var newproduct = json.filter((e)=> e.title.toLowerCase().includes(((searchedProduct && searchedProduct.toLowerCase()) || ""))) 
            newproduct && setProducts(newproduct)})
        }
        else{
                 fetch('https://fakestoreapi.com/products')
                .then(res => res.json())
                .then(json => {
                    var newproduct = json.filter((e)=> (e.title.toLowerCase().includes(((searchedProduct && searchedProduct.toLowerCase()) || ""))) )
                    newproduct && setProducts(newproduct)

                })
        }}
        , [cat, searchedProduct])
const navigate = useNavigate()
        function handleClick(id){
            navigate(`/product/${id}`)
        }
        
    return (
        <div className="flex  flex-wrap gap-5 justify-evenly ">

            {products.map((product) => {
                return (<div onClick={()=>handleClick(product.id)} className="flex flex-col w-60 h-70 text-center text-xl border-2 border-orange-300 justify-between cursor-pointer">
                    <img className="h-60 w-60 p-2" src={product.image} alt="" />
                    <div className="bg-orange-300 flex flex-col max-h-[100px] ">
                    <span className="truncate">{product.title}</span>
                    <span >${product.price}</span>                    
                </div>
                </div>
                )
            })}
        </div>
    )
}

export default Products