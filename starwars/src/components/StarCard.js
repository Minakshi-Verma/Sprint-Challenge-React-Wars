import React from 'react';
import { Card, CardHeader, CardBody,
  CardText } from 'reactstrap';

import styled from "styled-components";

const StCard = styled.div`
  background: #33ccff;
  color: black;
  width: 200px;
//   min-height:
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  border-radius:20px;
  margin: 40px;
  flex-wrap: nowrap;
  
  
`;

const Stheader = styled.div`
  background: black;
  color:#e6f7ff;
  margin-bottom: 20px;
  width: 200px;
  font-size: 1.5rem;
  border-radius:10px;
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
    )
}

export default StarCard;