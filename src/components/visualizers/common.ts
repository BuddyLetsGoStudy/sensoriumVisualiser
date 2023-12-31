import { ICoordinateMapper } from "../mappers/coordinateMappers/common";
import { IMotionMapper } from "../mappers/motionMappers/common";
import { IScalarTracker } from "../mappers/valueTracker/common";
import { ColorPaletteType } from "./palettes";

export type freData = any;

export interface VisualProps {
  coordinateMapper: ICoordinateMapper;
  scalarTracker: IScalarTracker;
  palette?: ColorPaletteType;
  freqData?: freData;
}

export interface MotionVisualProps {
  motionMapper: IMotionMapper;
  scalarTracker?: IScalarTracker;
  palette?: ColorPaletteType;
}
