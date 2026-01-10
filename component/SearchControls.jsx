import React from 'react'

export default function SearchControls({ searchTerm, search }) {
 
  return (
    <div className='search'>
      <input
        type="text"
        name="search"
        id="search"
        value={search} // controlled input
        onChange={searchTerm} // call parent handler
        placeholder="Search..."
      />
    </div>
  );
}
