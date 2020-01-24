import React from 'react';
import Card from "./Card";
import styled from "styled-components";


const CardContainer = (props) =>{
    console.log("I am an array", props.characters)
     const newArray = props.characters
    
    
    return(
        <div>
            {newArray.map(character =>(

                <Card 
                key = {character.name}
                name ={character.name}
                height ={character.height}
                hairColor ={character.hair_color}
                birthYear ={character.birth_year}
                gender ={character.gender}
                />
            ))}
           
        </div>

    )
}

export default CardContainer;