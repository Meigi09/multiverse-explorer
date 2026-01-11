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

  }, []);

  function getInput(event) {
    setSearch(event.target.value); // just update the string
  }
 
  return (
    <div>
      <Header />
      <SearchControls
        searchTerm={getInput}
        search={search}
        data={apiLinks?.results}
      />
      <CharacterGrid
        seeCharacter={apiLinks?.results}
        loading={isLoading}
        search={search}
      />
      <FilterBar />
      <Pagination />
    </div>
  );
}
