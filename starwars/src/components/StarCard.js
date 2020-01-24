import React from 'react';
import { Card, CardHeader, CardBody,
  CardText } from 'reactstrap';


import styled from "styled-components";



const StarCard = (props) =>{
    
    
    
    return(
        <div>
        
        <Card>
            <CardHeader>{props.name }</CardHeader>
            <CardBody>
            <CardText>Height: {props.height} </CardText>
            <CardText>Hair Color:{props.hairColor} </CardText>
            <CardText> Birth Year:{props.birthYear}</CardText>
            <CardText>Gender:{props.gender}</CardText>          
            </CardBody>       
        </Card>
        




            {/* <h1>Name: {props.name }</h1>
            <p>Height: {props.height} </p>
            <p>Hair Color:{props.hairColor} </p>
            <p>Birth Year:{props.birthYear}</p>
            <p>Gender:{props.gender}</p> */}


        </div>

    )
}

export default StarCard;