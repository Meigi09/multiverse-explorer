import React from 'react'

export default function SearchControls({ searchTerm, search,data }) {
  
  const filteredData = data?.filter((item) => {    
    if (search === "") {
      return item;
    }   
    return item.name.toLowerCase().includes(search);
  });

  return (
    <div className="search">
      <input
        type="text"
        name="search"
        id="search"
        value={search} 
        onChange={searchTerm} 
        placeholder="Search..."
      />

      
    </div>
  );
}
