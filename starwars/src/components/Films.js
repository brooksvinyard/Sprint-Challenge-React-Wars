import React from 'react';
// import Character from './Character';


// I did not finishe this part yet. I was trying to line up the films on the character prop with the film URL on the API call
function Films(props) {

    return (

        props.starwarsFilms.map(e => {

            if (props.films === e.url) {
                
                return (
                    <div className='film'key={e.url} ><li>{e.title}</li></div>
                    )
            }
            else {
                return (null)
            }
    
        })

        )



    //     <div className='films'>
    //         {/* {props.films} */}
    //         {/* {props.starwarsFilms.map(e => {console.log(e.url)})} */}



};


export default Films;