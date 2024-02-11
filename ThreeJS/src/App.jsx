import { React } from 'react';

import { Cube } from '../component/cube';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, OrbitControls} from '@react-three/drei';

import './App.css'

function App() {
 
 

  return (
    <>
    <div style={{ width: '80vh', height: '80vh' }}>
      <h1>Threejs</h1>
      <Canvas style={{ width: '100%', height: '100%' }}>
        
        <Cube />
      </Canvas>

    </div>
      
      

     
    </>
  );
}

export default App
