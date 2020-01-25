import React from 'react';
import { Card, CardHeader, CardBody,
  CardText } from 'reactstrap';

import styled from "styled-components";

const StCard = styled.div`
  background: #bfbfbf;
  color: black;
  font-size: 1.1rem;
//   width:100%;; height in vh and width in % causing issue in using flexwrap. So, use px units.
//   height:30vh;
  width:240px;;
  height:280px;
  display:flex;
  align-items: center;
  justify-content: space-evenly;  
  border-radius:5%;
  margin: 20px 20px 20px 0;
//   padding: 10% 1% 1% 10%;
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
                    <CardText><strong>Height:</strong><small> {props.height}</small> </CardText>
                    <CardText><strong>Hair Color:</strong><small> {props.hairColor}</small> </CardText>
                    <CardText><strong>Birth Year:</strong><small> {props.birthYear}</small></CardText>
                    <CardText><strong>Gender:</strong><small> {props.gender}</small></CardText>          
                </CardBody>
              </StCard>                  
            </Card> 
    )
}

export default StarCard;