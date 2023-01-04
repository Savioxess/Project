import React from 'react'
import PropTypes from 'prop-types'

function Dropdown(props) {
  return (
    <div className={props.enabled == true?'block':'hidden'}>
        <div className='bg-gray-200 h-3/4 sm:w-96 w-screen absolute shadow-xl'>
            
        </div>
    </div>
  )
}

Dropdown.propTypes = {

}

export default Dropdown

