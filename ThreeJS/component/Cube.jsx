import React, { useRef } from 'react';
import { Box, OrbitControls,} from '@react-three/drei';
import {useFrame, useThree} from '@react-three/fiber';
import { EdgesGeometry, LineBasicMaterial } from 'three';


export function Cube() {

    const ref = useRef(null);
    const { camera } = useThree();
    camera.position.z = 2;
    
    useFrame(() => {

        ref.current.rotation.x += 0.001;
        ref.current.rotation.y += 0.001;
    });
  

  return (
    <>
    <mesh ref={ref} style={{ width: '100%', height: '100%' }}>
        <Box args={[5, 5, 5]}>
                    <OrbitControls enablePan={false} />
                    <boxGeometry />
                    <meshBasicMaterial color="red" />     
        </Box>
        
    </mesh>
     
     
    </>
  )
}