import { useState } from "react"
import Component2 from "./Component2"
import React from "react"


const Component1 = () => {
    let [co,setCo]=useState(0)

     console.log("component 1")

  return (
    <div>
        <h1>component 1</h1>
        <h4>{co}</h4>
        <button onClick={()=>setCo(co+1)}>click</button>
        <Component2/>
    </div>
  )
}

export default React.memo(Component1)