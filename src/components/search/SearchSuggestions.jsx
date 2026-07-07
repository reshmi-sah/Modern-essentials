import React from 'react'
import { useNavigate } from 'react-router-dom'

const SearchSuggestions = ({ suggestions }) => {

    const navigate = useNavigate()

  return (
    <>
     <div className='absolute top-full left-0 w-full bg-white shadow-lg rounded-lg'>
        {suggestions.map(item => (
            <div
              key={item.id}
              onClick={() => navigate(`/search?q=${item.title}`)}
              className='p-3 cursor-pointer hover:bg-gray-100'
            >
                <div className="flex items-center gap-3">
  <img
    src={item.image}
    alt={item.title}
    className="w-10 h-10 object-cover rounded"
  />

  <div>
    <p>{item.title}</p>
    <p className="text-xs text-gray-500">
      {item.brand}
    </p>
  </div>
</div>
            </div>
        ))}
     </div>
    </>
  )
}

export default SearchSuggestions
