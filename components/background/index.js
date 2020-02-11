import React, { Suspense, useRef, useEffect } from "react";
import { GLTFLoader } from "./GLTFLoader";
import { OrbitControls } from "./OrbitControls";
import {
  extend,
  Canvas,
  useLoader,
  useThree,
  useFrame
} from "react-three-fiber";
import classes from "./background.module.css";

extend({ OrbitControls });

function Head() {
  const gltf = useLoader(GLTFLoader, "/static/three/modelSD.glb");
  return <primitive object={gltf.scene} position={[0, 0, 0]} />;
}

function Controls(props) {
  const ref = useRef();
  const {
    camera,
    gl: { domElement }
  } = useThree();
  useFrame(() => ref.current.update());
  return <orbitControls ref={ref} args={[camera, domElement]} {...props} />;
}

function Background() {
  let container = useRef();
  let options = {
    enableZoom: false,
    enableDamping: true,
    dampingFactor: 1.5,
    rotateSpeed: 0.2,
    maxPolarAngle: 45,
    minPolarAngle: 0,
    minAzimuthAngle: -Math.PI * (1 / 2),
    maxAzimuthAngle: Math.PI * (1 / 2)
  };

  // eslint-disable-next-line
  useEffect(_ => gsap.to(container.current, 0.5, { opacity: 1 }));

  return (
    <div className={classes.Container} ref={container}>
      <Canvas camera={{ position: [0, 0, 300] }}>
        <ambientLight />
        <Controls {...options} />
        <Suspense fallback={null}>
          <Head />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default Background;
