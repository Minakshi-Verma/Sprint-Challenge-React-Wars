import React, {useState, useEffect} from 'react';
import Axios from "axios";
import CardContainer from "./components/CardContainer";
import styled from "styled-components";
import './App.css';

const WrapperDiv = styled.div`
    width: 100%;
    height: 100%;
    background-color: #990000;
    padding: 2%;
    font-size: 1.2rem;
    color: black;
    // margin: 0 auto;     
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [characters, setCharacters] = useState([])
  // in useState you need to put [] inside the (), since you know you are getting array here and that array you have to map over.

   // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() =>{
    Axios.get(`https://swapi.co/api/people/`)
    .then(Response =>{
      console.log ("I am an axios call from the App", Response)
      setCharacters(Response.data.results)
    })
    .catch(Error =>{
      console.log ("Data can not be displayed", Error)
    })
    
  }, [])

  return (
    <WrapperDiv className="App">
      <h1 className="Header, h1:hover">React Wars</h1>
      <CardContainer characters = {characters}/>
      {/* you can use: data = {characters} if same name confuses you! And then data would be passed as props */}
    </WrapperDiv>
  );
}

export default App;
