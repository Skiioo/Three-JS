import React, { useRef } from "react";
import { Box, OrbitControls } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { EdgesGeometry, LineBasicMaterial } from "three";

export function Cube2() {
  const ref = useRef(null);
  const { camera } = useThree();
  camera.position.z = 2;

  useFrame(() => {
    ref.current.rotation.x += 0.001;
    ref.current.rotation.y += 0.001;
  });

  return (
    <>
      <mesh ref={ref} style={{ width: "100%", height: "100%" }}>
        <Box args={[2, 2, 2]}>
          <OrbitControls enablePan={false} enableZoom={false} />
          <boxGeometry />
          <meshBasicMaterial color="blue" />
        </Box>
      </mesh>
    </>
  );
}
