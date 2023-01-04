import React from 'react'
import PropTypes from 'prop-types'

function Collection(props) {
  return (
    <div className='bg-red-500 flex flex-col items-center'>
    <div className='sm:w-2/4 sm:h-2/4 w-24 h-5 bg-green-300 my-2 overflow-hidden' >
        <a href="#">
        <img src={props.image} className='w-full h-full sm:rounded-xl rounded-full' alt="" />
        
        </a>
    </div>
    <div>
    <h1 className='font-light text-xl text-gray-700 sm:block hidden'>Collection Name</h1>
    </div>
    </div>
  )
}

Collection.propTypes = {

}

export default Collection

