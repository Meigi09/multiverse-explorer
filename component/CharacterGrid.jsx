import React, { useEffect, useMemo, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
import CharacterCard from "./CharacterCard";

export default function CharacterGrid({ characters, loading }) {
  // const [character, setCharacter] = useState(null);

  const renderedCharacters = useMemo(() => characters || [], [characters]);

   function renderData() {
     const startIndex = (currentPage - 1) * itemsPerPage;
     const endIndex = startIndex + itemsPerPage;
     const currentItems = data.slice(startIndex, endIndex);

     return (
       <ul>
         {currentItems.map((item) => (
           <li key={item.id}>{item.name}</li>
         ))}
       </ul>
     );
   }

   function goToNextPage() {
     setCurrentPage((prevPage) => prevPage + 1);
   }

   function goToPrevPage() {
     setCurrentPage((prevPage) => prevPage - 1);
   }

   function goToSpecificPage(pageNumber) {
     setCurrentPage(pageNumber);
   }

   function renderPaginationControls() {
     const totalPages = Math.ceil(data.length / itemsPerPage);

     return (
       <div>
         <button onClick={goToPrevPage} disabled={currentPage === 1}>
           Previous
         </button>
         {Array.from({ length: totalPages }, (_, i) => (
           <button key={i} onClick={() => goToSpecificPage(i + 1)}>
             {i + 1}
           </button>
         ))}
         <button onClick={goToNextPage} disabled={currentPage === totalPages}>
           Next
         </button>
       </div>
     );
   }


  return (
    <div>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="character-grid">
          {renderedCharacters?.map((character) => (
            <CharacterCard
              key={character.id}
              image={character.image}
              name={character.name}
              status={character.status}
              species={character.species}
              gender={character.gender}
              origin={character.origin.name}
            />
          ))}
        </div>
      )}
    </div>
  );
}
