import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
         <nav className="d-flex bg-primary">
          <div className='w-50'>
           <h3 className="text-white ms-3">Welcome to Dairy<br/> Management System</h3>
           </div>
           <div className='w-50 text-end mt-3'>
           <Link className='btn btn-warning  btn me-4 fs-5 p-1 ' to={'/home'} >Home</Link>
           <Link className='btn btn-warning btn me-4 fs-5 p-1' to={'/about'}>About</Link>
           <Link className='btn btn-warning btn me-4 fs-5 p-1' to={'/contact'}>ContactUs</Link>
           <Link className='btn btn-warning btn me-4 fs-5 p-1' to={'/review'}>Review</Link>
           <Link className='btn btn-warning btn me-4 fs-5 p-1' to={'/login'}>SignIn </Link>
           <Link className='btn btn-warning btn me-4 fs-5 p-1' to={'/search'}>Search </Link>
           </div>
           </nav>
    </div>
  )
}

export default Header