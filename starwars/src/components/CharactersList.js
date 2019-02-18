import React from 'react';
import Character from './Character';
import './StarWars.css';


const CharactersList = props => {
    return (
        <div className="characters-list">
            {props.starwarsChars.map(characters => (<Character key={characters.created} starwarsChars={characters} starwarsFilms={props.starwarsFilms} />))}
            {/* {props.starwarsChars.map(characters => (<Character key={characters.created} starwarsChars={characters} getFilms={props.getFilms} />))} */}
        </div>
    )
};

export default CharactersList;