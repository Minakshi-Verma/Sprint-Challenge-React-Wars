import React from 'react';
import { Card, CardHeader, CardBody,
  CardText } from 'reactstrap';

import styled from "styled-components";

const StCard = styled.div`
  background: #33ccff;
  color: black;
  width: 200px;
  max-height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Stheader = styled.div`
  background: black;
  color:#e6f7ff;
  margin-bottom: 20px;
  width: 200px;
  font-size: 1.5rem;
`;





const StarCard = (props) =>{
    
    
    
    return(
        
        
       
            <Card>
            <StCard>
                <Stheader><CardHeader>{props.name }</CardHeader></Stheader>
                <CardBody>
                    <CardText>Height: {props.height} </CardText>
                    <CardText>Hair Color:{props.hairColor} </CardText>
                    <CardText> Birth Year:{props.birthYear}</CardText>
                    <CardText>Gender:{props.gender}</CardText>          
                </CardBody>
            
            </StCard>       
            </Card>
        




            // {/* <h1>Name: {props.name }</h1>
            // <p>Height: {props.height} </p>
            // <p>Hair Color:{props.hairColor} </p>
            // <p>Birth Year:{props.birthYear}</p>
            // <p>Gender:{props.gender}</p> */}



    )
}

export default StarCard;