import React from 'react';
import Character from './Character';


const CharactersList = props => {
    return (
        <div className="characters-list">
            {props.starwarsChars.map(characters => (<Character starwarsChars={characters} />))}
        </div>
    )
};

export default CharactersList;