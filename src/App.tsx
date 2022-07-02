import {
  OrbitControls,
  PerspectiveCamera,
  SpotLight,
  Stage,
} from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import './App.css'
import Model from './assets/Room'

function Background() {
  return (
    <>
      <fog attach='fog' args={['#555555', 10, 50]} />
      <color attach='background' args={['#555555']} />
      <mesh
        position={[0, -2, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        castShadow
        receiveShadow
        scale={3}
      >
        <planeGeometry args={[200, 200]} />
        <meshPhongMaterial color='f4d1ff' shininess={0} />
      </mesh>
    </>
  )
}

function App() {
  return (
    <div>
      <Suspense fallback={<h1>loading...</h1>}>
        <Canvas
          style={{ height: '100vh' }}
          gl={{ preserveDrawingBuffer: true }}
          shadows
          dpr={[1, 1.5]}
        >
          <Background />
          <PerspectiveCamera
            makeDefault
            position={[-5, 2.5, 4]}
            fov={50}
            far={1000}
            near={0.1}
          />
          <Model />
          <ambientLight intensity={0.3} />
          <directionalLight
            position={[-10, 10, 10]}
            intensity={0.7}
            castShadow={true}
          />
          <OrbitControls maxPolarAngle={Math.PI / 2} />
        </Canvas>
      </Suspense>
    </div>
  )
}

export default App
