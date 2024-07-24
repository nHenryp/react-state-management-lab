// src/App.jsx

import './App.css'
import React, { useState } from 'react';

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [zombieFighters, setZombieFighters] = useState([
    {
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://via.placeholder.com/150/92c952',
    },
    {
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://via.placeholder.com/150/771796',
    },
    {
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://via.placeholder.com/150/24f355',
    },
    {
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/d32776',
    },
    {
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://via.placeholder.com/150/1ee8a4',
    },
    {
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://via.placeholder.com/150/66b7d2',
    },
    {
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://via.placeholder.com/150/56acb2',
    },
    {
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://via.placeholder.com/150/8985dc',
    },
    {
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://via.placeholder.com/150/392537',
    },
    {
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/602b9e',
    },
  ]);
const [totalStrength, setTotalStrength] = useState(0)
const [totalAgility, setTotalAgility] = useState(0)


  const handleAddFighter = (zombieFighter) => {
    if (money >= zombieFighter.price) {
      setTeam([...team, zombieFighter])
      setMoney(money - zombieFighter.price)
      setTotalStrength(totalStrength + zombieFighter.strength)
      setTotalAgility(totalAgility + zombieFighter.agility)
      console.log(`Added ${zombieFighter.name} to the team`)
    } else {
      console.log('not enough money to add this fighter')
    }

  }
  const handleRemoveFighter = (member) => {
    
  }




  return (
    <>
      <h1>Zombie Fighter!</h1>
      <h3>Money: {money}</h3>
      <h3>Team Strength: {totalStrength}</h3>
      <h3>Team Agility: {totalAgility}</h3>

      <h3>Team:</h3>
      {team.length === 0 ? (
        <p>Pick some team members!</p>
      ) : (
        <ul>
          {team.map((member) => (
            <li key={member.name}>
              {member.name}
              <img src={member.img} alt={member.name} />
              <p><span>Price:</span> {member.price}</p>
              <p><span>Strength:</span>{member.strength}</p>
              <p><span>Agility:</span>{member.agility}</p>
              <button onClick={() => handleAddFighter(member)}>Remove</button>
            </li>
          ))}
        </ul>
      )
      }

      <ul><h3>Fighters:</h3>
        {zombieFighters.map((zombieFighter) => (
          <li key={zombieFighter.name}>{zombieFighter.name}
            <img src={zombieFighter.img}></img>
            <p><span>Price:</span>{zombieFighter.price}</p>
            <p><span>Strength:</span>{zombieFighter.strength}</p>
            <p><span>Agility:</span>{zombieFighter.agility}</p>
            <button onClick={() => handleAddFighter(zombieFighter)}>Add</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
