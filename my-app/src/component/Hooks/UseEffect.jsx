import React, { useEffect, useState } from 'react'

function UseEffect() {
    const[timer,setTimer]=useState(0)
    const cb=()=>{
        setTimer(timer=>timer+1)
    }
    UseEffect(()=>{
        setTimeout(cb,1000);
    });
    //fetch
    const[apiData,setApiData]=useState([]);
    useEffect(()=>{
        fetch()
        .then(response=>response.json)
        .then(apiData=>setApiData(apiData.id))

    },[]);
  return (
    <div>
    <h1>Counter{timer} sec</h1>
    <h2><Api></Api></h2>
    </div>
  )
}

export default UseEffect