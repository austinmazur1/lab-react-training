import { useState } from 'react';
import dice0 from '../assets/images/dice-empty.png';
import dice1 from '../assets/images/dice1.png';
import dice2 from '../assets/images/dice2.png';
import dice3 from '../assets/images/dice3.png';
import dice4 from '../assets/images/dice4.png';
import dice5 from '../assets/images/dice5.png';
import dice6 from '../assets/images/dice6.png';

const Dice = () => {
  const [dice, setDice] = useState(dice0);
  const numbers = [dice0, dice1, dice2, dice3, dice4, dice5, dice6];

  const getRandomNumber = () => {
    const randomIndex = Math.floor(Math.random() * numbers.length);
    setDice(numbers[randomIndex]);
  };

  const rollDice = () => {
    setDice(dice0);
    setTimeout(getRandomNumber, 1000);
  };
  return (
    <div>
      <img onClick={rollDice} src={dice} alt="dice" />
    </div>
  );
};

export default Dice;
