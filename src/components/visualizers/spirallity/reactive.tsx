import { folder, useControls } from "leva";
import * as THREE from "three";

import { SpirallityBase } from "./base";
import { VisualProps } from "../common";
import { COLOR_PALETTE } from "../palettes";

const CubeVisual = ({ freqData, coordinateMapper, palette = COLOR_PALETTE.THREE_COOL_TO_WARM, scalarTracker }: VisualProps) => {
  const { nPerSide } = useControls({
    "Visual - Cube": folder({
      nPerSide: {
        value: 10,
        min: 3,
        max: 50,
        step: 1,
      },
    }),
  });
  const XOXOVAmpTYPEOF_SHIT_XXXXX = new THREE.MeshNormalMaterial();
  console.log({ freqData, coordinateMapper });

  return (
    <>
      <SpirallityBase scalarTracker={scalarTracker} freqData={freqData} scale={1} material={XOXOVAmpTYPEOF_SHIT_XXXXX} />
    </>
  );
};

export default CubeVisual;
