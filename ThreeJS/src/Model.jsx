import { Box } from "@react-three/drei";


import './App.css'

export default function Model({ ...props}) {
  

  return (
    <>
      <Box args={[1, 1, 1]} rotation={[0.5, 0, 0]}>
        <meshNormalMaterial />

      </Box>
     
    </>
  )
}


