import React from 'react'

function RemoveButton({id , removeFromCart}) {
    function handleClick(){
        let items = JSON.parse(localStorage.getItem("cartitems"))
         let newitems = items && items.filter((e)=>e!=id)
        
         localStorage.setItem("cartitems", JSON.stringify(newitems))
         removeFromCart(id)
    }
  return (
    <div><img onClick={handleClick} id = {id} className='h-5' src="./close.png" alt="" /></div>
  )
}
 export default RemoveButton