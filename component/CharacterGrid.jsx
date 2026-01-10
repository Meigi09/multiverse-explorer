import React, { useEffect, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
import CharacterCard from "./CharacterCard";

export default function CharacterGrid({ seeCharacter }) {
  // const [character, setCharacter] = useState(null);

  return (
    <div>
      <div className="character-grid">
      {seeCharacter?.map((character) => (
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
      <LoadingSpinner />
    </div>
  );
}
