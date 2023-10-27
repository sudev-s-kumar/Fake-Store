import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Counter from './Counter'
import RemoveButton from './removeButton'


function CartItems({ searchedProduct }) {


  const [products, setProducts] = useState([])
  const [cartIds, setCartIds] = useState([])
  const [cartItems, setCartItems] = useState(null)

  const removeFromCart = (id) => {

    setCartItems(prev => prev.filter(ele => ele.id !== id))
  }
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/`)
      .then(res => res.json())
      .then(json => {
        var newproduct = json.filter((e) => e.title.toLowerCase().includes((searchedProduct &&searchedProduct.toLowerCase() || "")))
        newproduct && setProducts(newproduct)
        console.log(newproduct);
      })
  }, [searchedProduct])
  useEffect(() => {

    let cart = JSON.parse(localStorage.getItem("cartitems")) || [];
    setCartIds(cart)

    const items = products.length > 0 && products.filter(prod => cart.includes(prod.id));

    setCartItems(items)
  }, [products])






  return (
    <div className='flex flex-col justify-start items-center h-[80vh] w-full pt-20 gap-5 overflow-y-scroll no-scrollbar'>

      {cartItems && cartItems.map((cartItems) => {
        return (<div className="flex w-[80%] h-36 gap-5 text-center text-xl border-2 justify-between items-center cursor-pointer px-3">
          <img className="h-32 w-40 p-2" src={cartItems.image} alt="" />
          <span className="truncate w-[50%]">{cartItems.title}</span>
          <Counter price={cartItems.price} />
          <RemoveButton id={cartItems.id} removeFromCart={removeFromCart} />
        </div>
        )
      })}

    </div>
  )
}

export default CartItems
