import React, { useEffect, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
import CharacterCard from "./CharacterCard";

export default function CharacterGrid({ seeCharacter, loading, search }) {
  // const [character, setCharacter] = useState(null);

   const filteredData = seeCharacter?.filter((item) => {
     if (search === "") {
       return item;
     }
     const searchLower = search.toLowerCase();
     return (
       item.name.toLowerCase().includes(searchLower) ||
       item.status.toLowerCase().includes(searchLower) ||
       item.species.toLowerCase().includes(searchLower)        
     );
   });

  return (
    <div>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="character-grid">
          {filteredData?.map((character) => (
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
