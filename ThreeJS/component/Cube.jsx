import React, { useRef } from 'react';
import { Box, OrbitControls} from '@react-three/drei';
import {useFrame} from '@react-three/fiber';


export function Cube() {

    const ref = useRef(null);

    useFrame(() => {

        ref.current.rotation.x += 0.001;
        ref.current.rotation.y += 0.001;
    });
  

  return (
    <>
    <mesh ref={ref} style={{ width: '100%', height: '100%' }}>
        <Box >
                    <OrbitControls />
                    <boxGeometry/>
                    <meshBasicMaterial color="red" />
        </Box>
            
    </mesh>
     
     
    </>
  )
}