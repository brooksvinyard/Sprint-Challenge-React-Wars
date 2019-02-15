import React from 'react';
// import CharactersList from './CharactersList';

function Character(props) {
    return (
        <div className='character'>
            <h3>{props.starwarsChars.name}</h3>
            <p>{`Gender: ${props.starwarsChars.gender}`}</p>
            <p>{`Hair Color: ${props.starwarsChars.hair_color}`}</p>
            <p>{`Eye Color: ${props.starwarsChars.eye_color}`}</p>
            <p>{`Height: ${props.starwarsChars.height}`}</p>
            <p>{`Mass: ${props.starwarsChars.mass}`}</p>
        </div>
    )
};


export default Character;