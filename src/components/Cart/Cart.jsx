import React, { useState } from 'react'
import Header from '../Header/Header'
import CartItems from './CartItems'

function Cart() {
  const [searchedProduct, setProduct] = useState("")
  return (
    <div>
        <Header title="cart" setProduct={setProduct} />
        <CartItems  searchedProduct={searchedProduct}/>
    </div>
  )
}

export default Cart