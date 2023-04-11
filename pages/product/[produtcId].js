import React from 'react'
import {useRouter} from 'next/router'

const ProductItem =()=> {
  const {query: {
    produtcId
  }} = useRouter()

  return(
    <div>
      <h1>ProductItem: {produtcId}</h1>
    </div>
  )
}
export default ProductItem