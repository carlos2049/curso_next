import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Navbar'

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
      <Navbar />
      <h1>holaa</h1>
      {
        productList && productList.length &&
        productList.map((x,i)=> <p key={i}>{x.name}</p>)
      }
    </div>
  )
}
export default Home