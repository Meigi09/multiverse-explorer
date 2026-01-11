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
        value={search} // controlled input
        onChange={searchTerm} // call parent handler
        placeholder="Search..."
      />

      {/* <ul>
        {filteredData?.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul> */}
    </div>
  );
}
