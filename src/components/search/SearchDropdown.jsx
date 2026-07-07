import React, { useState } from 'react'

const SearchDropdown = () => {
      const [category, setCategory] = useState('All')
    

  return (
   <>
   <div>
    <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
         className='w-auto px-1 sm:px-2 py-[7px] sm:py-3 text-sm cursor-pointer text-gray-800 bg-gray-300 outline-none rounded-tl-md rounded-bl-md border-2 border-transparent focus-within:border-violet-400 ' 
        
         style={{width: `${category.length + 3}ch`}}
        >
          <option > All </option>
          <option > Electronic  </option>
          <option > Fashion  </option>
          <option > Shoes  </option>
          <option > Books </option>
         </select>
   </div>
   </>
  )
}

export default SearchDropdown
