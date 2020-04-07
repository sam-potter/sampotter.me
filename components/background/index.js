import * as THREE from "three";
import React, { Suspense, useRef, useEffect } from "react";
import { Canvas, useLoader, useFrame } from "react-three-fiber";

import { GLTFLoader } from "./GLTFLoader";

function Head() {
  const gltf = useLoader(GLTFLoader, "/static/three/modelSD.glb");

  // const geometry = gltf.nodes.Node.geometry;
  // const wireframe = new THREE.WireframeGeometry(geometry);
  // const line = new THREE.LineSegments(wireframe);
  // line.material.transparent = true;
  // line.material.opacity = 0.25;
  // line.material.vertexColors = "#000";

  return <primitive object={gltf.scene} />;
}

function Background() {
  let container = useRef();
  let mouse = 0;
  let easing = 0.03;

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const onLoad = _ => gsap.to(container.current, 1, { delay: 0.5, opacity: 1 });

  const handleMouseMove = _ => {
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
    <div className="container" ref={container}>
      <Canvas camera={{ position: [0, 0, 350] }}>
        <ambientLight />
        <Camera />
        <Suspense fallback={null}>
          <Head onLoad={onLoad} />
        </Suspense>
      </Canvas>

      <style jsx>{`
        .container {
          position: absolute;
          top: 0;
          left: 50%;
          width: 50vw;
          height: 100vh;
        }

        .container canvas {
          outline: 0;
        }
      `}</style>
    </div>
  );
}

export default Background;
