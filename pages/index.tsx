import React, { useEffect, useState } from 'react'

const Home =()=> {

  const [productList, setProductList]= useState([])
  useEffect(()=>{
    fetch('/api/avo')
    .then(res => res.json())
    .then(({data, length})=> 
      
      setProductList(data)
    )
  },[])
  return(
    <div>
      <h1>holaa</h1>
      {/* {
        productList && productList.length &&
        productList.map((x,i)=> <p key={i}>{x.name}</p>)
      } */}
    </div>
  )
}
export default Home