import React from 'react';
// import Films from './Films';

function Character(props) {
    return (
        <div className='character'>
            <h3>{props.starwarsChars.name}</h3>
            <p>{`Gender: ${props.starwarsChars.gender}`}</p>
            <p>{`Hair Color: ${props.starwarsChars.hair_color}`}</p>
            <p>{`Eye Color: ${props.starwarsChars.eye_color}`}</p>
            <p>{`Height: ${props.starwarsChars.height}`}</p>
            <p>{`Mass: ${props.starwarsChars.mass}`}</p>
            <p>{`Skin Color: ${props.starwarsChars.skin_color}`}</p>
            
            {/* {props.starwarsChars.films.map(films => (<Films films={props.starwarsChars.films} starwarsFilms={props.starwarsFilms}/>))} */}
        </div> 
    )
};


export default Character;