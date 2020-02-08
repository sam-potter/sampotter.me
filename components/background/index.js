import * as THREE from "three";
import React, { useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import classes from "./background.module.css";

function Box(props) {
  return (
    <mesh {...props}>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1, 1]} />
      <meshBasicMaterial attach="material" map={props.texture} />
    </mesh>
  );
}

function Background(props) {
  let easing = 0.00005;
  let mouseX = 0;
  let mouseY = 0;
  let container = useRef();
  let boxes = Array(1000).fill(0);
  let [texture, setTexture] = useState();

  useEffect(() => {
    setTexture(new THREE.TextureLoader().load("/static/images/texture.jpg"));
    // eslint-disable-next-line
    gsap.to(container.current, 500, { opacity: 100 });
  }, []);

  function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function _handleDocumentMouseMove(event) {
    mouseX = (event.clientX - window.innerWidth / 2) * 2;
    mouseY = (event.clientY - window.innerHeight / 2) * 2;
  }

  function Camera() {
    function map(n, start1, stop1, start2, stop2) {
      return ((n - start1) / (stop1 - start1)) * (stop2 - start2) + start2;
    }

    useFrame(({ camera }) => {
      let _easing = map(Math.abs(camera.position.x), 0, 10, easing, 0);

      camera.position.x += (mouseX - camera.position.x) * _easing;
      camera.position.y += (-mouseY - camera.position.y) * _easing;

      camera.lookAt(0, 0, 0);
      camera.updateProjectionMatrix();
    });

    return null;
  }

  return (
    <div className={classes.Container} ref={container}>
      <Canvas position={[0, 0, 600]} onPointerMove={_handleDocumentMouseMove}>
        <ambientLight />
        {boxes.map((el, i) => {
          let x = random(-20, 20);
          let y = random(-20, 20);
          let z = random(-20, 20);
          return <Box key={i} texture={texture} position={[x, y, z]} />;
        })}
        <Camera />
      </Canvas>
    </div>
  );
}

export default Background;
