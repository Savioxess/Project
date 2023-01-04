import React from 'react'
import PropTypes from 'prop-types'
import Collections from './CollectionList'

function Landing(props) {
  return (
    <div className='flex w-full flex-col items-center'>
    <div className='w-full h-2/4 sm:p-20 p-10 sm:flex sm:flex-row flex-col sm:justify-between items-center bg-gray-200'>
        <div className='flex flex-col items-center'>
        <h1 className='sm:text-6xl text-3xl text-center sm-text-sm font-bold text-gray-600 text-bold'>Modern Sofa Collection</h1>
        <button className='bg-gray-800 text-white lg:p-2 p-1 lg:my-8 my-3'>Check Collection</button>
        </div>
        <img src="https://www.pngarts.com/files/7/Modern-Furniture-Transparent-Background-PNG.png" className='sm:h-2/4 sm:w-2/4 sm:block' alt="" />
    </div>
    <Collections />
    </div>
  )
}

Landing.propTypes = {

}

export default Landing

