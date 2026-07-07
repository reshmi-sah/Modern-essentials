import React, { useEffect, useRef, useState } from 'react'
import { IoSearch } from "react-icons/io5";
import SearchDropdown from './SearchDropdown';
import { useNavigate } from 'react-router-dom'
import { products } from '../../data/products';
import useDebounce from '../../hooks/useDebounce';
import { searchProducts } from '../../utils/searchProducts';
import SearchSuggestions from './SearchSuggestions';
import {useClickOutside} from '../../hooks/useClickOutside'

const SearchBar = () => {

  const [focus, setFocus] = useState(false)
  const [search, setSearch] = useState('')
  const navigate = useNavigate()
 
  const handleSubmit = (e) => {
    e.preventDefault()
    if(!search.trim()) return
    navigate(`/search?q=${search}`)
  }

  const debouncedSearch = useDebounce(search, 500)
  const suggestions = searchProducts(
    products, 
    debouncedSearch
  ).slice(0, 5)

// console.log("search:", search)
// console.log("debounced:", debouncedSearch)

 const searchRef = useRef(null)
 useClickOutside (
  searchRef, 
  () => setFocus(false)
 )


  return (
    <>
     <div 
     ref={searchRef}
     className={` relative flex items-center  rounded-md  border-[1px] transition duration-100
     ${focus ? 'border-violet-400 shadow-[0_0_0_3px_rgba(168,85,247,0.25)] ' : 'border-transparent'} 
      `}>
        
          <SearchDropdown />
         
        {
  focus &&
  search.trim() &&
  suggestions.length > 0 && (
    <SearchSuggestions suggestions={suggestions} />
  )
}

       <form  
       className='flex-1 '
       onSubmit={handleSubmit}>
        <input 
          className='w-full px-2 sm:px-4 py-2 sm:py-3 outline-0 text-black bg-white '
        type="text" 
        placeholder='Search something........' 
        value={search}
        onChange={(e) => setSearch(e.target.value)}


        onFocus={() => setFocus(true)}
        /></form> 
     
       <button
       type='submit'
        className='bg-gradient-to-r from-slate-300 via-purple-300 to-slate-300 cursor-pointer active:scale-95 px-2 sm:px-4 py-2 sm:py-3 transition duration-150 rounded-tr-md rounded-br-md '>
        <IoSearch className='text-xl sm:text-2xl text-black' />
       </button>

     </div>
    </>
  )
}

export default SearchBar
