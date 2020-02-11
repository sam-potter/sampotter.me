import React, { Suspense, useRef, useEffect } from "react";
import { GLTFLoader } from "./GLTFLoader";
import { Canvas, useLoader, useFrame } from "react-three-fiber";
import classes from "./background.module.css";

function Head({ onLoad }) {
  const gltf = useLoader(GLTFLoader, "/static/three/modelSD.glb");

  useEffect(() => {
    onLoad();
  }, []);

  return <primitive object={gltf.scene} position={[0, 0, 0]} />;
}

function Background() {
  let container = useRef();
  let mouse = 0;
  let easing = 0.03;

  const onLoad = _ => gsap.to(container.current, 1, { delay: 0.5, opacity: 1 });

  const onPointerMove = _ => {
    mouse = -(event.clientX - window.innerWidth * (3 / 4));
  };

  function Camera() {
    useFrame(({ camera }) => {
      camera.position.x += (mouse - camera.position.x) * (Math.PI / 4) * easing;
      camera.lookAt(0, 0, 0);
      camera.updateProjectionMatrix();
    });
    return null;
  }

  return (
    <div className={classes.Container} ref={container}>
      <Canvas camera={{ position: [0, 0, 350] }} onPointerMove={onPointerMove}>
        <ambientLight />
        <Camera />
        <Suspense fallback={null}>
          <Head onLoad={onLoad} />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default Background;
