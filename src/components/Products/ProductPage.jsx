import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../Header/Header';

function ProductPage() {
  const [searchedProduct, setProduct] = useState("")
  const { id } = useParams()
  const [product, setDetails] = useState("")
  const navigate = useNavigate()

  const [loginStatus, checkLoginStatus] = useState(JSON.parse(localStorage.getItem("loginStats")) || [])
  

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(json => setDetails(json))
  }, [id])

  function handleClick() {
    if (loginStatus === true) {
      let items = JSON.parse(localStorage.getItem("cartitems")) || [];
      if (product.id && !items.includes(product.id)) {
        items.push(product.id);
        localStorage.setItem("cartitems", JSON.stringify(items))
      }
      navigate("/Cart")

    }
    else {
      navigate("/login")
    }
  }
  return (
    product && <div>
      <Header checkLoginStatus ={checkLoginStatus} setProduct={setProduct} />
      <div className='flex justify-evenly mt-40 items-center'>
        <div>
          <img className='h-96' src={product.image} alt="" />
        </div>
        <div className='flex flex-col gap-10 text-xl w-[50%]'>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <div className='flex gap-2 items-center border-2 w-fit border-black p-2 text-xl'>
            {product.rating.rate}
            <img className='h-5 mix-blend-multiply' src="/star.png" alt="" />
            <p>|</p>
            {product.rating.count}
          </div>
          <button onClick={handleClick} className="self-start p-5 bg-gray-400 rounded-3xl text-2xl">Add To Cart</button>
        </div>
      </div>

    </div>
  )
}

export default ProductPage