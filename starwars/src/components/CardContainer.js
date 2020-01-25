import React from 'react';
import StarCard from "./StarCard";


import styled from "styled-components";


const Container = styled.div`
    background: black;
    width:80%;
    min-height: 100vh;  
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin: auto;
    padding:5%;

 `;


const CardContainer = (props) =>{
    console.log("I am an array", props.characters)   

    
    return(

        <Container>        
            {props.characters.map(character =>(

            <StarCard 
            key = {character.name}
            name ={character.name}
            height ={character.height}
            hairColor ={character.hair_color}
            birthYear ={character.birth_year}
            gender ={character.gender}
            />
            ))}           
    
        </Container>      

    )
}

export default CardContainer;