import React, { useEffect, useState } from 'react'
import {useRouter} from 'next/router'

const ProductItem =()=> {
  const [pruduct, setProduct] = useState({
    name: ''
  })
  const {query: {
    produtcId
  }} = useRouter()
  useEffect(()=>{
    console.log(produtcId);
    if(produtcId){

      fetch(`/api/avo/${produtcId}`)
      .then(res => res.json())
      .then(data => setProduct(data)
      )
    }

  },[produtcId])

  return(
    <div>
      <h1>ProductItem: {pruduct && pruduct.name}</h1>
    </div>
  )
}
export default ProductItem