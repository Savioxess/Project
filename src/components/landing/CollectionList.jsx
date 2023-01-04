import React, {useState, useEffect} from 'react'
import PropTypes, { element } from 'prop-types'
import Collection from '../collections/Collection'

function CollectionList(props) {
  const [obj, setObj] = useState([]) 

  const getData = async () => {
    let url = 'https://fakestoreapi.com/products?limit=5'
    let data = await fetch(url)
    let parsedData = await data.json()

    await setObj(parsedData)
    console.log(obj);
  }

  useEffect(()=> {
    getData()
  }, [])

  return (
    <div className='w-3/4 p-6 bg-gray-200 my-10 rounded-xl'>
      <h1 className='text-3xl text-gray-800 font-medium'>Top Picks For You</h1>
      <div className='sm:flex sm:flex-row grid gap-1 grid-cols-2'>
        {obj.map(element => {
          return <Collection image={element.image} />
        })}
      </div>
    </div>
  )
}

CollectionList.propTypes = {

}

export default CollectionList

