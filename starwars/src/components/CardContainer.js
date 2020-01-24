import React from 'react';
import Card from "./StarCard";


import styled from "styled-components";


const Container = styled.div`
  background: black;
  min-height: 400vh;  
  display: flex;
  justify-content: space-around;
  flex-wrap: nowrap;

 `;


const CardContainer = (props) =>{
    console.log("I am an array", props.characters)   

    
    return(

        <Container>
        
            {props.data.map(character =>(

            <Card 
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