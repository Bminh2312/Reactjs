import React, { useState } from 'react'

export default function Hook1() {
    const [flag,setFlag] = useState(true)
  return (
    <div className={flag?"hook1 active":"hook1"}>
        <h1>Hook 1</h1>
        <p>Flag: {flag?"true":"false"}</p>
        <button onClick={()=>setFlag(!flag)}>Change flag</button>
    </div>
  )
}
