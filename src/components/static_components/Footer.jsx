import React from 'react'
import PropTypes from 'prop-types'

function Footer(props) {
  return (
    <div className='flex p-5 justify-around bg-gray-900'>
        <div className='flex justify-around'>
        <div className='flex flex-col text-gray-400 mx-2'>
        <h1 className='sm:text-lg text-md text-white font-bold'>OUR COMPANY</h1>
        <a href="#" className='font-light sm:text-base text-sm'>About Us</a>
        <a href="#" className='font-light sm:text-base text-sm'>Blog</a>
        <a href="#" className='font-light sm:text-base text-sm'>Customer Stories</a>
      </div>
      <div className='flex flex-col text-gray-400 mx-2'>
        <h1 className='sm:text-lg text-md text-white font-bold'>SHOP BY ROOMS</h1>
        <a href="#" className='font-light sm:text-base text-sm'>Living Room</a>
        <a href="#" className='font-light sm:text-base text-sm'>Dining Room</a>
        <a href="#" className='font-light sm:text-base text-sm'>Bedroom</a>
        <a href="#" className='font-light sm:text-base text-sm'>Outdoor</a>
        <a href="#" className='font-light sm:text-base text-sm'>Modular Kitched</a>
        <a href="#" className='font-light sm:text-base text-sm'>Home Decor</a>
      </div>
      <div className='flex flex-col text-gray-400 mx-2'>
        <h1 className='sm:text-lg tet-md text-white font-bold'>NEED HELP</h1>
        <a href="#" className='font-light sm:text-base text-sm'>Customer Center</a>
        <a href="#" className='font-light sm:text-base text-sm'>Ask Expert</a>
        <a href="#" className='font-light sm:text-base text-sm'>Contact Us</a>
      </div>
        </div>
      
    </div>
  )
}

Footer.propTypes = {

}

export default Footer

