import React from "react";

const SearchBox = ({seachfield,searchChange}) =>{
  return (
    <div className="pa2">
      <input 
        className="pa3 ba bg-black pink" 
        type='search' 
        placeholder="search books"
        onChange={searchChange}
      />
    </div>
  )
}
export default SearchBox