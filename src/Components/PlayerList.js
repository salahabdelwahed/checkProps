import React from "react";
import DataPlayers from '../Players.json'
import Name from "./Name";
import Image from "./Image";
import Nationality from "./Nationality";
//import Team from './Team';
import Age from "./Age";
import { Button, Card } from "react-bootstrap"; 
import '../CSS/myCards.css'


const PlayerList = () => {
  return (
   
    <div className="myCards">
      {DataPlayers.map((player,index)=>
      
        <Card key={index} style={{ width: "18rem" }}>
        <Image imagePlayer={player.image} />
        <Card.Body>
          <Name name={player.name} />
          <Nationality nat={player.nationality} />
          <Button variant="primary">
            <Age age={player.age} />
          </Button>
        </Card.Body>
      </Card>
      
      )}
    
    </div>
  );
};

export default PlayerList;
