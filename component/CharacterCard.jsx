import React from 'react'

export default function CharacterCard({name,status,species,gender,origin,image}) {
  return (
    <div className="character-card">
      <img src={image} alt="" />
      <h2>{name}</h2>
      <strong>{status}</strong> <hr />
      <em>{species}</em>
      <p>{gender}</p>
      <p>{origin}</p>
      {/* <li>{character.episodes?.length}</li> */}
    </div>
  );
}
