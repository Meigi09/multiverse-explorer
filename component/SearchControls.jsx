import React from 'react'

export default function SearchControls({ searchTerm, search,data }) {
  // Filter the data dynamically
  const filteredData = data?.filter((item) => {
    // Return the item if the search query is empty
    if (search === "") {
      return item;
    }
    // Otherwise, check if the item's name (or other property) includes the query
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
