import React, { useState } from 'react'

export default function Hook() {
    const [num1, setNum1] = useState(0)
    const [num2, setnum2] = useState(0)
    const [rs, setRs] = useState('')
    function hanlde_Add(){
        setRs(num1*1 + num2*1)
    }
    function hanlde_Minus(){
        setRs(num1*1 - num2*1)
    }
    function hanlde_Mul(){
        setRs(num1*1 * num2*1)
    }
    function hanlde_Div(){
        setRs((num1*1 / num2*1).toFixed(2))
    }
    return (
        <div>
            <h1>Hello</h1>
            <h2>Result: {rs}</h2>
            <input value={num1} type='number' onChange={(e) => setNum1(e.target.value)} placeholder='Enter number a'/>
            <input value={num2} type='number' onChange={(e) => setnum2(e.target.value)} placeholder='Enter number b'/>
            <button   onClick={hanlde_Add} >Add</button>
            <button   onClick={hanlde_Minus} >Minus</button>
            <button   onClick={hanlde_Mul} >Mul</button>
            <button   onClick={hanlde_Div} >Div</button>
        </div>
    )
}
