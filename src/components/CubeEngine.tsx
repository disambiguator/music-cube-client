import React, { useState, useEffect, useRef, useCallback } from 'react';
import Instructions from './Instructions';
import { createCube, getRandomRotation, Rotation, performRotation } from 'music-cube';
import useMusic from 'audio/useMusic';
import Cube3D from './Cube3D';

const RANDOM_MOVE_INTERVAL = 4000;
const RANDOM_MOVE_DELAY = 2 * RANDOM_MOVE_INTERVAL;

export default function App() {
  // Create and store the current state of the cube.
  const [cube, setCube] = useState(createCube());

  // Wait for audio to be loaded.
  const audioLoaded = useMusic(cube);

  // Also require a click to start, since browsers can block music before user
  // interactivity.

  // To facilitate demoing the app, there's a checkbox in the instructions
  // which has the app make random moves after a delay. We need some state
  // for this to work.
  const [randomMovesEnabled, setRandomMovesEnabled] = useState(true);
  const lastUserMoveTimeRef = useRef(Date.now());

  // Function for rotating the cube. Second argument prevents updating the last
  // user move time, which is used when making random moves.
  const rotateCube = useCallback((rotation: Rotation, wasRandomMove = false) => {
    // Ugly -  `performRotation` mutates the cube
    setCube((c) => {
      const newCube = { ...c };
      performRotation(newCube, rotation);
      return newCube;
    });
    if (!wasRandomMove) lastUserMoveTimeRef.current = Date.now();
  }, []);

  // Set up an interval to make random moves, if no move has been made by
  // the user in awhile.
  useEffect(() => {
    if (!randomMovesEnabled) return;

    const randomMoveInterval = setInterval(() => {
      if (Date.now() - lastUserMoveTimeRef.current < RANDOM_MOVE_DELAY) return;
      const rotation = getRandomRotation();
      rotateCube(rotation, true);
    }, RANDOM_MOVE_INTERVAL);

    return () => clearInterval(randomMoveInterval);
  }, [rotateCube, randomMovesEnabled]);

  if (!audioLoaded) return <div>Loading...</div>;

  return (
    <>
      <Cube3D cube={cube} height={800} width={800} />
      <Instructions
        randomMovesEnabled={randomMovesEnabled}
        setRandomMovesEnabled={setRandomMovesEnabled}
      />
    </>
  );
}
