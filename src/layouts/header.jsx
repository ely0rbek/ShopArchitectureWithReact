import React from 'react'
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <div className='contanier d-flex justify-content-between'>
        <Link to={'/'}>Home</Link>
        <Link to={'/shop'}>Shop</Link>
        <Link to={'/portfolio'}>Portfolio</Link>
        <Link to={'/contact'}>Contact</Link>
    </div>
  )
}

export default Header