import React from 'react'
import './Cards.css'
function Cards({nameRobo,emailRobo,imageId}) {
  return (
    <div className='card-body'>
        <img src={`https://robohash.org/${imageId}`} alt='Robot'></img>
        <p>{nameRobo}</p>
        <p>{emailRobo}</p>
    </div>
  )
}

export default Cards