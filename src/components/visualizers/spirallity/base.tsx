/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { MutableRefObject, Ref, useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import gsap from "gsap";
import { useFrame } from "@react-three/fiber";

const groups = {
  spheres: "Group001",
  lines: "Group002",
  toures: "Group003",
  ball: "Sphere001",
};

const median = (arr: any) => {
  arr = [...arr].sort((a, b) => a - b);
  return (arr[(arr.length - 1) >> 1] + arr[arr.length >> 1]) / 2;
};

export function SpirallityBase(props: any) {
  const { freqData, scalarTracker } = props;

  const [speheresScale, setSpheresScale] = useState<any>(0);
  const [linesScale, setLinesScale] = useState<any>(0);
  const [touresScale, setTouressScale] = useState<any>(0);
  const [ballScale, setBallScale] = useState<any>(0);

  useFrame(() => {
    setSpheresScale(median(freqData.slice(0, 30)));
    setLinesScale(median(freqData.slice(30, 60)));
    setTouressScale(median(freqData.slice(60, 90)));
    setBallScale(median(freqData.slice(90, 120)));
  });

  const spheresRef = useRef<any>(undefined);
  const { nodes, scene } = useGLTF("/objects/tunnel.gltf") as any;
  const { material } = props;
  const [spheres, lines, toures, ball] = scene.children;
  // setInterval(() => console.log(freqData[120], scalarTracker), 1000);

  //   useEffect(() => {
  //     if (!spheresRef.current) return;
  //     gsap.to(spheresRef.current.rotation, {
  //       x: Math.PI * 2,
  //       ease: "linear",
  //       repeat: -1,
  //       duration: 0.5,
  //     });
  //   }, []);

  return (
    <group {...props} dispose={null}>
      <group position={[-0.001, 0, 0.086]} scale={speheresScale} ref={spheresRef}>
        {spheres.children.map((element: any) => {
          const { geometry, position, rotation } = element;
          return <mesh castShadow receiveShadow geometry={geometry} material={material} position={position} rotation={rotation} />;
        })}
      </group>
      <group position={[0, 0, 0.084]} scale={linesScale}>
        {lines.children.map((element: any) => {
          const { geometry, position, rotation } = element;
          return <mesh castShadow receiveShadow geometry={geometry} material={material} position={position} rotation={rotation} />;
        })}
      </group>
      <group position={[0.001, 0.001, 0.11]} scale={touresScale}>
        {toures.children.map((element: any) => {
          const { geometry, position, rotation } = element;
          return <mesh castShadow receiveShadow geometry={geometry} material={material} position={position} rotation={rotation} />;
        })}
      </group>
      <mesh scale={ballScale} castShadow receiveShadow geometry={ball.geometry} material={ball.material} position={ball.position} rotation={ball.rotation} />
    </group>
  );
}

useGLTF.preload("/objects/tunnel.gltf");
