import React from 'react'
import Navbar from '@components/Navbar/Navbar'
// import style from './layout.module.css'

type Props = {
    children: React.ReactNode
}


const Layout : React.FC<Props> =({children}: any)=> {

  return(
		// <div className={style.container}>
    <div className='container'> 
      <Navbar />
        {children}
      <footer className='container'>fotter</footer>
      <style jsx>
        {`
          .container {
            background : blue;
          }  
          
        `}
      </style>
    </div>
  )
}
export default Layout