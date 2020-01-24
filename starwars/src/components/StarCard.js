import React from 'react';
import { Card, CardHeader, CardBody,
  CardText } from 'reactstrap';

import styled from "styled-components";

const StCard = styled.div`
  background: #bfbfbf;
  color: black;
//   width:100%;;
//   height:30vh;
    width:200px;;
  height:280px;
  display:flex;
  align-items: center;
  justify-content: space-evenly;  
  border-radius:5%;
  margin: 20px;
  padding: 10%;
  flex-wrap: wrap;  
  text-align: justify;

  
`;

const Stheader = styled.div`
  background: #003300;
  color:#e6f7ff;
  margin-bottom: 20px;
  width:100%;
  font-size: 1.5rem;
  border-radius:10px;
  padding: 6%;
  text-align: center;
  `;


const StarCard = (props) =>{
       
        return(           
       
            <Card>
                <StCard>            
                <Stheader><CardHeader>{props.name }</CardHeader></Stheader>
                <CardBody>
                    <CardText><strong>Height:</strong> {props.height} </CardText>
                    <CardText><strong>Hair Color:</strong> {props.hairColor} </CardText>
                    <CardText><strong>Birth Year:</strong> {props.birthYear}</CardText>
                    <CardText><strong>Gender:</strong> {props.gender}</CardText>          
                </CardBody>
              </StCard>                  
            </Card> 
    )
}

export default StarCard;