import './App.css';
import { Box, Flex } from '@chakra-ui/react';
import Sqaure from './Component/Sqaure';
import { useState } from 'react';

function App() {
  const [sqareFill, setsqareFill] = useState(Array(9).fill(null));
  const [nextTurn, setNextTurn] = useState(false);

  const calculateWinner = () => {
    const winningList = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningList.length; i++) {
      const [a, b, c] = winningList[i];
      if (
        sqareFill[a] &&
        sqareFill[a] === sqareFill[b] &&
        sqareFill[a] === sqareFill[c]
      ) {
        return sqareFill[a];
      }
    }
    return null;
  };

  const handleClick = (i) => {
    if (sqareFill[i] || calculateWinner()) {
      return;
    }
    console.log('Click !!');
    const newSqaure = sqareFill.slice();
    newSqaure[i] = nextTurn ? '0' : 'X';
    setsqareFill(newSqaure);
    setNextTurn(!nextTurn);
  };

  const winner = calculateWinner();
  let status = winner
    ? `Winner : ${winner}`
    : `Next Player : ${nextTurn ? '0' : 'X'}`;

  return (
    <Flex
      flexDir='column'
      h='100vh'
      w='100vw'
      alignItems='center'
      justifyContent='center'
      gap='4px'
    >
      <Box>{status}</Box>
      <Flex gap='4px' alignItems='center' justifyContent='center'>
        <Sqaure value={sqareFill[0]} handleClick={() => handleClick(0)} />
        <Sqaure value={sqareFill[1]} handleClick={() => handleClick(1)} />
        <Sqaure value={sqareFill[2]} handleClick={() => handleClick(2)} />
      </Flex>
      <Flex gap='4px' alignItems='center' justifyContent='center'>
        <Sqaure value={sqareFill[3]} handleClick={() => handleClick(3)} />
        <Sqaure value={sqareFill[4]} handleClick={() => handleClick(4)} />
        <Sqaure value={sqareFill[5]} handleClick={() => handleClick(5)} />
      </Flex>
      <Flex gap='4px' alignItems='center' justifyContent='center'>
        <Sqaure value={sqareFill[6]} handleClick={() => handleClick(6)} />
        <Sqaure value={sqareFill[7]} handleClick={() => handleClick(7)} />
        <Sqaure value={sqareFill[8]} handleClick={() => handleClick(8)} />
      </Flex>
    </Flex>
  );
}

export default App;
