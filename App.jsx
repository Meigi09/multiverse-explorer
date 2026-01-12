"use client";
import React, { useEffect, useState } from "react";
import Header from "./component/Header";
import SearchControls from "./component/SearchControls";
import FilterBar from "./component/FilterBar";
import CharacterGrid from "./component/CharacterGrid";
import Pagination from "./component/Pagination";

export default function App() {
  const [apiLinks, setApiLinks] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [page,setPage] = useState(null);
  const [search,setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);  
  const [category, setCategory] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(20);

  

  useEffect(() => {
    const fetchCharacters = async () => {
      try {      
        const response = await fetch(
          "https://rickandmortyapi.com/api/character"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setTimeout(() => {
          setIsLoading(false); 
          setApiLinks(result);         
        }, 2000);
      } catch (e) {       
        setError(e.message);
      }
    };

    fetchCharacters();

    if (apiLinks?.results) {
      // Example: Extract unique status, type, species
      const statuses = Array.from(
        new Set(apiLinks.results.map((c) => c.status))
      ).filter(Boolean);
      const types = Array.from(
        new Set(apiLinks.results.map((c) => c.type))
      ).filter(Boolean);
      const species = Array.from(
        new Set(apiLinks.results.map((c) => c.species))
      ).filter(Boolean);

      // You can combine them or handle separately
      const allCategories = ["all", ...statuses, ...types, ...species];
      setCategory(allCategories);
    }

  }, [apiLinks]);

  function getInput(event) {
    setSearch(event.target.value); // just update the string
  }
 
 const applyFilters = (searchQuery, category) => {
   let filtered = apiLinks?.results || [];

   // Search logic
   if (searchQuery) {
     filtered = filtered.filter((item) =>
       item.name.toLowerCase().includes(searchQuery.toLowerCase())
     );
   }

   // Category logic (dynamic for status/type/species)
   if (category && category !== "all") {
     filtered = filtered.filter(
       (item) =>
         item.status === category ||
         item.type === category ||
         item.species === category
     );
   }

   setFilteredData(filtered);
 };


 const handleCategoryChange = (category) => {
   setActiveCategory(category);
   applyFilters(search, category);
 };


  return (
    <div>
      <Header />
      <SearchControls searchTerm={getInput} search={search} />
      {/* {category} */}
      <FilterBar
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
        categories={category}
      />
      <CharacterGrid
        characters={filteredData.length > 0 ? filteredData : apiLinks?.results}
        loading={isLoading}        
      />
      <Pagination />
    </div>
  );
}
