import React from 'react';
import { Cube } from '../component/cube';
import { Canvas } from '@react-three/fiber';
import { Cube2 } from '../component/Cube2';
import './App.css'

function App() {
  return (
    <div >
       <h1>Threejs</h1>
      <div style={{ width: '80vh', height: '80vh', display: 'flex' }}>
     
      <div style={{ flex: 1 }}>
        <Canvas style={{ width: '600px', height: '600px' }}>
          <Cube />
        </Canvas>
      </div>
      <div style={{ flex: 1 }}>
        <Canvas style={{ width: '600px', height: '600px' }}>
          <Cube2 />
        </Canvas>
      </div>
      </div>
      
      <div>
        <h2>Controls</h2>
        <p>Click and drag to rotate the cube</p>
      </div>
    </div>
  );
}

export default App;