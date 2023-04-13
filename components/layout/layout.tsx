import React from 'react'
import Navbar from '../../components/Navbar/Navbar'

type Props = {
    children: React.ReactNode
}

const Layout : React.FC<Props> =({children}: any)=> {

  return(
		<div>
            <Navbar />
            {children}
            <footer>fotter</footer>
        </div>
  )
}
export default Layout