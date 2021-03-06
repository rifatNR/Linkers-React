import React from 'react'
import { BsSearch } from 'react-icons/bs'


const SearchBar = ({setSearchText, search_text}) => {
    return (
        <div className='search_div'>
            <input onChange={(e) => setSearchText(e.target.value)} value={search_text} className='' type="search" />
            <BsSearch className='icon'/>
        </div>
    )
}

export default SearchBar
