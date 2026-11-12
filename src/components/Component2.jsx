import { useState } from "react"
import React from "react"

const Component2 = () => {
    let [co,setCo]=useState(0)
    console.log("component 2")
  return (
    <div>
        <h1>Component2
            </h1>
        <h3>{co}</h3>
        <button onClick={()=>setCo(co+1)}>click</button>
        </div>
  )
}

export default React.memo(Component2)