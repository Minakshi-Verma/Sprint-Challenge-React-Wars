import React from 'react';
import styled from "styled-components";



const Card = (props) =>{
    
    
    
    return(
        <div>
            <h1>Name: {props.name }</h1>
            <p>Height: {props.height} </p>
            <p>Hair Color:{props.hairColor} </p>
            <p>Birth Year:{props.birthYear}</p>
            <p>Gender:{props.gender}</p>


        </div>

    )
}

export default Card;