
import React, { useState } from 'react'
import { useContext } from 'react'

function Counter({ price }) {
    
    const [count, setCount] = useState(1)
    const [totalprice, setPrice] = useState(price)

    function add() {
        setCount(count + 1)
        setPrice(price * (count + 1))
    }
    function subtract() {
        if (count > 1) {
            setCount(count - 1)
            setPrice(price * (count - 1))
        }
    }
    return (
        <div className='flex gap-10 items-center'>
            <p>{totalprice}</p>
            <div className='flex gap-4 items-center'>
                <p>{count}</p>
                <div className='flex flex-col'>
                    <button onClick={add}>+</button>
                    <button onClick={subtract}>-</button>
                </div>
            </div>
        </div>
    )
}

export default Counter