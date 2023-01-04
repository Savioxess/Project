import React from 'react'
import PropTypes from 'prop-types'
import '@fortawesome/fontawesome-svg-core/styles.css';
function Navbar(props) {
  return (
    <div className="bg-gray-200 w-full flex justify-between items-center p-4 z-40 text-gray-800">
      <ul>
        <li className='font-bold lg:text-3xl sm:text-xl text-lg'><a href="#">SiteName</a></li>
      </ul>
      <ul className='flex items-center'>
        <li className='sm:mx-4 mx-1 lg:text-lg text-sm font-light'><a href="#">Home</a></li>
        <li className='sm:mx-4 mx-1 lg:text-lg text-sm font-light'><a href="#">Store</a></li>
        <li className='sm:mx-4 mx-1 lg:text-lg text-sm font-light'><a href="#">Contact</a></li>
        <li className='sm:mx-4 mx-1 lg:text-lg text-sm font-light  px-2 rounded-sm text-white bg-sky-800'><a href="#">Login</a></li>
        <button className='rounded sm:ml-5 ml-2 lg:block table' onClick={props.Dropbox}><i className="fa-solid fa-bars lg:text-2xl sm:text-xl text-sm"></i></button>
      </ul>
    </div>
  )
}

Navbar.propTypes = {

}

export default Navbar



