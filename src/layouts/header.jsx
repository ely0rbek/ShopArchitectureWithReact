import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='contanier w-25 d-flex justify-content-between'>
        {/* <Link to={'/'}>Home</Link>
        <Link to={'/shop'}>Shop</Link>
      <Link to={'/contact'}>Contact</Link> */}
      <h1>Navbar</h1>
      <Link to={'/'}>Login</Link>
      <Link to={'/register'}>Register</Link>
    </div>
    // <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark mb-3">
    //   <div className="container-fluid">
    //     <Link className="navbar-brand" href="#">Carousel</Link>
    //     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarCollapse">
    //       <ul className="navbar-nav me-auto mb-2 mb-md-0">
    //         <li className="nav-item">
    //           <Link className="nav-link active" aria-current="page" href="#">Home</Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link className="nav-link" href="#">Link</Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</Link>
    //         </li>
    //       </ul>
    //       <form className="d-flex">
    //         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
    //         <button className="btn btn-outline-success" type="submit">Search</button>
    //       </form>
    //     </div>
    //   </div>
    // </nav>
  )
}

export default Header