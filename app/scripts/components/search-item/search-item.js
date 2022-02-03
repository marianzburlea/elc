import React from 'react'

const SearchItem = ({ name, number, about, price, tags, picture }) => {
  return (
    <div className="search-item">
      <div className='search-item__title'>{name}</div>
      <div className='search-item__about'>{about}</div>
      <div className='search-item__price'>{price}</div>
      <div className='search-item__picture' style={{
        '--image': `url('${picture}')`
      }}></div>
    </div>
  )
}

export default SearchItem
