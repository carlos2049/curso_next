import React from 'react'
import Link from 'next/link'

const Navbar =()=> {

  return(
		<nav>
			<menu>
				<Link href='/' legacyBehavior>
					<a >Home</a>
				</Link>
				<Link href='/about' legacyBehavior>
					<a >About</a>
				</Link >
			</menu>
		</nav>
  )
}
export default Navbar