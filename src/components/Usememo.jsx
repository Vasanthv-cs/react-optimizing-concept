import React, { useMemo, useState } from 'react'

const Usememo = () => {
    let [co,setCo]=useState(0);
    let [user,setUser]=useState("");



    let calculate=(n)=>{
        console.log("calculated");
        return n*n;
        
    }

    let sq=useMemo(()=>{
        return calculate(co)
    },[co])

  return (
    <div>{sq}
    <button onClick={()=>setCo(co+1)}>click</button>

    <hr />

    <input type="text"
    value={user}
    onChange={(e)=>setUser(e.target.value)} />

    </div>
  )
}

export default Usememo