import React from 'react';
import Card from "./StarCard";
import {Container, Row, Col} from "reactstrap";

import styled from "styled-components";







const CardContainer = (props) =>{
    console.log("I am an array", props.characters)

    //  const newArray = props.characters
    
    
    return(

        <Container>
        <Row xs="2">
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
            
    
        </Row>
        </Container>


        // <div>
        //     {props.data.map(character =>(

        //         <Card 
        //         key = {character.name}
        //         name ={character.name}
        //         height ={character.height}
        //         hairColor ={character.hair_color}
        //         birthYear ={character.birth_year}
        //         gender ={character.gender}
        //         />
        //     ))}
           
        // </div>

    )
}

export default CardContainer;