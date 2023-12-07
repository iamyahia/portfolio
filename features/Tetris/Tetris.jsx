"use client";
import { Html, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";
import { Vector3 } from "three";
import { CameraDirectionUpdater } from "./components/CameraDirectionUpdater";
import MiniAxes from "./components/MiniAxes";
import {
  Block,
  FallenCubes,
  Tetrimino,
  Tetriminos,
} from "./components/Tetrimino";
import ThreeSidedGrid from "./components/ThreeSidedGrid";

import GitHubLogo from "./assets/images/github.svg";

// Randomly select block type（Multi-bag Random Generator）
let bag = [];
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
const fillBag = () => {
  const tetriminos = Object.keys(Tetriminos);
  for (let i = 0; i < 3; i++) {
    // Three of each type of cube
    bag.push(...tetriminos);
  }
  shuffleArray(bag);
};
const getRandomTetrimino = () => {
  if (bag.length === 0) {
    fillBag();
  }
  return bag.pop();
};

// Randomly rotate blocks
const rotateRandomly = (blocks) => {
  for (let i = 0; i < 5; i++) {
    const rotateTypes = Math.floor(Math.random() * 3);
    switch (rotateTypes) {
      case 0:
        blocks = blocks.map((block) => ({
          x: block.y,
          y: -block.x,
          z: block.z,
        }));
        break;
      case 1:
        blocks = blocks.map((block) => ({
          x: -block.z,
          y: block.y,
          z: block.x,
        }));
        break;
      default:
        break;
    }
  }
  return blocks;
};

// Get the bounds of the block
const getBounds = (blocks) => {
  let minX = Infinity,
    maxX = -Infinity;
  let minY = Infinity,
    maxY = -Infinity;
  let minZ = Infinity,
    maxZ = -Infinity;

  blocks.forEach((block) => {
    minX = Math.min(minX, block.x);
    maxX = Math.max(maxX, block.x);
    minY = Math.min(minY, block.y);
    maxY = Math.max(maxY, block.y);
    minZ = Math.min(minZ, block.z);
    maxZ = Math.max(maxZ, block.z);
  });

  return { minX, maxX, minY, maxY, minZ, maxZ };
};

// Get the whereabouts
const getRandomPosition = (rotatedBlocks) => {
  const bounds = getBounds(rotatedBlocks);

  const xRange = 5 - (bounds.maxX - bounds.minX);
  const zRange = 5 - (bounds.maxZ - bounds.minZ);

  const x = Math.floor(Math.random() * xRange) - bounds.minX + 0.5;
  const y = 11.5 - bounds.maxY;
  const z = Math.floor(Math.random() * zRange) - bounds.minZ + 0.5;

  return [x, y, z];
};

const Tetris = () => {
  /* ----- related variables ----- */
  // Initialization related
  const [type, setType] = useState(null);
  const [position, setPosition] = useState(null);
  const [blocks, setBlocks] = useState(null);
  const [nextType, setNextType] = useState(null);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const fallIntervalRef = useRef();

  // Get the current rotation angle
  const controlsRef = useRef(null);

  // Get camera angle
  const [cameraDirection, setCameraDirection] = React.useState(new Vector3());

  // Collection of fallen blocks
  const [gridState, setGridState] = useState(() => {
    const initialState = [];
    for (let i = 0; i < 6; i++) {
      const xLayer = [];
      for (let j = 0; j < 6; j++) {
        const yLayer = new Array(12).fill(null);
        xLayer.push(yLayer);
      }
      initialState.push(xLayer);
    }
    return initialState;
  });

  /* ----- Relevant logic ----- */
  // Generate new blocks
  const generateNewTetrimino = () => {
    // If the game is over, return directly
    if (gameOver) return;

    if (!nextType) return;
    setType(nextType); // Use the predicted block as the current block

    const newBlocks = rotateRandomly(Tetriminos[nextType].blocks);
    const newPosition = getRandomPosition(newBlocks);

    setBlocks(newBlocks);
    setPosition(newPosition);
    startFall();

    const newNextType = getRandomTetrimino(); // Predict the next block
    setNextType(newNextType);
  };

  // Start game
  const startGame = () => {
    setGameStarted(true);

    const newType = getRandomTetrimino();
    const newBlocks = rotateRandomly(Tetriminos[newType].blocks);
    const newPosition = getRandomPosition(newBlocks);

    setType(newType);
    setBlocks(newBlocks);
    setPosition(newPosition);
    setNextType(getRandomTetrimino());

    setIsPaused(false);
  };

  // End Game
  const resetGame = () => {
    setType(null);
    setBlocks(null);
    setPosition(null);
    setNextType(null);
    setScore(0);

    // Clear fallen blocks
    setGridState((prevState) => {
      const newState = [...prevState];
      for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 6; j++) {
          newState[i][j].fill(null);
        }
      }
      return newState;
    });

    setIsPaused(false);
    setGameStarted(false);
    setGameOver(false);

    // Stop falling blocks
    if (fallIntervalRef.current) {
      clearInterval(fallIntervalRef.current);
    }
  };

  // pause game
  const togglePause = () => {
    setIsPaused((prevIsPaused) => !prevIsPaused);
  };

  // The blocks start to fall
  const startFall = () => {
    // Check if all necessary variables are defined
    if (!position || !blocks || !type) return;

    if (isPaused || gameOver) return;

    if (fallIntervalRef.current) {
      clearInterval(fallIntervalRef.current);
    }

    fallIntervalRef.current = setInterval(() => {
      let [x, y, z] = position;
      let newY = y - 1; // Predicted new location
      const predictedBlocksPosition = blocks.map((block) => ({
        x: block.x + x,
        y: block.y + newY,
        z: block.z + z,
      }));

      if (isValidPosition(predictedBlocksPosition)) {
        setPosition([x, newY, z]); // If the predicted new location is valid, update the location
      } else {
        addBlockToGrid(
          blocks.map((block) => ({
            x: block.x + x,
            y: block.y + y,
            z: block.z + z,
          })),
          Tetriminos[type].color
        ); // Use current location
        generateNewTetrimino();
      }
    }, 1000);
  };

  // Limit the movement boundaries of the block
  const isValidPosition = (newBlocks) => {
    for (let { x, y, z } of newBlocks) {
      x = Math.floor(x);
      y = Math.floor(y);
      z = Math.floor(z);

      if (
        x < 0 ||
        x >= 6 ||
        z < 0 ||
        z >= 6 ||
        y < 0 ||
        y >= 12 ||
        gridState[x][z][y] !== null
      ) {
        return false;
      }
    }

    return true;
  };

  // Adds the current block to the set of fallen blocks
  const addBlockToGrid = (blocksPosition, color) => {
    const newGridState = [...gridState];

    for (let block of blocksPosition) {
      const x = Math.floor(block.x);
      const y = Math.floor(block.y);
      const z = Math.floor(block.z);
      newGridState[x][z][y] = color;
    }
    setGridState(newGridState);

    setScore((prevScore) => prevScore + 2); // Successful descent gives +2

    for (let y = 0; y < 12; y++) {
      if (isRowFull(y)) {
        clearRow(y);
      }
    }

    // Check if the top layer is full
    for (let x = 0; x < 6; x++) {
      for (let z = 0; z < 6; z++) {
        if (newGridState[x][z][11] !== null) {
          setGameOver(true);
          break;
        }
      }
    }
  };

  // Control position movement
  const handleKeyDown = (e) => {
    // If the game is paused, do nothing
    if (isPaused) return;

    if (!position || !blocks) return;

    let [x, y, z] = position;

    let newBlocks = blocks;

    const azimuthAngle = controlsRef.current?.getAzimuthalAngle() || 0;

    switch (e.key.toUpperCase()) {
      case "W":
        if (azimuthAngle >= 0 && azimuthAngle < Math.PI / 4) {
          z -= 1;
        } else {
          x -= 1;
        }
        break;
      case "S":
        if (azimuthAngle >= 0 && azimuthAngle < Math.PI / 4) {
          z += 1;
        } else {
          x += 1;
        }
        break;
      case "A":
        if (azimuthAngle >= 0 && azimuthAngle < Math.PI / 4) {
          x -= 1;
        } else {
          z += 1;
        }
        break;
      case "D":
        if (azimuthAngle >= 0 && azimuthAngle < Math.PI / 4) {
          x += 1;
        } else {
          z -= 1;
        }
        break;
      // Rotate along x-axis
      case "Q":
        newBlocks = blocks.map((block) => ({
          x: block.x,
          y: block.z,
          z: -block.y,
        }));
        break;
      // Rotate along y-axis
      case "E":
        newBlocks = blocks.map((block) => ({
          x: -block.z,
          y: block.y,
          z: block.x,
        }));
        break;
      // Rotate along the z-axis
      case "R":
        newBlocks = blocks.map((block) => ({
          x: block.y,
          y: -block.x,
          z: block.z,
        }));
        break;
      case " ":
        hardDrop();
        return;
      default:
        break;
    }

    const newBlocksPosition = newBlocks.map((block) => ({
      x: block.x + x,
      y: block.y + y,
      z: block.z + z,
    }));
    if (isValidPosition(newBlocksPosition)) {
      setPosition([x, y, z]);
      setBlocks(newBlocks);
      startFall();
    }
  };

  // Hard landing (straight to the bottom)
  const hardDrop = () => {
    if (gameOver) return;

    if (!position || !blocks || !type) return;
    let [x, y, z] = position;

    while (true) {
      let newY = y - 1;
      const predictedBlocksPosition = blocks.map((block) => ({
        x: block.x + x,
        y: block.y + newY,
        z: block.z + z,
      }));
      if (!isValidPosition(predictedBlocksPosition)) {
        break;
      }
      y = newY;
    }

    addBlockToGrid(
      blocks.map((block) => ({
        x: block.x + x,
        y: block.y + y,
        z: block.z + z,
      })),
      Tetriminos[type].color
    );
    generateNewTetrimino();
  };

  // Check if a row is full
  const isRowFull = (y) => {
    for (let x = 0; x < 6; x++) {
      for (let z = 0; z < 6; z++) {
        if (gridState[x][z][y] === null) {
          return false;
        }
      }
    }
    return true;
  };

  // Clear a full row
  const clearRow = (y) => {
    const newGridState = [...gridState];
    for (let i = y; i < 11; i++) {
      for (let x = 0; x < 6; x++) {
        for (let z = 0; z < 6; z++) {
          newGridState[x][z][i] = newGridState[x][z][i + 1];
        }
      }
    }
    for (let x = 0; x < 6; x++) {
      for (let z = 0; z < 6; z++) {
        newGridState[x][z][11] = null;
      }
    }
    setGridState(newGridState);
    setScore((prevScore) => prevScore + 10);
  };

  useEffect(() => {
    const cleanupFall = () => {
      if (fallIntervalRef.current) {
        clearInterval(fallIntervalRef.current);
      }
    };

    if (gameStarted && !isPaused) {
      startFall();
      window.addEventListener("keydown", handleKeyDown);
    } else {
      cleanupFall();
      window.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      cleanupFall();
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [position, blocks, gameStarted, isPaused]);

  return (
    <>
      {/* page title */}
      <div className="game-header">
        <div className="game-buttons-container">
          <button
            type="button"
            onClick={gameStarted ? resetGame : startGame}
            className="button-3d button-3d-start"
          >
            {gameStarted ? "Quit" : "Start"}
          </button>
          <button
            type="button"
            onClick={togglePause}
            className={`button-3d button-3d-pause ${
              gameStarted && !gameOver ? "" : "hidden"
            }`}
          >
            {isPaused ? "Continue" : "Pause"}
          </button>
        </div>
      </div>

      {/* Game subject */}
      <div className="game-container">
        {gameOver && (
          <div className="game-over-container">
            <h1>Game Over</h1>
          </div>
        )}

        {/* Game content */}
        <div className="game-canvas-left">
          <Canvas style={{ width: "100%", height: "100%" }}>
            <ambientLight intensity={2} />
            <OrbitControls
              ref={controlsRef}
              target={[2, 6, 0]}
              minDistance={20}
              maxDistance={20}
              minPolarAngle={0}
              maxPolarAngle={Math.PI / 2}
              minAzimuthAngle={0}
              maxAzimuthAngle={Math.PI / 2}
              enabled={!isPaused}
            />
            <CameraDirectionUpdater setDirection={setCameraDirection} />

            <ThreeSidedGrid />
            {type && position && blocks && (
              <Tetrimino type={type} position={position} blocks={blocks} />
            )}
            <FallenCubes gridState={gridState} />
          </Canvas>
        </div>

        {/* Rest of information */}
        <div className="game-canvas-right">
          <Canvas style={{ width: "100%", height: "100%" }}>
            <ambientLight />

            {nextType && (
              <>
                <Html position={[-0.75, 1.75, 0]} className="next-block-label">
                  <h2>Next:</h2>
                </Html>
                <Tetrimino
                  type={nextType}
                  position={[0.4, 1.6, 0]}
                  blocks={Tetriminos[nextType].blocks}
                  scale={0.15}
                />

                <Html position={[-0.75, 0.75, 0]} className="score-label">
                  <h2>Score: &nbsp; {score}</h2>
                </Html>
              </>
            )}
            <Html position={[-0.85, 0.15, 0]} className="instructions-label">
              <ul>
                <li>
                  <strong>Drag:</strong> <span>Mouse</span>
                </li>
                <li>
                  <strong>Rotate:</strong>
                  <ul>
                    <li>
                      <strong>X-axis:</strong> Q
                    </li>
                    <li>
                      <strong>Y-axis:</strong> E
                    </li>
                    <li>
                      <strong>Z-axis:</strong> R
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Hard Drop:</strong> <span>Space</span>
                </li>
              </ul>
            </Html>
            {/* <MiniAxes cameraDirection={cameraDirection} position={[0, -2, 0]} /> */}
          </Canvas>
        </div>
      </div>
    </>
  );
};

export default Tetris;
